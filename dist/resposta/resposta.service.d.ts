import { RespostaRepository } from './resposta.repository';
import { RespostaDto } from './dto/resposta.dto';
import { getRespostaFiltroDto } from './dto/get-resposta-filtro.dto';
import { Resposta } from './resposta.entity';
export declare class RespostaService {
    private respostaRepository;
    constructor(respostaRepository: RespostaRepository);
    criarResposta(respostaDto: RespostaDto): Promise<Resposta>;
    getResposta(filtro: getRespostaFiltroDto): Promise<Resposta[]>;
    getRespostaId(id: number): Promise<Resposta>;
    removerResposta(id: number): Promise<void>;
}
