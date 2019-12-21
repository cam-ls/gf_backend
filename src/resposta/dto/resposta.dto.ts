import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class RespostaDto {
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsNumber()
    id_usu: number;

    @IsNotEmpty()
    @IsNumber()
    id_com: number;
}