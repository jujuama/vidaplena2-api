import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BusinessUserRoleCreateDto {

@IsString()

@IsOptional()
  role?: string

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
  userId?: string

}

export class BusinessUserRoleUpdateDto {

@IsString()

@IsOptional()
  role?: string

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
  userId?: string

}
