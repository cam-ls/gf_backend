import { EntityRepository, Repository } from 'typeorm';
import { Receita } from './receita.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';

@EntityRepository(Receita)
export class ReceitaRepository extends Repository<Receita> {

    async getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]> {
        const { id_usu, search } = filtro;
        const query = this.createQueryBuilder('Receita');

        if (id_usu) {
            query.andWhere('(Receita.id_usu = :id_usu)', { id_usu });
        }

        if (search) {
            query.andWhere('(Receita.nome_rec LIKE :search OR Receita.preparo LIKE :search)', {search: `%${search}%`});
        }
        query.orderBy('Receita.data', 'DESC');

        const receitas = await query.getMany();
        return receitas;
    }
    
    async criarReceita(
        receitaDto: ReceitaDto,
        ): Promise<Receita> {
       
        const receita = new Receita();
        const {nome_rec, preparo, id_usu} = receitaDto;
        receita.nome_rec = nome_rec;
        receita.preparo = preparo;
        receita.id_usu = id_usu;
        receita.data = new Date();
        await receita.save();

        return receita;
    }
}