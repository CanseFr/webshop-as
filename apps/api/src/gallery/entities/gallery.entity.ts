import { Gallery } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class GalleryEntity implements Gallery {
  @ApiProperty()
  id: number;

  @ApiProperty()
  thumbnail_path: string;

  @ApiProperty()
  gal_1_path: string;

  @ApiProperty()
  gal_2_path: string;

  @ApiProperty()
  gal_3_path: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
