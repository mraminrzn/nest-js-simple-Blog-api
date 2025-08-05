import { Module } from '@nestjs/common';
import { BlogController } from './controllers/blog.controller';
import { BlogService } from './services/blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './schemas/blog.schema';
import { BlogCategory, BlogCategorySchema } from './schemas/BlogCategory';
import { BlogCategoryController } from './controllers/blogCategory.controller';
import { BlogCategoryService } from './services/blogCategory.service';

@Module({
  controllers: [BlogController, BlogCategoryController],
  providers: [BlogService, BlogCategoryService],
  imports: [
    MongooseModule.forFeature([
      { name: Blog.name, schema: BlogSchema },
      { name: BlogCategory.name, schema: BlogCategorySchema },
    ]),
  ],
})
export class BlogModule {}
