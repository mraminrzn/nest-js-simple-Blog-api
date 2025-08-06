import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogService } from '../services/blog.service';
import { FindQuery } from '../dtos/queryBlogSearch.dto';
import { blogDto } from '../dtos/blog.dto';

@Controller('blog')
@ApiTags('Blog')
export class BlogController {
  constructor(private readonly appService: BlogService) {}
  @Get()
  findData(@Query() query: FindQuery) {
    return this.appService.getAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.getOne(id);
  }

  @Post()
  createUser(@Body() body: blogDto) {
    return this.appService.create(body);
  }

  @Put(':id')
  updatedData(@Body() Body: blogDto, @Param('id') id: string) {
    return this.appService.update(id, Body);
  }
  @Delete()
  deleteBlog(@Param('id') id: string) {
    return (this, this.appService.delete(id));
  }
}
