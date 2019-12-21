import { EntityRepository, Repository } from 'typeorm';
import { RespostaDto } from './dto/resposta.dto';
import { getRespostaFiltroDto } from './dto/get-resposta-filtro.dto';
import { Resposta } from './resposta.entity';

@EntityRepository(Resposta)
export class RespostaRepository extends Repository<Resposta> {

    async getResposta(filtro: getRespostaFiltroDto): Promise<Resposta[]> {
        const { id_com, id_usu, search } = filtro;
        const query = this.createQueryBuilder('Resposta');

        if (id_com) {
            query.andWhere('(Resposta.id_com = :id_com)', { id_com });
        }

        if (id_usu) {
            query.andWhere('(Resposta.id_rec = :id_rec)', { id_usu });
        }

        if (search) {
            query.andWhere('(Resposta.descricao LIKE :search)', {search: `%${search}%`});
        }
        query.orderBy('Resposta.data', 'DESC');

        const respostas = await query.getMany();
        return respostas;
    }
    
    async criarResposta(
        respostaDto: RespostaDto,
        ): Promise<Resposta> {
       
        const resposta = new Resposta();
        const {id_com, id_usu, descricao} = respostaDto;
        resposta.id_com = id_com;
        resposta.id_usu = id_usu;
        resposta.descricao = descricao;
        resposta.data = new Date();
        await resposta.save();

        return resposta;
    }
}