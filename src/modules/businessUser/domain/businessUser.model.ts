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

import { BusinessUserRole } from '../../../modules/businessUserRole/domain'

@Entity()
export class BusinessUser {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

email: string

@Column({"nullable":true})

name?: string

@Column({"nullable":true})

pictureUrl?: string

@Column({})

status: string

@Column({"nullable":true})

password?: string

@OneToMany(
  () => Business,
  child => child.owner,
  )

businesssAsOwner?: Business[]

@OneToMany(
  () => BusinessUserRole,
  child => child.user,
  )

businessUserRolesAsUser?: BusinessUserRole[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
