"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const receita_controller_1 = require("./receita.controller");
const receita_service_1 = require("./receita.service");
const typeorm_1 = require("@nestjs/typeorm");
const receita_repository_1 = require("./receita.repository");
const auth_module_1 = require("../auth/auth.module");
let ReceitaModule = class ReceitaModule {
};
ReceitaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([receita_repository_1.ReceitaRepository]),
            auth_module_1.AuthModule,
        ],
        controllers: [receita_controller_1.ReceitaController],
        providers: [receita_service_1.ReceitaService]
    })
], ReceitaModule);
exports.ReceitaModule = ReceitaModule;
//# sourceMappingURL=receita.module.js.map