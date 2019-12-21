import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { getTagFiltroDto } from './dto/get-tag-filtro.dto';
import { TagDto } from './dto/tag.dto';
export declare class TagRepository extends Repository<Tag> {
    getTag(filtro: getTagFiltroDto): Promise<Tag[]>;
    criarTag(tagDto: TagDto): Promise<Tag>;
}
