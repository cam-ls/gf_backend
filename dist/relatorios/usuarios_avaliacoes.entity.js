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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const avaliacao_entity_1 = require("../avaliacao/avaliacao.entity");
const usuario_entity_1 = require("../auth/usuario.entity");
let UsuarioAvaliacao = class UsuarioAvaliacao {
};
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], UsuarioAvaliacao.prototype, "nome_usu", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], UsuarioAvaliacao.prototype, "media_nota", void 0);
UsuarioAvaliacao = __decorate([
    typeorm_1.ViewEntity({
        expression: (connection) => connection.createQueryBuilder()
            .select("usuario.nome_usu", "nome_usu")
            .addSelect("avg(nota)", "media_nota")
            .from(avaliacao_entity_1.Avaliacao, "avaliacao")
            .innerJoin(usuario_entity_1.Usuario, "usuario", "usuario.id = avaliacao.id_usu")
            .groupBy('1')
            .orderBy("avg(nota) desc")
    })
], UsuarioAvaliacao);
exports.UsuarioAvaliacao = UsuarioAvaliacao;
//# sourceMappingURL=usuarios_avaliacoes.entity.js.map