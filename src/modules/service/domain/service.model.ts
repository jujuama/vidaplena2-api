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

import { Appointment } from '../../../modules/appointment/domain'

@Entity()
export class Service {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

name?: string

@Column({"nullable":true})

description?: string

@Column({})

businessId: string

@ManyToOne(
  () => Business,
  parent => parent.services,
  )
  @JoinColumn({ name: 'businessId' })

business?: Business

@OneToMany(
  () => Appointment,
  child => child.service,
  )

appointments?: Appointment[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
