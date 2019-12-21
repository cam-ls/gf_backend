import { Repository, EntityRepository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
    
    async signUp(authCredentials: AuthCredentialsDto): Promise<void> {
        const {nome_usu, senha, email} = authCredentials;

       /*  const exists = this.findOne({ nome_usu });

        if (exists) {
            throw new ConflictException(`Nome de usuario "${nome_usu}" já existe`);
        } */

        //const salt = await bcrypt.genSalt();

        const usuario = new Usuario();
        usuario.nome_usu = nome_usu;
        //usuario.senha = await this.hashSenha(senha, salt);
        usuario.senha = senha;
        usuario.email = email;

        try {
            await usuario.save();
        }
        catch(error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException(`Nome de usuário "${nome_usu}" já existe`);
            }
            else {
                throw new InternalServerErrorException();
            }
            console.log(error.code);
        }
    }

    async validarSenha(authCredentials: AuthCredentialsDto): Promise<string> {
        const {nome_usu, senha} = authCredentials;
        const user = await this.findOne({ nome_usu });
        if (user && user.senha === senha) {
            return user.nome_usu;
        }
        else {
            return null;
        }
    }

    async getUsuario(filtro: UsuarioDto): Promise<Usuario[]> {
        const { id, nome_usu, email } = filtro;
        const query = this.createQueryBuilder('Usuario');

        if (id) {
            query.andWhere('(Usuario.id = :id)', { id });
        }
        
        if (nome_usu) {
            query.andWhere('(Usuario.nome_usu = :nome_usu)', { nome_usu });
        }

        if (email) {
            query.andWhere('(Usuario.email LIKE :email)', {email: `%${email}%`});
        }
        query.orderBy('Usuario.nome_usu', 'DESC');

        const usuarios = await query.getMany();
        return usuarios;
    }
}