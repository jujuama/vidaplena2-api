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

import { BusinessUser } from '../../../modules/businessUser/domain'

@Entity()
export class BusinessUserRole {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

role?: string

@Column({})

businessId: string

@ManyToOne(
  () => Business,
  parent => parent.businessUserRoles,
  )
  @JoinColumn({ name: 'businessId' })

business?: Business

@Column({})

userId: string

@ManyToOne(
  () => BusinessUser,
  parent => parent.businessUserRolesAsUser,
  )
  @JoinColumn({ name: 'userId' })

user?: BusinessUser

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
