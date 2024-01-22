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

import { Notification } from '../../../modules/notification/domain'

import { Profile } from '../../../modules/profile/domain'

import { Booking } from '../../../modules/booking/domain'

import { Favorite } from '../../../modules/favorite/domain'

@Entity()
export class ClientUser {

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
  () => Notification,
  child => child.user,
  )

notificationsAsUser?: Notification[]

@OneToMany(
  () => Profile,
  child => child.user,
  )

profilesAsUser?: Profile[]

@OneToMany(
  () => Booking,
  child => child.user,
  )

bookingsAsUser?: Booking[]

@OneToMany(
  () => Favorite,
  child => child.user,
  )

favoritesAsUser?: Favorite[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
