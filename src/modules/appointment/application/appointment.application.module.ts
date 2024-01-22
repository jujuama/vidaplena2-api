import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { AppointmentDomainModule } from '../domain'
import { AppointmentController } from './appointment.controller'

import { BusinessDomainModule } from '../../../modules/business/domain'

import { AppointmentByBusinessController } from './appointmentByBusiness.controller'

import { ServiceDomainModule } from '../../../modules/service/domain'

import { AppointmentByServiceController } from './appointmentByService.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AppointmentDomainModule,

BusinessDomainModule,

ServiceDomainModule,

],
  controllers: [
    AppointmentController,
    
    AppointmentByBusinessController,
    
    AppointmentByServiceController,
    
  ],
  providers: [],
})
export class AppointmentApplicationModule {}
