"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const tag_entity_1 = require("./tag.entity");
let TagRepository = class TagRepository extends typeorm_1.Repository {
    async getTag(filtro) {
        const { search } = filtro;
        const query = this.createQueryBuilder('Tag');
        if (search) {
            query.andWhere('(Tag.nome_tag LIKE :search)', { search: `%${search}%` });
        }
        query.orderBy('Tag.nome_tag', 'DESC');
        const tags = await query.getMany();
        return tags;
    }
    async criarTag(tagDto) {
        const tag = new tag_entity_1.Tag();
        const { nome_tag } = tagDto;
        tag.nome_tag = nome_tag;
        await tag.save();
        return tag;
    }
};
TagRepository = __decorate([
    typeorm_1.EntityRepository(tag_entity_1.Tag)
], TagRepository);
exports.TagRepository = TagRepository;
//# sourceMappingURL=tag.repository.js.map