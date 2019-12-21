"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const comentario_entity_1 = require("./comentario.entity");
let ComentarioRepository = class ComentarioRepository extends typeorm_1.Repository {
    async getComentario(filtro) {
        const { id_rec, id_usu, search } = filtro;
        const query = this.createQueryBuilder('Comentario');
        if (id_usu) {
            query.andWhere('(Comentario.id_usu = :id_usu)', { id_usu });
        }
        if (id_rec) {
            query.andWhere('(Comentario.id_rec = :id_rec)', { id_rec });
        }
        if (search) {
            query.andWhere('(Comentario.descricao LIKE :search)', { search: `%${search}%` });
        }
        query.orderBy('Comentario.data', 'DESC');
        const comentarios = await query.getMany();
        return comentarios;
    }
    async criarComentario(comentarioDto) {
        const comentario = new comentario_entity_1.Comentario();
        const { id_rec, id_usu, descricao } = comentarioDto;
        comentario.id_rec = id_rec;
        comentario.id_usu = id_usu;
        comentario.descricao = descricao;
        comentario.data = new Date();
        await comentario.save();
        return comentario;
    }
};
ComentarioRepository = __decorate([
    typeorm_1.EntityRepository(comentario_entity_1.Comentario)
], ComentarioRepository);
exports.ComentarioRepository = ComentarioRepository;
//# sourceMappingURL=comentario.repository.js.map