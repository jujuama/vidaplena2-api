import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { AppointmentDomainFacade } from 'modules/appointment/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { AppointmentApplicationEvent } from './appointment.application.event'
import { AppointmentCreateDto } from './appointment.dto'

import { BusinessDomainFacade } from '../../business/domain'

@Controller('/v1/businesss')
export class AppointmentByBusinessController {
  constructor(
    
    private businessDomainFacade: BusinessDomainFacade,
    
    private appointmentDomainFacade: AppointmentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/business/:businessId/appointments')
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
      await this.appointmentDomainFacade.findManyByBusiness(
        business,
        queryOptions,
      )

    return items
  }

  @Post('/business/:businessId/appointments')
  async createByBusinessId(
    @Param('businessId') businessId: string,
    @Body() body: AppointmentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, businessId }

    const item = await this.appointmentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AppointmentApplicationEvent.AppointmentCreated.Payload>(
      AppointmentApplicationEvent
        .AppointmentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
