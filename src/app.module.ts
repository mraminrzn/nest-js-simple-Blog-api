import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog/blog.controller';
import { BlogModule } from './blog/blog.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/api-blog_app'), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
