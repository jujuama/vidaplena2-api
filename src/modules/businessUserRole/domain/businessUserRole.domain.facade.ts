import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { BusinessUserRole } from './businessUserRole.model'

import { Business } from '../../business/domain'

import { BusinessUser } from '../../businessUser/domain'

@Injectable()
export class BusinessUserRoleDomainFacade {
  constructor(
    @InjectRepository(BusinessUserRole)
    private repository: Repository<BusinessUserRole>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    return this.repository.save(values)
  }

  async update(
    item: BusinessUserRole,
    values: Partial<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: BusinessUserRole): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<BusinessUserRole> = {},
  ): Promise<BusinessUserRole[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<BusinessUserRole> = {},
  ): Promise<BusinessUserRole> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByBusiness(
    business: Business,
    queryOptions: RequestHelper.QueryOptions<BusinessUserRole> = {},
  ): Promise<BusinessUserRole[]> {
    if (!business) {
      this.databaseHelper.invalidQueryWhere('business')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        businessId: business.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

async findManyByUser(
    user: BusinessUser,
    queryOptions: RequestHelper.QueryOptions<BusinessUserRole> = {},
  ): Promise<BusinessUserRole[]> {
    if (!user) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: user.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
