import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { FavoriteDomainFacade } from 'modules/favorite/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { FavoriteApplicationEvent } from './favorite.application.event'
import { FavoriteCreateDto } from './favorite.dto'

import { BusinessDomainFacade } from '../../business/domain'

@Controller('/v1/businesss')
export class FavoriteByBusinessController {
  constructor(
    
    private businessDomainFacade: BusinessDomainFacade,
    
    private favoriteDomainFacade: FavoriteDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/business/:businessId/favorites')
  async findManyBusinessId(
    @Param('businessId') businessId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const business =
      await this.businessDomainFacade.findOneByIdOrFail(
        businessId,
      )

    const items =
      await this.favoriteDomainFacade.findManyByBusiness(
        business,
        queryOptions,
      )

    return items
  }

  @Post('/business/:businessId/favorites')
  async createByBusinessId(
    @Param('businessId') businessId: string,
    @Body() body: FavoriteCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, businessId }

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
