import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ReceitaDto {
    @IsNotEmpty()
    @IsString()
    nome_rec: string;

    @IsNotEmpty()
    @IsString()
    preparo: string;

    @IsNotEmpty()
    //@IsNumber()
    id_usu: number;

    nome_usu: string;
}