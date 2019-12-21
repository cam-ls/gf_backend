import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../../dist/auth/jwt-payload-iterface';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioRepository } from './usuario.repository';
import { Usuario } from './usuario.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UsuarioRepository)
        private usuarioRepository: UsuarioRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'goodfoods',

        });
    }

    async validate(payload: JwtPayload): Promise<Usuario> {
        const { nome_usu } = payload;
        const user = await this.usuarioRepository.findOne( { nome_usu });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}