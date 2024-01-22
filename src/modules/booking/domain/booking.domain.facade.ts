import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Booking } from './booking.model'

import { Appointment } from '../../appointment/domain'

import { ClientUser } from '../../clientUser/domain'

@Injectable()
export class BookingDomainFacade {
  constructor(
    @InjectRepository(Booking)
    private repository: Repository<Booking>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Booking>,
  ): Promise<Booking> {
    return this.repository.save(values)
  }

  async update(
    item: Booking,
    values: Partial<Booking>,
  ): Promise<Booking> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Booking): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Booking> = {},
  ): Promise<Booking[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Booking> = {},
  ): Promise<Booking> {
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

async findManyByAppointment(
    appointment: Appointment,
    queryOptions: RequestHelper.QueryOptions<Booking> = {},
  ): Promise<Booking[]> {
    if (!appointment) {
      this.databaseHelper.invalidQueryWhere('appointment')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        appointmentId: appointment.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

async findManyByUser(
    user: ClientUser,
    queryOptions: RequestHelper.QueryOptions<Booking> = {},
  ): Promise<Booking[]> {
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
