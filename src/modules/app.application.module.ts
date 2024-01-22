import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { BusinessUserApplicationModule } from './businessUser/application'

import { ClientUserApplicationModule } from './clientUser/application'

import { ProfileApplicationModule } from './profile/application'

import { BusinessApplicationModule } from './business/application'

import { ServiceApplicationModule } from './service/application'

import { AppointmentApplicationModule } from './appointment/application'

import { BookingApplicationModule } from './booking/application'

import { FavoriteApplicationModule } from './favorite/application'

import { BusinessUserRoleApplicationModule } from './businessUserRole/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,

BusinessUserApplicationModule,

ClientUserApplicationModule,

ProfileApplicationModule,

BusinessApplicationModule,

ServiceApplicationModule,

AppointmentApplicationModule,

BookingApplicationModule,

FavoriteApplicationModule,

BusinessUserRoleApplicationModule,

],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
