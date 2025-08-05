import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class blogDto {
    @ApiProperty({ example: 'Tech' })
    @IsString()
    title: string;


}
