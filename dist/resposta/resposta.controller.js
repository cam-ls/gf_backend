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
const resposta_service_1 = require("./resposta.service");
const resposta_dto_1 = require("./dto/resposta.dto");
const get_resposta_filtro_dto_1 = require("./dto/get-resposta-filtro.dto");
let RespostaController = class RespostaController {
    constructor(respostaService) {
        this.respostaService = respostaService;
    }
    getResposta(filtro) {
        return this.respostaService.getResposta(filtro);
    }
    getRespostaId(id) {
        return this.respostaService.getRespostaId(id);
    }
    criarResposta(respostaDto) {
        return this.respostaService.criarResposta(respostaDto);
    }
    removerResposta(id) {
        return this.respostaService.removerResposta(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_resposta_filtro_dto_1.getRespostaFiltroDto]),
    __metadata("design:returntype", Promise)
], RespostaController.prototype, "getResposta", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RespostaController.prototype, "getRespostaId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resposta_dto_1.RespostaDto]),
    __metadata("design:returntype", Promise)
], RespostaController.prototype, "criarResposta", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RespostaController.prototype, "removerResposta", null);
RespostaController = __decorate([
    common_1.Controller('resposta'),
    __metadata("design:paramtypes", [resposta_service_1.RespostaService])
], RespostaController);
exports.RespostaController = RespostaController;
//# sourceMappingURL=resposta.controller.js.map