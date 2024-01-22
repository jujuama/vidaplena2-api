import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Favorite } from './favorite.model'

import { ClientUser } from '../../clientUser/domain'

import { Business } from '../../business/domain'

@Injectable()
export class FavoriteDomainFacade {
  constructor(
    @InjectRepository(Favorite)
    private repository: Repository<Favorite>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Favorite>,
  ): Promise<Favorite> {
    return this.repository.save(values)
  }

  async update(
    item: Favorite,
    values: Partial<Favorite>,
  ): Promise<Favorite> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Favorite): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Favorite> = {},
  ): Promise<Favorite[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Favorite> = {},
  ): Promise<Favorite> {
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

async findManyByUser(
    user: ClientUser,
    queryOptions: RequestHelper.QueryOptions<Favorite> = {},
  ): Promise<Favorite[]> {
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

async findManyByBusiness(
    business: Business,
    queryOptions: RequestHelper.QueryOptions<Favorite> = {},
  ): Promise<Favorite[]> {
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

}
