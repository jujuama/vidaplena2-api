import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { BusinessUserDomainModule } from './businessUser/domain'

import { ClientUserDomainModule } from './clientUser/domain'

import { ProfileDomainModule } from './profile/domain'

import { BusinessDomainModule } from './business/domain'

import { ServiceDomainModule } from './service/domain'

import { AppointmentDomainModule } from './appointment/domain'

import { BookingDomainModule } from './booking/domain'

import { FavoriteDomainModule } from './favorite/domain'

import { BusinessUserRoleDomainModule } from './businessUserRole/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

BusinessUserDomainModule,

ClientUserDomainModule,

ProfileDomainModule,

BusinessDomainModule,

ServiceDomainModule,

AppointmentDomainModule,

BookingDomainModule,

FavoriteDomainModule,

BusinessUserRoleDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
