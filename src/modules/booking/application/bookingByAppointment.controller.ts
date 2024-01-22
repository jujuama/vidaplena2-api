import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { BookingDomainFacade } from 'modules/booking/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { BookingApplicationEvent } from './booking.application.event'
import { BookingCreateDto } from './booking.dto'

import { AppointmentDomainFacade } from '../../appointment/domain'

@Controller('/v1/appointments')
export class BookingByAppointmentController {
  constructor(
    
    private appointmentDomainFacade: AppointmentDomainFacade,
    
    private bookingDomainFacade: BookingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/appointment/:appointmentId/bookings')
  async findManyAppointmentId(
    @Param('appointmentId') appointmentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const appointment =
      await this.appointmentDomainFacade.findOneByIdOrFail(
        appointmentId,
      )

    const items =
      await this.bookingDomainFacade.findManyByAppointment(
        appointment,
        queryOptions,
      )

    return items
  }

  @Post('/appointment/:appointmentId/bookings')
  async createByAppointmentId(
    @Param('appointmentId') appointmentId: string,
    @Body() body: BookingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, appointmentId }

    const item = await this.bookingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BookingApplicationEvent.BookingCreated.Payload>(
      BookingApplicationEvent
        .BookingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
