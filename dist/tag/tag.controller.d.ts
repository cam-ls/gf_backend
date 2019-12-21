import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { getTagFiltroDto } from './dto/get-tag-filtro.dto';
import { TagDto } from './dto/tag.dto';
export declare class TagController {
    private tagService;
    constructor(tagService: TagService);
    getTag(filtro: getTagFiltroDto): Promise<Tag[]>;
    getTagId(id: number): Promise<Tag>;
    criarTag(tagDto: TagDto): Promise<Tag>;
    removerTag(id: number): Promise<void>;
}
