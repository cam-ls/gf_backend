import { Repository } from 'typeorm';
import { Receita } from './avaliacao.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-avaliacao-filtro.dto';
export declare class ReceitaRepository extends Repository<Receita> {
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    criarReceita(receitaDto: ReceitaDto): Promise<Receita>;
}
