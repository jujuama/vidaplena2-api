import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { BusinessUser } from './businessUser.model'

@Injectable()
export class BusinessUserDomainFacade {
  constructor(
    @InjectRepository(BusinessUser)
    private repository: Repository<BusinessUser>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<BusinessUser>,
  ): Promise<BusinessUser> {
    return this.repository.save(values)
  }

  async update(
    item: BusinessUser,
    values: Partial<BusinessUser>,
  ): Promise<BusinessUser> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: BusinessUser): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<BusinessUser> = {},
  ): Promise<BusinessUser[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<BusinessUser> = {},
  ): Promise<BusinessUser> {
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

}
