import { Repository } from 'typeorm';
import { getAvaliacaoFiltroDto } from './dto/get-avaliacao-filtro.dto';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacaoDto } from './dto/avaliacao.dto';
export declare class AvaliacaoRepository extends Repository<Avaliacao> {
    getAvaliacao(filtro: getAvaliacaoFiltroDto): Promise<Avaliacao[]>;
    criarAvaliacao(avaliacaoDto: AvaliacaoDto): Promise<Avaliacao>;
}
