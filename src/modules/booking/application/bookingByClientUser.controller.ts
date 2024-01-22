import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { BookingDomainFacade } from 'modules/booking/domain'
import { BookingApplicationEvent } from './booking.application.event'
import { BookingCreateDto } from './booking.dto'

import { ClientUserDomainFacade } from '../../clientUser/domain'

@Controller('/v1/clientUsers')
export class BookingByClientUserController {
  constructor(
    
    private clientUserDomainFacade: ClientUserDomainFacade,
    
    private bookingDomainFacade: BookingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/bookings')
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
      await this.bookingDomainFacade.findManyByUser(
        clientUser,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/bookings')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: BookingCreateDto,
    @Req() request: Request,
  ) {
    // Ensure that userId is not null
    if (!userId) {
      throw new Error("UserId is required");
    }
    
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId: userId };

    //const valuesUpdated = { ...body, userId }

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
