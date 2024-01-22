import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AppointmentCreateDto {

@IsString()

@IsOptional()
  time?: string

@IsString()

@IsOptional()
  date?: string

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
  businessId?: string

@IsString()

@IsOptional()
  serviceId?: string

}

export class AppointmentUpdateDto {

@IsString()

@IsOptional()
  time?: string

@IsString()

@IsOptional()
  date?: string

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
  businessId?: string

@IsString()

@IsOptional()
  serviceId?: string

}
