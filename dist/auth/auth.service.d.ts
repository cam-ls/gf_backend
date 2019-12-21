import { UsuarioRepository } from './usuario.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './dto/usuario.dto';
export declare class AuthService {
    private usuarioRepository;
    private jwtService;
    constructor(usuarioRepository: UsuarioRepository, jwtService: JwtService);
    signUp(authCredentials: AuthCredentialsDto): Promise<void>;
    signIn(authCredentials: AuthCredentialsDto): Promise<{
        token: string;
    }>;
    getUsuario(filtro: UsuarioDto): Promise<Usuario[]>;
}
