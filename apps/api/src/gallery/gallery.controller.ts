import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GalleryEntity } from './entities/gallery.entity';

@Controller('gallery')
@ApiTags('Gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  @ApiCreatedResponse({ type: GalleryEntity })
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Get()
  @ApiOkResponse({ type: GalleryService, isArray: true })
  findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GalleryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.galleryService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: GalleryEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(id, updateGalleryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: GalleryEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.galleryService.remove(id);
  }
}
