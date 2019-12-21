import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AvaliacaoDto {
    @IsNotEmpty()
    id_rec: number;

    @IsNotEmpty()
    id_usu: number;

    @IsNotEmpty()
    nota: number;
}