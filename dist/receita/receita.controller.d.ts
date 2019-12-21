import { Receita } from './receita.entity';
import { ReceitaService } from './receita.service';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';
export declare class ReceitaController {
    private receitaService;
    constructor(receitaService: ReceitaService);
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    getReceitaId(id: number): Promise<Receita>;
    criarReceita(receitaDto: ReceitaDto): Promise<Receita>;
    removerReceita(id: number): Promise<void>;
}
