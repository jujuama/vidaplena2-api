import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { ClientUserDomainModule } from '../domain'
import { ClientUserController } from './clientUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ClientUserDomainModule,
    
  ],
  controllers: [
    ClientUserController,
    
  ],
  providers: [],
})
export class ClientUserApplicationModule {}
