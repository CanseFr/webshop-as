import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { GalleryEntity } from '../../gallery/entities/gallery.entity';

export class ArticleEntity implements Article {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  galleryId: number | null;

  @ApiProperty({ required: false, type: GalleryEntity })
  gallery: GalleryEntity;
}
