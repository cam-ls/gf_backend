import { Receita } from './receita.entity';
import { ReceitaService } from './receita.service';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';
import { Usuario } from '../auth/usuario.entity';
export declare class ReceitaController {
    private receitaService;
    constructor(receitaService: ReceitaService);
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    getReceitaId(id: number): Promise<Receita>;
    criarReceita(receitaDto: ReceitaDto, user: Usuario): Promise<Receita>;
    updateReceita(id: number, receitaDto: ReceitaDto): Promise<Receita>;
    removerReceita(id: number, user: Usuario): Promise<void>;
}
