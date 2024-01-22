import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { FavoriteDomainFacade } from 'modules/favorite/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { FavoriteApplicationEvent } from './favorite.application.event'
import { FavoriteCreateDto } from './favorite.dto'

import { ClientUserDomainFacade } from '../../clientUser/domain'

@Controller('/v1/clientUsers')
export class FavoriteByClientUserController {
  constructor(
    
    private clientUserDomainFacade: ClientUserDomainFacade,
    
    private favoriteDomainFacade: FavoriteDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/favorites')
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
      await this.favoriteDomainFacade.findManyByUser(
        clientUser,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/favorites')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: FavoriteCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.favoriteDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FavoriteApplicationEvent.FavoriteCreated.Payload>(
      FavoriteApplicationEvent
        .FavoriteCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
