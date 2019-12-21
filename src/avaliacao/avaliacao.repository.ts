import { EntityRepository, Repository } from 'typeorm';
import { getAvaliacaoFiltroDto } from './dto/get-avaliacao-filtro.dto';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacaoDto } from './dto/avaliacao.dto';

@EntityRepository(Avaliacao)
export class AvaliacaoRepository extends Repository<Avaliacao> {

    async getAvaliacao(filtro: getAvaliacaoFiltroDto): Promise<Avaliacao[]> {
        const { id_rec, id_usu, nota } = filtro;
        const query = this.createQueryBuilder('Avaliacao');

        if (id_rec) {
            query.andWhere('(Avaliacao.id_rec = :id_rec)', { id_rec });
        }
        if (id_usu) {
            query.andWhere('(Avaliacao.id_usu = :id_usu)', { id_usu });
        }

        if (nota) {
            query.andWhere('(Avaliacao.nota LIKE :nota)', {nota: `%${nota}%`});
        }
        query.orderBy('Avaliacao.data', 'DESC');

        const avaliacoes = await query.getMany();
        return avaliacoes;
    }
    
    async criarAvaliacao(
        avaliacaoDto: AvaliacaoDto,
        ): Promise<Avaliacao> {
       
        const avaliacao = new Avaliacao();
        const {id_rec, id_usu, nota} = avaliacaoDto;
        avaliacao.id_rec = id_rec;
        avaliacao.id_usu = id_usu;
        avaliacao.nota = nota;
        avaliacao.data = new Date();
        await avaliacao.save();

        return avaliacao;
    }
}