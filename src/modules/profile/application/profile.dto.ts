import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ProfileCreateDto {

@IsString()

@IsOptional()
  details?: string

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
  userId?: string

}

export class ProfileUpdateDto {

@IsString()

@IsOptional()
  details?: string

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
  userId?: string

}
