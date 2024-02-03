import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GalleryController],
  providers: [GalleryService],
  imports: [PrismaModule],
})
export class GalleryModule {}
