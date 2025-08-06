import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class blogCategoryDto {
  @ApiProperty({ example: 'Tech' })
  @IsString()
  title: string;
}
