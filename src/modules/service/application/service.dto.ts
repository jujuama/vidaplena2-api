import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ServiceCreateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  description?: string

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

}

export class ServiceUpdateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  description?: string

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

}
