import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ClientUser } from './clientUser.model'

@Injectable()
export class ClientUserDomainFacade {
  constructor(
    @InjectRepository(ClientUser)
    private repository: Repository<ClientUser>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<ClientUser>,
  ): Promise<ClientUser> {
    return this.repository.save(values)
  }

  async update(
    item: ClientUser,
    values: Partial<ClientUser>,
  ): Promise<ClientUser> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ClientUser): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ClientUser> = {},
  ): Promise<ClientUser[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ClientUser> = {},
  ): Promise<ClientUser> {
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
