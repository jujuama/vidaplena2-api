import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { ServiceDomainFacade } from 'modules/service/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { ServiceApplicationEvent } from './service.application.event'
import { ServiceCreateDto } from './service.dto'

import { BusinessDomainFacade } from '../../business/domain'

@Controller('/v1/businesss')
export class ServiceByBusinessController {
  constructor(
    
    private businessDomainFacade: BusinessDomainFacade,
    
    private serviceDomainFacade: ServiceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/business/:businessId/services')
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
      await this.serviceDomainFacade.findManyByBusiness(
        business,
        queryOptions,
      )

    return items
  }

  @Post('/business/:businessId/services')
  async createByBusinessId(
    @Param('businessId') businessId: string,
    @Body() body: ServiceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, businessId }

    const item = await this.serviceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ServiceApplicationEvent.ServiceCreated.Payload>(
      ServiceApplicationEvent
        .ServiceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
