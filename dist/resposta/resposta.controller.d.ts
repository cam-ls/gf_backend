import { RespostaService } from './resposta.service';
import { RespostaDto } from './dto/resposta.dto';
import { getRespostaFiltroDto } from './dto/get-resposta-filtro.dto';
import { Resposta } from './resposta.entity';
export declare class RespostaController {
    private respostaService;
    constructor(respostaService: RespostaService);
    getResposta(filtro: getRespostaFiltroDto): Promise<Resposta[]>;
    getRespostaId(id: number): Promise<Resposta>;
    criarResposta(respostaDto: RespostaDto): Promise<Resposta>;
    removerResposta(id: number): Promise<void>;
}
