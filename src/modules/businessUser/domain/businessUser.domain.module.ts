import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BusinessUserDomainFacade } from './businessUser.domain.facade'
import { BusinessUser } from './businessUser.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessUser]),
    DatabaseHelperModule,
  ],
  providers: [
    BusinessUserDomainFacade,
    BusinessUserDomainFacade,
  ],
  exports: [BusinessUserDomainFacade],
})
export class BusinessUserDomainModule {}
