import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { BookingDomainModule } from '../domain'
import { BookingController } from './booking.controller'

import { AppointmentDomainModule } from '../../../modules/appointment/domain'

import { BookingByAppointmentController } from './bookingByAppointment.controller'

import { ClientUserDomainModule } from '../../../modules/clientUser/domain'

import { BookingByClientUserController } from './bookingByClientUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BookingDomainModule,

AppointmentDomainModule,

ClientUserDomainModule,

],
  controllers: [
    BookingController,
    
    BookingByAppointmentController,
    
    BookingByClientUserController,
    
  ],
  providers: [],
})
export class BookingApplicationModule {}
