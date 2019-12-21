import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './dto/usuario.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentials: AuthCredentialsDto): Promise<void>;
    signIn(authCredentials: AuthCredentialsDto): Promise<{
        token: string;
    }>;
    test(user: Usuario): void;
    getUsuario(filtro: UsuarioDto): Promise<Usuario[]>;
}
