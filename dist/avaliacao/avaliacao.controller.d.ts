import { Avaliacao } from './avaliacao.entity';
import { AvaliacaoService } from './avaliacao.service';
import { getAvaliacaoFiltroDto } from './dto/get-avaliacao-filtro.dto';
import { AvaliacaoDto } from './dto/avaliacao.dto';
export declare class AvaliacaoController {
    private avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    getAvaliacao(filtro: getAvaliacaoFiltroDto): Promise<Avaliacao[]>;
    getAvaliacaoId(id: number): Promise<Avaliacao>;
    criarAvaliacao(avaliacaoDto: AvaliacaoDto): Promise<Avaliacao>;
    removerAvaliacao(id: number): Promise<void>;
}
