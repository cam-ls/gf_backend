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
const receita_service_1 = require("./receita.service");
const receita_dto_1 = require("./dto/receita.dto");
const get_receita_filtro_dto_1 = require("./dto/get-receita-filtro.dto");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user-decorator");
const usuario_entity_1 = require("../auth/usuario.entity");
let ReceitaController = class ReceitaController {
    constructor(receitaService) {
        this.receitaService = receitaService;
    }
    getReceita(filtro) {
        return this.receitaService.getReceita(filtro);
    }
    getReceitaId(id) {
        return this.receitaService.getReceitaId(id);
    }
    criarReceita(receitaDto, user) {
        return this.receitaService.criarReceita(receitaDto, user);
    }
    updateReceita(id, receitaDto) {
        return this.updateReceita(id, receitaDto);
    }
    removerReceita(id, user) {
        return this.receitaService.removerReceita(id, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_receita_filtro_dto_1.getReceitaFiltroDto]),
    __metadata("design:returntype", Promise)
], ReceitaController.prototype, "getReceita", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReceitaController.prototype, "getReceitaId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receita_dto_1.ReceitaDto,
        usuario_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], ReceitaController.prototype, "criarReceita", null);
__decorate([
    common_1.Patch('/:id/update'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body('update')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, receita_dto_1.ReceitaDto]),
    __metadata("design:returntype", Promise)
], ReceitaController.prototype, "updateReceita", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, usuario_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], ReceitaController.prototype, "removerReceita", null);
ReceitaController = __decorate([
    common_1.Controller('receita'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [receita_service_1.ReceitaService])
], ReceitaController);
exports.ReceitaController = ReceitaController;
//# sourceMappingURL=receita.controller.js.map