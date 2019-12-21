"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const comentario_controller_1 = require("./comentario.controller");
const comentario_service_1 = require("./comentario.service");
const typeorm_1 = require("@nestjs/typeorm");
const comentario_repository_1 = require("./comentario.repository");
const auth_module_1 = require("../auth/auth.module");
let ComentarioModule = class ComentarioModule {
};
ComentarioModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comentario_repository_1.ComentarioRepository]),
            auth_module_1.AuthModule,
        ],
        controllers: [comentario_controller_1.ComentarioController],
        providers: [comentario_service_1.ComentarioService]
    })
], ComentarioModule);
exports.ComentarioModule = ComentarioModule;
//# sourceMappingURL=comentario.module.js.map