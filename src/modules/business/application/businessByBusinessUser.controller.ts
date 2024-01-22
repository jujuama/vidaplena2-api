import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { BusinessDomainFacade } from 'modules/business/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { BusinessApplicationEvent } from './business.application.event'
import { BusinessCreateDto } from './business.dto'

import { BusinessUserDomainFacade } from '../../businessUser/domain'

@Controller('/v1/businessUsers')
export class BusinessByBusinessUserController {
  constructor(
    
    private businessUserDomainFacade: BusinessUserDomainFacade,
    
    private businessDomainFacade: BusinessDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/owner/:ownerId/businesss')
  async findManyOwnerId(
    @Param('ownerId') ownerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const businessUser =
      await this.businessUserDomainFacade.findOneByIdOrFail(
        ownerId,
      )

    const items =
      await this.businessDomainFacade.findManyByOwner(
        businessUser,
        queryOptions,
      )

    return items
  }

  @Post('/owner/:ownerId/businesss')
  async createByOwnerId(
    @Param('ownerId') ownerId: string,
    @Body() body: BusinessCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, ownerId }

    const item = await this.businessDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BusinessApplicationEvent.BusinessCreated.Payload>(
      BusinessApplicationEvent
        .BusinessCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
