import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ClientUserCreateDto {

@IsString()

@IsNotEmpty()
  email: string

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  pictureUrl?: string

@IsString()

@IsNotEmpty()
  status: string

@IsString()

@IsOptional()
  password?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

}

export class ClientUserUpdateDto {

@IsString()

@IsOptional()
  email?: string

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  pictureUrl?: string

@IsString()

@IsOptional()
  status?: string

@IsString()

@IsOptional()
  password?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

}
