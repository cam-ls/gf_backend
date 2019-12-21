import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class IngredienteDto {
    @IsNotEmpty()
    @IsString()
    nome_ing: string;   
}