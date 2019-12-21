import { ReceitaRepository } from './receita.repository';
import { Receita } from './receita.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';
import { Usuario } from '../auth/usuario.entity';
export declare class ReceitaService {
    private receitaRepository;
    constructor(receitaRepository: ReceitaRepository);
    criarReceita(receitaDto: ReceitaDto, user: Usuario): Promise<Receita>;
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    getReceitaId(id: number): Promise<Receita>;
    removerReceita(id: number, user: Usuario): Promise<void>;
}
