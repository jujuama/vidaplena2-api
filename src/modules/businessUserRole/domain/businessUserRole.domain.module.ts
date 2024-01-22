import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BusinessUserRoleDomainFacade } from './businessUserRole.domain.facade'
import { BusinessUserRole } from './businessUserRole.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessUserRole]),
    DatabaseHelperModule,
  ],
  providers: [
    BusinessUserRoleDomainFacade,
    BusinessUserRoleDomainFacade,
  ],
  exports: [BusinessUserRoleDomainFacade],
})
export class BusinessUserRoleDomainModule {}
