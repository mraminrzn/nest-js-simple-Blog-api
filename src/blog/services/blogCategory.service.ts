import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Schema } from '@nestjs/mongoose';
import { BlogCategory } from '../schemas/BlogCategory';
import { Model } from 'mongoose';
import { blogDto } from '../dtos/blogCategort.dto';

@Injectable()
export class BlogCategoryService {
    constructor(@InjectModel(BlogCategory.name) private readonly blogCategoryModel: Model<BlogCategory>) {}
    findAll() {
        return this.blogCategoryModel.find().exec();
    }

    async findUnique(id: string) {
        if (id.length !== 24) throw new NotFoundException(`Category with ID ${id} not found`);
        
        const category = await this.blogCategoryModel.findById(id).exec();
        
        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }
        return category;
    }

    async create(data: blogDto) {
        const newCategory = await this.blogCategoryModel.create(data);
        return newCategory;
    }

    async delete(id: string) {
                if (id.length !== 24) throw new NotFoundException(`Category with ID ${id} not found`);

        const category = await this.blogCategoryModel.findByIdAndDelete(id).exec();
        
        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }
        return category;
    }

    changeData(data: blogDto, id: string) {
        return this.blogCategoryModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
}
