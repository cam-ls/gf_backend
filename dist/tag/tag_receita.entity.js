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
const receita_entity_1 = require("../receita/receita.entity");
const tag_entity_1 = require("./tag.entity");
let Tag_Receita = class Tag_Receita extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Tag_Receita.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tag_entity_1.Tag),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Number)
], Tag_Receita.prototype, "id_tag", void 0);
__decorate([
    typeorm_1.OneToMany(type => receita_entity_1.Receita),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Number)
], Tag_Receita.prototype, "id_rec", void 0);
Tag_Receita = __decorate([
    typeorm_1.Entity()
], Tag_Receita);
exports.Tag_Receita = Tag_Receita;
//# sourceMappingURL=tag_receita.entity.js.map