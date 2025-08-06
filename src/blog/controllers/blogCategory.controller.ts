import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogCategoryService } from '../services/blogCategory.service';
import { blogCategoryDto } from '../dtos/blogCategort.dto';

@Controller('blogCategory')
@ApiTags('blogCategory')
export class BlogCategoryController {
  constructor(private readonly appService: BlogCategoryService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: string) {
    return this.appService.findUnique(id);
  }
  @Post()
  create(@Body() data: blogCategoryDto) {
    return this.appService.create(data);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: blogCategoryDto) {
    return this.appService.changeData(data, id);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
