import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber } from 'class-validator';

export class UsuarioDto {
    
    //@IsNumber()
    //@MinLength(4)
    //@MaxLength(20)
    id: number;

    //@IsString()
    //@MinLength(4)
    //@MaxLength(20)
    nome_usu: string;

    //@IsString()
    //@IsNotEmpty()
    email: string;
}