import { Repository } from 'typeorm';
import { RespostaDto } from './dto/resposta.dto';
import { getRespostaFiltroDto } from './dto/get-resposta-filtro.dto';
import { Resposta } from './resposta.entity';
export declare class RespostaRepository extends Repository<Resposta> {
    getResposta(filtro: getRespostaFiltroDto): Promise<Resposta[]>;
    criarResposta(respostaDto: RespostaDto): Promise<Resposta>;
}
