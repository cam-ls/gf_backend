import { AvaliacaoRepository } from './avaliacao.repository';
import { Avaliacao } from './avaliacao.entity';
import { getAvaliacaoFiltroDto } from './dto/get-avaliacao-filtro.dto';
import { AvaliacaoDto } from './dto/avaliacao.dto';
export declare class AvaliacaoService {
    private avaliacaoRepository;
    constructor(avaliacaoRepository: AvaliacaoRepository);
    criarAvaliacao(avaliacaoDto: AvaliacaoDto): Promise<Avaliacao>;
    getAvaliacao(filtro: getAvaliacaoFiltroDto): Promise<Avaliacao[]>;
    getAvaliacaId(id: number): Promise<Avaliacao>;
    removerAvaliacao(id: number): Promise<void>;
}
