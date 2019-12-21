import { JwtPayload } from '../../dist/auth/jwt-payload-iterface';
import { UsuarioRepository } from './usuario.repository';
import { Usuario } from './usuario.entity';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(payload: JwtPayload): Promise<Usuario>;
}
export {};
