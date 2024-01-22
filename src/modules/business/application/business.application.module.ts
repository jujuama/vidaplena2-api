import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { BusinessDomainModule } from '../domain'
import { BusinessController } from './business.controller'

import { BusinessUserDomainModule } from '../../../modules/businessUser/domain'

import { BusinessByBusinessUserController } from './businessByBusinessUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BusinessDomainModule,

BusinessUserDomainModule,

],
  controllers: [
    BusinessController,
    
    BusinessByBusinessUserController,
    
  ],
  providers: [],
})
export class BusinessApplicationModule {}
