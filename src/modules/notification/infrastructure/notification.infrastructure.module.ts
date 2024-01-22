import { Module } from '@nestjs/common'
import { SocketModule } from 'libraries/socket'
import { AuthorizationDomainModule } from 'modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationBusinessUserSubscriber } from './subscribers/notification.businessUser.subscriber'

import { NotificationClientUserSubscriber } from './subscribers/notification.clientUser.subscriber'

import { NotificationProfileSubscriber } from './subscribers/notification.profile.subscriber'

import { NotificationBusinessSubscriber } from './subscribers/notification.business.subscriber'

import { NotificationServiceSubscriber } from './subscribers/notification.service.subscriber'

import { NotificationAppointmentSubscriber } from './subscribers/notification.appointment.subscriber'

import { NotificationBookingSubscriber } from './subscribers/notification.booking.subscriber'

import { NotificationFavoriteSubscriber } from './subscribers/notification.favorite.subscriber'

import { NotificationBusinessUserRoleSubscriber } from './subscribers/notification.businessUserRole.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationBusinessUserSubscriber,

NotificationClientUserSubscriber,

NotificationProfileSubscriber,

NotificationBusinessSubscriber,

NotificationServiceSubscriber,

NotificationAppointmentSubscriber,

NotificationBookingSubscriber,

NotificationFavoriteSubscriber,

NotificationBusinessUserRoleSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
