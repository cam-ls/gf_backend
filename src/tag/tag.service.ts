import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { getTagFiltroDto } from './dto/get-tag-filtro.dto';
import { TagDto } from './dto/tag.dto';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {
    constructor(@InjectRepository(TagRepository) private tagRepository: TagRepository,) { }

    async criarTag(
        tagDto: TagDto,        
        ): Promise<Tag> {
        return this.tagRepository.criarTag(tagDto);
    }
    
    async getTag(filtro: getTagFiltroDto): Promise<Tag[]> {
        return this.tagRepository.getTag(filtro);
    }
    
    async getTagId(id: number): Promise<Tag> {
        const achou = await this.tagRepository.findOne(id);
        if (!achou) {
            throw new NotFoundException(`Tag com id "${id}" não encontrada!`);
        }
        return achou;
    }

    async removerTag(
        id: number,
        ): Promise<void> {
        const result = await this.tagRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Tag com id "${id}" não encontrada!`)
        }
    }
    
}
