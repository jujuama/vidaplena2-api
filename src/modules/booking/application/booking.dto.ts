import {
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class BookingCreateDto {

@IsString()

@IsOptional()
  status?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  appointmentId?: string

@IsString()

@IsNotEmpty()
  userId?: string

}

export class BookingUpdateDto {

@IsString()

@IsOptional()
  status?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  appointmentId?: string

@IsString()

@IsOptional()
  userId?: string

}
