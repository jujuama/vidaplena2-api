import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { BusinessUserDomainModule } from '../domain'
import { BusinessUserController } from './businessUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BusinessUserDomainModule,
    
  ],
  controllers: [
    BusinessUserController,
    
  ],
  providers: [],
})
export class BusinessUserApplicationModule {}
