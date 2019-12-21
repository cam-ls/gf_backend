import { ComentarioRepository } from './comentario.repository';
import { Comentario } from './comentario.entity';
import { ComentarioDto } from './dto/comentario.dto';
import { getComentarioFiltroDto } from './dto/get-comentario-filtro.dto';
export declare class ComentarioService {
    private comentarioRepository;
    constructor(comentarioRepository: ComentarioRepository);
    criarComentario(comentarioDto: ComentarioDto): Promise<Comentario>;
    getComentario(filtro: getComentarioFiltroDto): Promise<Comentario[]>;
    getComentarioId(id: number): Promise<Comentario>;
    removerComentario(id: number): Promise<void>;
}
