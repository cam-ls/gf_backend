import { Repository } from 'typeorm';
import { Receita } from './receita.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';
export declare class ReceitaRepository extends Repository<Receita> {
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    criarReceita(receitaDto: ReceitaDto): Promise<Receita>;
}
