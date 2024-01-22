import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class FavoriteCreateDto {

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

@IsString()

@IsOptional()
  businessId?: string

}

export class FavoriteUpdateDto {

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

@IsString()

@IsOptional()
  businessId?: string

}
