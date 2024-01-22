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

import { Appointment } from '../../../modules/appointment/domain'

import { ClientUser } from '../../../modules/clientUser/domain'

@Entity()
export class Booking {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

status?: string

@Column({})

appointmentId: string

@ManyToOne(
  () => Appointment,
  parent => parent.bookings,
  )
  @JoinColumn({ name: 'appointmentId' })

appointment?: Appointment

@Column({})

userId: string

@ManyToOne(
  () => ClientUser,
  parent => parent.bookingsAsUser,
  )
  @JoinColumn({ name: 'userId' })

user?: ClientUser

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
