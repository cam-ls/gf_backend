import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload-interface';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UsuarioRepository) 
    private usuarioRepository: UsuarioRepository,
    private jwtService: JwtService,
    ) {}

    async signUp(authCredentials: AuthCredentialsDto) {
        return this.usuarioRepository.signUp(authCredentials);
    }

    async signIn(authCredentials: AuthCredentialsDto): Promise<{token: string}> {
        const nome_usu = await this.usuarioRepository.validarSenha(authCredentials);
        if (!nome_usu) {
            throw new UnauthorizedException('Credenciais invalidas');
        }
        const payload: JwtPayload = { nome_usu };
        const token = await this.jwtService.sign(payload);
        return { token };
    }

    async getUsuario(filtro: UsuarioDto): Promise<Usuario[]> {
        return this.usuarioRepository.getUsuario(filtro);
    }
}
