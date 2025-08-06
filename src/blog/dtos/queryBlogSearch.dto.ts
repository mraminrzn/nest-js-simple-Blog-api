import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export enum SortOrder {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
}

export class FindQuery {
  @ApiPropertyOptional({
    description: 'Title to search for',
    example: 'My Blog Title',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Limit number of results', example: 10 })
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({
    description: 'Page number for pagination',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({
    description: 'Sort order of results',
    enum: SortOrder,
    example: SortOrder.CreatedAt,
  })
  @IsOptional()
  @IsEnum(SortOrder)
  sortBy?: SortOrder;
}
