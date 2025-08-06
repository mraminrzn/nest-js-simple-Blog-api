import { Body, Get, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { FindQuery, SortOrder } from '../dtos/queryBlogSearch.dto';
import { InjectModel } from '@nestjs/mongoose';
import { handelQuerySort } from '../util/handelSortQuery';
import { Model } from 'mongoose';
import { Blog } from '../schemas/blog.schema';
import { blogDto } from '../dtos/blog.dto';
import { BlogCategory } from '../schemas/BlogCategory';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
    @InjectModel(BlogCategory.name)
    private readonly blogCategoryModel: Model<BlogCategory>,
  ) {}

  async getAll(@Query() query: FindQuery) {
    const { title = '', page = 1, limit = 5, sortBy = SortOrder.Title } = query;

    const body = {};
    if (title) {
      body['title'] = { $regex: title, $options: 'i' };
    }

    const sort = handelQuerySort(sortBy);

    const [data, total] = await Promise.all([
      this.blogModel
        .find(body)
        .skip((page - 1) * limit)
        .limit(limit)
        .populate('category')
        .sort(sort)
        .select({ __v: 0 })
        .exec(),

      this.blogModel.countDocuments(body),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getOne(id: string) {
    if (id.length != 24)
      throw new NotFoundException(`the ${id} blog not found`);
    const foundedData = this.blogModel.findById(id);
    if (!foundedData) throw new NotFoundException(`the ${id} blog not found`);
    return foundedData;
  }

  async create(body: blogDto) {
    const { category } = body;
    if (category.length !== 24)
      throw new NotFoundException(`the category ${category} not Found`);
    const foundedCatefory = await this.blogCategoryModel.findById(category);
    if (!foundedCatefory)
      throw new NotFoundException(`the category ${category} not Found`);
    const newData = await this.blogModel.create(body);
    return newData;
  }

  async delete(id: string) {
    if (id.length != 24)
      throw new NotFoundException(`the ${id} blog not found`);
    const foundedData = this.blogModel.findByIdAndDelete(id);
    if (!foundedData) throw new NotFoundException(`the ${id} blog not found`);
    return foundedData;
  }

  async update(id: string, body: blogDto) {
    console.log(id);

    if (id.length !== 24)
      throw new NotFoundException(`the ${id} blog not found`);
    const foundedData = this.blogModel.findById(id);
    if (!foundedData) throw new NotFoundException(`the ${id} blog not found`);
    const updatedData = await this.blogModel.findByIdAndUpdate(id, body);
    return updatedData;
  }
}
