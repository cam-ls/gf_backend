import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class AuthCredentialsDto {
    
    @IsNotEmpty()
    @IsString()
    //@MinLength(4)
    //@MaxLength(20)
    nome_usu: string;

    @IsNotEmpty()
    @IsString()
    //@MinLength(4)
    //@MaxLength(20)
    senha: string;

    //@IsString()
    //@IsNotEmpty()
    email: string;
}