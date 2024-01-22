import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { ServiceDomainModule } from '../domain'
import { ServiceController } from './service.controller'

import { BusinessDomainModule } from '../../../modules/business/domain'

import { ServiceByBusinessController } from './serviceByBusiness.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ServiceDomainModule,

BusinessDomainModule,

],
  controllers: [
    ServiceController,
    
    ServiceByBusinessController,
    
  ],
  providers: [],
})
export class ServiceApplicationModule {}
