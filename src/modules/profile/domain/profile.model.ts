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

import { ClientUser } from '../../../modules/clientUser/domain'

@Entity()
export class Profile {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

details?: string

@Column({})

userId: string

@ManyToOne(
  () => ClientUser,
  parent => parent.profilesAsUser,
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
