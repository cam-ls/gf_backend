import { Repository } from 'typeorm';
import { Comentario } from './comentario.entity';
import { ComentarioDto } from './dto/comentario.dto';
import { getComentarioFiltroDto } from './dto/get-comentario-filtro.dto';
export declare class ComentarioRepository extends Repository<Comentario> {
    getComentario(filtro: getComentarioFiltroDto): Promise<Comentario[]>;
    criarComentario(comentarioDto: ComentarioDto): Promise<Comentario>;
}
