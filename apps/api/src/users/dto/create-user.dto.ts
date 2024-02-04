import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(25)
  @ApiProperty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  @MinLength(2)
  @ApiProperty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  // @MinLength(10)
  // @MaxLength(10)
  @ApiProperty()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  role: string;

  @IsString()
  // @MinLength(8)
  // @MinLength(8)
  @ApiProperty()
  avatarPath: string;
}
