import { EntityRepository, Repository } from 'typeorm';
import { Comentario } from './comentario.entity';
import { ComentarioDto } from './dto/comentario.dto';
import { getComentarioFiltroDto } from './dto/get-comentario-filtro.dto';

@EntityRepository(Comentario)
export class ComentarioRepository extends Repository<Comentario> {

    async getComentario(filtro: getComentarioFiltroDto): Promise<Comentario[]> {
        const { id_rec, id_usu, search } = filtro;
        const query = this.createQueryBuilder('Comentario');

        if (id_usu) {
            query.andWhere('(Comentario.id_usu = :id_usu)', { id_usu });
        }

        if (id_rec) {
            query.andWhere('(Comentario.id_rec = :id_rec)', { id_rec });
        }

        if (search) {
            query.andWhere('(Comentario.descricao LIKE :search)', {search: `%${search}%`});
        }
        query.orderBy('Comentario.data', 'DESC');

        const comentarios = await query.getMany();
        return comentarios;
    }
    
    async criarComentario(
        comentarioDto: ComentarioDto,
        ): Promise<Comentario> {
       
        const comentario = new Comentario();
        const {id_rec, id_usu, descricao} = comentarioDto;
        comentario.id_rec = id_rec;
        comentario.id_usu = id_usu;
        comentario.descricao = descricao;
        comentario.data = new Date();
        await comentario.save();

        return comentario;
    }
}