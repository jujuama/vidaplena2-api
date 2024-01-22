import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Appointment } from './appointment.model'

import { Business } from '../../business/domain'

import { Service } from '../../service/domain'

@Injectable()
export class AppointmentDomainFacade {
  constructor(
    @InjectRepository(Appointment)
    private repository: Repository<Appointment>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Appointment>,
  ): Promise<Appointment> {
    return this.repository.save(values)
  }

  async update(
    item: Appointment,
    values: Partial<Appointment>,
  ): Promise<Appointment> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Appointment): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Appointment> = {},
  ): Promise<Appointment[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Appointment> = {},
  ): Promise<Appointment> {
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
    queryOptions: RequestHelper.QueryOptions<Appointment> = {},
  ): Promise<Appointment[]> {
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

async findManyByService(
    service: Service,
    queryOptions: RequestHelper.QueryOptions<Appointment> = {},
  ): Promise<Appointment[]> {
    if (!service) {
      this.databaseHelper.invalidQueryWhere('service')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        serviceId: service.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
