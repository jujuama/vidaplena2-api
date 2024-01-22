import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ClientUserDomainFacade } from './clientUser.domain.facade'
import { ClientUser } from './clientUser.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientUser]),
    DatabaseHelperModule,
  ],
  providers: [
    ClientUserDomainFacade,
    ClientUserDomainFacade,
  ],
  exports: [ClientUserDomainFacade],
})
export class ClientUserDomainModule {}
