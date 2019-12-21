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
const ingrediente_service_1 = require("./ingrediente.service");
const get_ingrediente_filtro_dto_1 = require("./dto/get-ingrediente-filtro.dto");
const ingrediente_dto_1 = require("./dto/ingrediente.dto");
let IngredienteController = class IngredienteController {
    constructor(ingredienteService) {
        this.ingredienteService = ingredienteService;
    }
    getIngrediente(filtro) {
        return this.ingredienteService.getIngrediente(filtro);
    }
    getIngredienteId(id) {
        return this.ingredienteService.getIngredienteId(id);
    }
    criarIngrediente(ingredienteDto) {
        return this.ingredienteService.criarIngrediente(ingredienteDto);
    }
    removerIngrediente(id) {
        return this.ingredienteService.removerIngrediente(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_ingrediente_filtro_dto_1.getIngredienteFiltroDto]),
    __metadata("design:returntype", Promise)
], IngredienteController.prototype, "getIngrediente", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IngredienteController.prototype, "getIngredienteId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ingrediente_dto_1.IngredienteDto]),
    __metadata("design:returntype", Promise)
], IngredienteController.prototype, "criarIngrediente", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IngredienteController.prototype, "removerIngrediente", null);
IngredienteController = __decorate([
    common_1.Controller('ingrediente'),
    __metadata("design:paramtypes", [ingrediente_service_1.IngredienteService])
], IngredienteController);
exports.IngredienteController = IngredienteController;
//# sourceMappingURL=ingrediente.controller.js.map