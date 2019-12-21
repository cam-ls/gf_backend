import { ReceitaRepository } from './receita.repository';
import { Receita } from './receita.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';
export declare class ReceitaService {
    private receitaRepository;
    constructor(receitaRepository: ReceitaRepository);
    criarReceita(receitaDto: ReceitaDto): Promise<Receita>;
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    getReceitaId(id: number): Promise<Receita>;
    removerReceita(id: number): Promise<void>;
}
