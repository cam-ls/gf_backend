import { Repository } from 'typeorm';
import { Receita } from './receita.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';
import { Usuario } from '../auth/usuario.entity';
export declare class ReceitaRepository extends Repository<Receita> {
    getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]>;
    criarReceita(receitaDto: ReceitaDto, user: Usuario): Promise<Receita>;
}
