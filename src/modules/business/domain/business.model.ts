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

import { BusinessUser } from '../../../modules/businessUser/domain'

import { Service } from '../../../modules/service/domain'

import { Appointment } from '../../../modules/appointment/domain'

import { Favorite } from '../../../modules/favorite/domain'

import { BusinessUserRole } from '../../../modules/businessUserRole/domain'

@Entity()
export class Business {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

name?: string

@Column({"nullable":true})

city?: string

@Column({"nullable":true})

type?: string

@Column({})

ownerId: string

@ManyToOne(
  () => BusinessUser,
  parent => parent.businesssAsOwner,
  )
  @JoinColumn({ name: 'ownerId' })

owner?: BusinessUser

@OneToMany(
  () => Service,
  child => child.business,
  )

services?: Service[]

@OneToMany(
  () => Appointment,
  child => child.business,
  )

appointments?: Appointment[]

@OneToMany(
  () => Favorite,
  child => child.business,
  )

favorites?: Favorite[]

@OneToMany(
  () => BusinessUserRole,
  child => child.business,
  )

businessUserRoles?: BusinessUserRole[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
