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

import { Business } from '../../../modules/business/domain'

@Entity()
export class Favorite {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

userId: string

@ManyToOne(
  () => ClientUser,
  parent => parent.favoritesAsUser,
  )
  @JoinColumn({ name: 'userId' })

user?: ClientUser

@Column({})

businessId: string

@ManyToOne(
  () => Business,
  parent => parent.favorites,
  )
  @JoinColumn({ name: 'businessId' })

business?: Business

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
