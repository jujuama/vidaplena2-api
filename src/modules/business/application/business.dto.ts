import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BusinessCreateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  city?: string

@IsString()

@IsOptional()
  type?: string

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
  ownerId?: string

}

export class BusinessUpdateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  city?: string

@IsString()

@IsOptional()
  type?: string

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
  ownerId?: string

}
