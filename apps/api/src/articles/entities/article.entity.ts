import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

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
}
