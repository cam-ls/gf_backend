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
const comentario_repository_1 = require("./comentario.repository");
let ComentarioService = class ComentarioService {
    constructor(comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }
    async criarComentario(comentarioDto) {
        return this.comentarioRepository.criarComentario(comentarioDto);
    }
    async getComentario(filtro) {
        return this.comentarioRepository.getComentario(filtro);
    }
    async getComentarioId(id) {
        const achou = await this.comentarioRepository.findOne(id);
        if (!achou) {
            throw new common_1.NotFoundException(`Comentário com id "${id}" não encontrado!`);
        }
        return achou;
    }
    async removerComentario(id) {
        const result = await this.comentarioRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Comentário com id "${id}" não encontrado!`);
        }
    }
};
ComentarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comentario_repository_1.ComentarioRepository)),
    __metadata("design:paramtypes", [comentario_repository_1.ComentarioRepository])
], ComentarioService);
exports.ComentarioService = ComentarioService;
//# sourceMappingURL=comentario.service.js.map