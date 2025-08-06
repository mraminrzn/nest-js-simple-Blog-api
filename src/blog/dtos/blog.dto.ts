import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class blogDto {
  @ApiProperty({ example: 'the newst ai' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'descriptioin' })
  @IsString()
  content: string;

  @ApiProperty({ example: '87799788789' })
  @IsString()
  category: string;
}
