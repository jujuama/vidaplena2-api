import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { BusinessUserRoleDomainModule } from '../domain'
import { BusinessUserRoleController } from './businessUserRole.controller'

import { BusinessDomainModule } from '../../../modules/business/domain'

import { BusinessUserRoleByBusinessController } from './businessUserRoleByBusiness.controller'

import { BusinessUserDomainModule } from '../../../modules/businessUser/domain'

import { BusinessUserRoleByBusinessUserController } from './businessUserRoleByBusinessUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BusinessUserRoleDomainModule,

BusinessDomainModule,

BusinessUserDomainModule,

],
  controllers: [
    BusinessUserRoleController,
    
    BusinessUserRoleByBusinessController,
    
    BusinessUserRoleByBusinessUserController,
    
  ],
  providers: [],
})
export class BusinessUserRoleApplicationModule {}
