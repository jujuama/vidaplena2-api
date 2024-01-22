import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { FavoriteDomainModule } from '../domain'
import { FavoriteController } from './favorite.controller'

import { ClientUserDomainModule } from '../../../modules/clientUser/domain'

import { FavoriteByClientUserController } from './favoriteByClientUser.controller'

import { BusinessDomainModule } from '../../../modules/business/domain'

import { FavoriteByBusinessController } from './favoriteByBusiness.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    FavoriteDomainModule,

ClientUserDomainModule,

BusinessDomainModule,

],
  controllers: [
    FavoriteController,
    
    FavoriteByClientUserController,
    
    FavoriteByBusinessController,
    
  ],
  providers: [],
})
export class FavoriteApplicationModule {}
