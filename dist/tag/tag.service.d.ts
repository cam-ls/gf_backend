import { Tag } from './tag.entity';
import { getTagFiltroDto } from './dto/get-tag-filtro.dto';
import { TagDto } from './dto/tag.dto';
import { TagRepository } from './tag.repository';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: TagRepository);
    criarTag(tagDto: TagDto): Promise<Tag>;
    getTag(filtro: getTagFiltroDto): Promise<Tag[]>;
    getTagId(id: number): Promise<Tag>;
    removerTag(id: number): Promise<void>;
}
