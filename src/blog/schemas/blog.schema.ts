import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BlogCategory } from './BlogCategory';

export class Blog extends Document {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({
    ref: BlogCategory.name,
    type: Types.ObjectId,
    required: true,
  })
  category: Types.ObjectId;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
