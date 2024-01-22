import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { ProfileDomainModule } from '../domain'
import { ProfileController } from './profile.controller'

import { ClientUserDomainModule } from '../../../modules/clientUser/domain'

import { ProfileByClientUserController } from './profileByClientUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProfileDomainModule,

ClientUserDomainModule,

],
  controllers: [
    ProfileController,
    
    ProfileByClientUserController,
    
  ],
  providers: [],
})
export class ProfileApplicationModule {}
