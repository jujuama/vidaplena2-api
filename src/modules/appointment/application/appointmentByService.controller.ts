import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { AppointmentDomainFacade } from 'modules/appointment/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { AppointmentApplicationEvent } from './appointment.application.event'
import { AppointmentCreateDto } from './appointment.dto'

import { ServiceDomainFacade } from '../../service/domain'

@Controller('/v1/services')
export class AppointmentByServiceController {
  constructor(
    
    private serviceDomainFacade: ServiceDomainFacade,
    
    private appointmentDomainFacade: AppointmentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/service/:serviceId/appointments')
  async findManyServiceId(
    @Param('serviceId') serviceId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const service =
      await this.serviceDomainFacade.findOneByIdOrFail(
        serviceId,
      )

    const items =
      await this.appointmentDomainFacade.findManyByService(
        service,
        queryOptions,
      )

    return items
  }

  @Post('/service/:serviceId/appointments')
  async createByServiceId(
    @Param('serviceId') serviceId: string,
    @Body() body: AppointmentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, serviceId }

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
