import { Comentario } from './comentario.entity';
import { ComentarioService } from './comentario.service';
import { ComentarioDto } from './dto/comentario.dto';
import { getComentarioFiltroDto } from './dto/get-comentario-filtro.dto';
export declare class ComentarioController {
    private comentarioService;
    constructor(comentarioService: ComentarioService);
    getComentario(filtro: getComentarioFiltroDto): Promise<Comentario[]>;
    getComentarioId(id: number): Promise<Comentario>;
    criarComentario(comentarioDto: ComentarioDto): Promise<Comentario>;
    removerComentario(id: number): Promise<void>;
}
