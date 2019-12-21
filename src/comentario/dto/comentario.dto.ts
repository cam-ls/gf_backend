import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ComentarioDto {
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsNumber()
    id_usu: number;

    @IsNotEmpty()
    @IsNumber()
    id_rec: number;
}