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
const typeorm_1 = require("@nestjs/typeorm");
const tag_repository_1 = require("./tag.repository");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async criarTag(tagDto) {
        return this.tagRepository.criarTag(tagDto);
    }
    async getTag(filtro) {
        return this.tagRepository.getTag(filtro);
    }
    async getTagId(id) {
        const achou = await this.tagRepository.findOne(id);
        if (!achou) {
            throw new common_1.NotFoundException(`Tag com id "${id}" não encontrada!`);
        }
        return achou;
    }
    async removerTag(id) {
        const result = await this.tagRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tag com id "${id}" não encontrada!`);
        }
    }
};
TagService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tag_repository_1.TagRepository)),
    __metadata("design:paramtypes", [tag_repository_1.TagRepository])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map