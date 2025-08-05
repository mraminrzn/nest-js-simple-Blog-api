import { Prop } from "@nestjs/mongoose";
import { Document  } from "mongoose";

export class BlogSchema extends Document{
    @Prop()
    title: string;

    @Prop()
    content: string

    @Category()
}