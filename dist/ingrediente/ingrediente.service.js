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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ingrediente_repository_1 = require("./ingrediente.repository");
let IngredienteService = class IngredienteService {
    constructor(ingredienteRepository) {
        this.ingredienteRepository = ingredienteRepository;
    }
    async criarIngrediente(ingredienteDto) {
        return this.ingredienteRepository.criarIngrediente(ingredienteDto);
    }
    async getIngrediente(filtro) {
        return this.ingredienteRepository.getIngrediente(filtro);
    }
    async getIngredienteId(id) {
        const achou = await this.ingredienteRepository.findOne(id);
        if (!achou) {
            throw new common_1.NotFoundException(`Ingrediente com id "${id}" não encontrado!`);
        }
        return achou;
    }
    async removerIngrediente(id) {
        const result = await this.ingredienteRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Ingrediente com id "${id}" não encontrado!`);
        }
    }
};
IngredienteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(ingrediente_repository_1.IngredienteRepository)),
    __metadata("design:paramtypes", [ingrediente_repository_1.IngredienteRepository])
], IngredienteService);
exports.IngredienteService = IngredienteService;
//# sourceMappingURL=ingrediente.service.js.map