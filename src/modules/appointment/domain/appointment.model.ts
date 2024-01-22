import { ColumnNumeric } from 'core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Business } from '../../../modules/business/domain'

import { Service } from '../../../modules/service/domain'

import { Booking } from '../../../modules/booking/domain'

@Entity()
export class Appointment {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

time?: string

@Column({"nullable":true})

date?: string

@Column({})

businessId: string

@ManyToOne(
  () => Business,
  parent => parent.appointments,
  )
  @JoinColumn({ name: 'businessId' })

business?: Business

@Column({})

serviceId: string

@ManyToOne(
  () => Service,
  parent => parent.appointments,
  )
  @JoinColumn({ name: 'serviceId' })

service?: Service

@OneToMany(
  () => Booking,
  child => child.appointment,
  )

bookings?: Booking[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
