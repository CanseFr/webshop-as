import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGalleryDto {
  // Apply
  // @MaxLength(11)
  // @MinLength(11)
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  thumbnail_path: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  gal_1_path: string;

  @IsString()
  @ApiProperty()
  gal_2_path: string;

  @IsString()
  @ApiProperty()
  gal_3_path: string;
}
