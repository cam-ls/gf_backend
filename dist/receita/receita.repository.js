"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const receita_entity_1 = require("./receita.entity");
let ReceitaRepository = class ReceitaRepository extends typeorm_1.Repository {
    async getReceita(filtro) {
        const { id_usu, search } = filtro;
        const query = this.createQueryBuilder('Receita');
        if (id_usu) {
            query.andWhere('(Receita.id_usu = :id_usu)', { id_usu });
        }
        if (search) {
            query.andWhere('(Receita.nome_rec LIKE :search OR Receita.preparo LIKE :search)', { search: `%${search}%` });
        }
        query.orderBy('Receita.data', 'DESC');
        const receitas = await query.getMany();
        return receitas;
    }
    async criarReceita(receitaDto) {
        const receita = new receita_entity_1.Receita();
        const { nome_rec, preparo, id_usu } = receitaDto;
        receita.nome_rec = nome_rec;
        receita.preparo = preparo;
        receita.id_usu = id_usu;
        receita.data = new Date();
        await receita.save();
        return receita;
    }
};
ReceitaRepository = __decorate([
    typeorm_1.EntityRepository(receita_entity_1.Receita)
], ReceitaRepository);
exports.ReceitaRepository = ReceitaRepository;
//# sourceMappingURL=receita.repository.js.map