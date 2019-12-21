"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const resposta_entity_1 = require("./resposta.entity");
let RespostaRepository = class RespostaRepository extends typeorm_1.Repository {
    async getResposta(filtro) {
        const { id_com, id_usu, search } = filtro;
        const query = this.createQueryBuilder('Resposta');
        if (id_com) {
            query.andWhere('(Resposta.id_com = :id_com)', { id_com });
        }
        if (id_usu) {
            query.andWhere('(Resposta.id_rec = :id_rec)', { id_usu });
        }
        if (search) {
            query.andWhere('(Resposta.descricao LIKE :search)', { search: `%${search}%` });
        }
        query.orderBy('Resposta.data', 'DESC');
        const respostas = await query.getMany();
        return respostas;
    }
    async criarResposta(respostaDto) {
        const resposta = new resposta_entity_1.Resposta();
        const { id_com, id_usu, descricao } = respostaDto;
        resposta.id_com = id_com;
        resposta.id_usu = id_usu;
        resposta.descricao = descricao;
        resposta.data = new Date();
        await resposta.save();
        return resposta;
    }
};
RespostaRepository = __decorate([
    typeorm_1.EntityRepository(resposta_entity_1.Resposta)
], RespostaRepository);
exports.RespostaRepository = RespostaRepository;
//# sourceMappingURL=resposta.repository.js.map