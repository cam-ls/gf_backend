"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const avaliacao_entity_1 = require("./avaliacao.entity");
let AvaliacaoRepository = class AvaliacaoRepository extends typeorm_1.Repository {
    async getAvaliacao(filtro) {
        const { id_rec, id_usu, nota } = filtro;
        const query = this.createQueryBuilder('Avaliacao');
        if (id_rec) {
            query.andWhere('(Avaliacao.id_rec = :id_rec)', { id_rec });
        }
        if (id_usu) {
            query.andWhere('(Avaliacao.id_usu = :id_usu)', { id_usu });
        }
        if (nota) {
            query.andWhere('(Avaliacao.nota LIKE :nota)', { nota: `%${nota}%` });
        }
        query.orderBy('Avaliacao.data', 'DESC');
        const avaliacoes = await query.getMany();
        return avaliacoes;
    }
    async criarAvaliacao(avaliacaoDto) {
        const avaliacao = new avaliacao_entity_1.Avaliacao();
        const { id_rec, id_usu, nota } = avaliacaoDto;
        avaliacao.id_rec = id_rec;
        avaliacao.id_usu = id_usu;
        avaliacao.nota = nota;
        avaliacao.data = new Date();
        await avaliacao.save();
        return avaliacao;
    }
};
AvaliacaoRepository = __decorate([
    typeorm_1.EntityRepository(avaliacao_entity_1.Avaliacao)
], AvaliacaoRepository);
exports.AvaliacaoRepository = AvaliacaoRepository;
//# sourceMappingURL=avaliacao.repository.js.map