"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const avaliacao_repository_1 = require("./avaliacao.repository");
let ReceitaService = class ReceitaService {
    constructor(receitaRepository) {
        this.receitaRepository = receitaRepository;
    }
    async criarReceita(receitaDto) {
        return this.receitaRepository.criarReceita(receitaDto);
    }
    async getReceita(filtro) {
        return this.receitaRepository.getReceita(filtro);
    }
    async getReceitaId(id) {
        const achou = await this.receitaRepository.findOne(id);
        if (!achou) {
            throw new common_1.NotFoundException(`Receita com id "${id}" não encontrada!`);
        }
        return achou;
    }
    async removerReceita(id) {
        const result = await this.receitaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Receita com id "${id}" não encontrada!`);
        }
    }
};
ReceitaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(avaliacao_repository_1.ReceitaRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof avaliacao_repository_1.ReceitaRepository !== "undefined" && avaliacao_repository_1.ReceitaRepository) === "function" ? _a : Object])
], ReceitaService);
exports.ReceitaService = ReceitaService;
//# sourceMappingURL=receita.service.js.map