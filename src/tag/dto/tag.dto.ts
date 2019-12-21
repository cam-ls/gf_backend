import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TagDto {
    @IsNotEmpty()
    @IsString()
    nome_tag: string;   
}