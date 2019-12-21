"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const common_1 = require("@nestjs/common");
let UsuarioRepository = class UsuarioRepository extends typeorm_1.Repository {
    async signUp(authCredentials) {
        const { nome_usu, senha, email } = authCredentials;
        const usuario = new usuario_entity_1.Usuario();
        usuario.nome_usu = nome_usu;
        usuario.senha = senha;
        usuario.email = email;
        try {
            await usuario.save();
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException(`Nome de usuário "${nome_usu}" já existe`);
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
            console.log(error.code);
        }
    }
    async validarSenha(authCredentials) {
        const { nome_usu, senha } = authCredentials;
        const user = await this.findOne({ nome_usu });
        if (user && user.senha === senha) {
            return user.nome_usu;
        }
        else {
            return null;
        }
    }
    async getUsuario(filtro) {
        const { id, nome_usu, email } = filtro;
        const query = this.createQueryBuilder('Usuario');
        if (id) {
            query.andWhere('(Usuario.id = :id)', { id });
        }
        if (nome_usu) {
            query.andWhere('(Usuario.nome_usu = :nome_usu)', { nome_usu });
        }
        if (email) {
            query.andWhere('(Usuario.email LIKE :email)', { email: `%${email}%` });
        }
        query.orderBy('Usuario.nome_usu', 'DESC');
        const usuarios = await query.getMany();
        return usuarios;
    }
};
UsuarioRepository = __decorate([
    typeorm_1.EntityRepository(usuario_entity_1.Usuario)
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map