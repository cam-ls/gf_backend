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
const comentario_service_1 = require("./comentario.service");
const comentario_dto_1 = require("./dto/comentario.dto");
const get_comentario_filtro_dto_1 = require("./dto/get-comentario-filtro.dto");
let ComentarioController = class ComentarioController {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    getComentario(filtro) {
        return this.comentarioService.getComentario(filtro);
    }
    getComentarioId(id) {
        return this.comentarioService.getComentarioId(id);
    }
    criarComentario(comentarioDto) {
        return this.comentarioService.criarComentario(comentarioDto);
    }
    removerComentario(id) {
        return this.comentarioService.removerComentario(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_comentario_filtro_dto_1.getComentarioFiltroDto]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "getComentario", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "getComentarioId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comentario_dto_1.ComentarioDto]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "criarComentario", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "removerComentario", null);
ComentarioController = __decorate([
    common_1.Controller('comentario'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
exports.ComentarioController = ComentarioController;
//# sourceMappingURL=comentario.controller.js.map