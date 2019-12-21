import { EntityRepository, Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { getTagFiltroDto } from './dto/get-tag-filtro.dto';
import { TagDto } from './dto/tag.dto';

@EntityRepository(Tag)
export class TagRepository extends Repository<Tag> {

    async getTag(filtro: getTagFiltroDto): Promise<Tag[]> {
        const { search } = filtro;
        const query = this.createQueryBuilder('Tag');

        if (search) {
            query.andWhere('(Tag.nome_tag LIKE :search)', {search: `%${search}%`});
        }
        query.orderBy('Tag.nome_tag', 'DESC');

        const tags = await query.getMany();
        return tags;
    }
    
    async criarTag(
        tagDto: TagDto,
        ): Promise<Tag> {
       
        const tag = new Tag();
        const {nome_tag} = tagDto;
        tag.nome_tag = nome_tag;       
        await tag.save();

        return tag;
    }
}