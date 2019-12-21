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
const resposta_repository_1 = require("./resposta.repository");
let RespostaService = class RespostaService {
    constructor(respostaRepository) {
        this.respostaRepository = respostaRepository;
    }
    async criarResposta(respostaDto) {
        return this.respostaRepository.criarResposta(respostaDto);
    }
    async getResposta(filtro) {
        return this.respostaRepository.getResposta(filtro);
    }
    async getRespostaId(id) {
        const achou = await this.respostaRepository.findOne(id);
        if (!achou) {
            throw new common_1.NotFoundException(`Resposta com id "${id}" não encontrada!`);
        }
        return achou;
    }
    async removerResposta(id) {
        const result = await this.respostaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Resposta com id "${id}" não encontrada!`);
        }
    }
};
RespostaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(resposta_repository_1.RespostaRepository)),
    __metadata("design:paramtypes", [resposta_repository_1.RespostaRepository])
], RespostaService);
exports.RespostaService = RespostaService;
//# sourceMappingURL=resposta.service.js.map