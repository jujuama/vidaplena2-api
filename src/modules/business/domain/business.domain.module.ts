import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BusinessDomainFacade } from './business.domain.facade'
import { Business } from './business.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Business]),
    DatabaseHelperModule,
  ],
  providers: [
    BusinessDomainFacade,
    BusinessDomainFacade,
  ],
  exports: [BusinessDomainFacade],
})
export class BusinessDomainModule {}
