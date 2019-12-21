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
const avaliacao_service_1 = require("./avaliacao.service");
const get_avaliacao_filtro_dto_1 = require("./dto/get-avaliacao-filtro.dto");
const avaliacao_dto_1 = require("./dto/avaliacao.dto");
let AvaliacaoController = class AvaliacaoController {
    constructor(avaliacaoService) {
        this.avaliacaoService = avaliacaoService;
    }
    getAvaliacao(filtro) {
        return this.avaliacaoService.getAvaliacao(filtro);
    }
    getAvaliacaoId(id) {
        return this.avaliacaoService.getAvaliacaId(id);
    }
    criarAvaliacao(avaliacaoDto) {
        return this.avaliacaoService.criarAvaliacao(avaliacaoDto);
    }
    removerAvaliacao(id) {
        return this.avaliacaoService.removerAvaliacao(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_avaliacao_filtro_dto_1.getAvaliacaoFiltroDto]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "getAvaliacao", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "getAvaliacaoId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [avaliacao_dto_1.AvaliacaoDto]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "criarAvaliacao", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "removerAvaliacao", null);
AvaliacaoController = __decorate([
    common_1.Controller('avaliacao'),
    __metadata("design:paramtypes", [avaliacao_service_1.AvaliacaoService])
], AvaliacaoController);
exports.AvaliacaoController = AvaliacaoController;
//# sourceMappingURL=avaliacao.controller.js.map