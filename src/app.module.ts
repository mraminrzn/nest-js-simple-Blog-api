import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true, 
    }),MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (config : ConfigService) => ({
        uri: config.get<string>('DATABASE_URL'),
      })
    }), BlogModule],
})
export class AppModule {}
