import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsuarioDto } from './dto/usuario.dto';
export declare class UsuarioRepository extends Repository<Usuario> {
    signUp(authCredentials: AuthCredentialsDto): Promise<void>;
    validarSenha(authCredentials: AuthCredentialsDto): Promise<string>;
    getUsuario(filtro: UsuarioDto): Promise<Usuario[]>;
}
