import { ComentarioRepository } from './resposta.repository';
import { Comentario } from './comentario.entity';
import { ComentarioDto } from './dto/resposta.dto';
import { getComentarioFiltroDto } from './dto/get-resposta-filtro.dto';
export declare class ComentarioService {
    private comentarioRepository;
    constructor(comentarioRepository: ComentarioRepository);
    criarComentario(comentarioDto: ComentarioDto): Promise<Comentario>;
    getComentario(filtro: getComentarioFiltroDto): Promise<Comentario[]>;
    getComentarioId(id: number): Promise<Comentario>;
    removerComentario(id: number): Promise<void>;
}
