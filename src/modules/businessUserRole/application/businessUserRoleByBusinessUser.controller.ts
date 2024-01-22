import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { BusinessUserRoleDomainFacade } from 'modules/businessUserRole/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { BusinessUserRoleApplicationEvent } from './businessUserRole.application.event'
import { BusinessUserRoleCreateDto } from './businessUserRole.dto'

import { BusinessUserDomainFacade } from '../../businessUser/domain'

@Controller('/v1/businessUsers')
export class BusinessUserRoleByBusinessUserController {
  constructor(
    
    private businessUserDomainFacade: BusinessUserDomainFacade,
    
    private businessUserRoleDomainFacade: BusinessUserRoleDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/businessUserRoles')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const businessUser =
      await this.businessUserDomainFacade.findOneByIdOrFail(
        userId,
      )

    const items =
      await this.businessUserRoleDomainFacade.findManyByUser(
        businessUser,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/businessUserRoles')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: BusinessUserRoleCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.businessUserRoleDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BusinessUserRoleApplicationEvent.BusinessUserRoleCreated.Payload>(
      BusinessUserRoleApplicationEvent
        .BusinessUserRoleCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
