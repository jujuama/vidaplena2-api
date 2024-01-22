import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Business } from './business.model'

import { BusinessUser } from '../../businessUser/domain'

@Injectable()
export class BusinessDomainFacade {
  constructor(
    @InjectRepository(Business)
    private repository: Repository<Business>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Business>,
  ): Promise<Business> {
    return this.repository.save(values)
  }

  async update(
    item: Business,
    values: Partial<Business>,
  ): Promise<Business> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Business): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Business> = {},
  ): Promise<Business[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Business> = {},
  ): Promise<Business> {
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

async findManyByOwner(
    owner: BusinessUser,
    queryOptions: RequestHelper.QueryOptions<Business> = {},
  ): Promise<Business[]> {
    if (!owner) {
      this.databaseHelper.invalidQueryWhere('owner')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        ownerId: owner.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
