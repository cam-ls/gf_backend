"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ingrediente_entity_1 = require("./ingrediente.entity");
let IngredienteRepository = class IngredienteRepository extends typeorm_1.Repository {
    async getIngrediente(filtro) {
        const { search } = filtro;
        const query = this.createQueryBuilder('Ingrediente');
        if (search) {
            query.andWhere('(Ingrediente.nome_ing LIKE :search)', { search: `%${search}%` });
        }
        query.orderBy('Ingrediente.nome_ing', 'DESC');
        const ingredientes = await query.getMany();
        return ingredientes;
    }
    async criarIngrediente(ingredienteDto) {
        const ingrediente = new ingrediente_entity_1.Ingrediente();
        const { nome_ing } = ingredienteDto;
        ingrediente.nome_ing = nome_ing;
        await ingrediente.save();
        return ingrediente;
    }
};
IngredienteRepository = __decorate([
    typeorm_1.EntityRepository(ingrediente_entity_1.Ingrediente)
], IngredienteRepository);
exports.IngredienteRepository = IngredienteRepository;
//# sourceMappingURL=ingrediente.repository.js.map