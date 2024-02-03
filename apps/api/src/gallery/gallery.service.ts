import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  create(createGalleryDto: CreateGalleryDto) {
    return this.prisma.gallery.create({ data: createGalleryDto });
  }

  findAll() {
    return this.prisma.gallery.findMany();
  }

  findOne(id: number) {
    return this.prisma.gallery.findUnique({ where: { id } });
  }

  update(id: number, updateGalleryDto: UpdateGalleryDto) {
    return this.prisma.gallery.update({ where: { id }, data: updateGalleryDto });
  }

  remove(id: number) {
    return this.prisma.gallery.delete({ where: { id } });
  }
}
