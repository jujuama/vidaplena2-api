import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { ProfileDomainFacade } from 'modules/profile/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { ProfileApplicationEvent } from './profile.application.event'
import { ProfileCreateDto } from './profile.dto'

import { ClientUserDomainFacade } from '../../clientUser/domain'

@Controller('/v1/clientUsers')
export class ProfileByClientUserController {
  constructor(
    
    private clientUserDomainFacade: ClientUserDomainFacade,
    
    private profileDomainFacade: ProfileDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/profiles')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const clientUser =
      await this.clientUserDomainFacade.findOneByIdOrFail(
        userId,
      )

    const items =
      await this.profileDomainFacade.findManyByUser(
        clientUser,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/profiles')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ProfileCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.profileDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProfileApplicationEvent.ProfileCreated.Payload>(
      ProfileApplicationEvent
        .ProfileCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
