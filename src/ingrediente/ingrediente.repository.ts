import { EntityRepository, Repository } from 'typeorm';
import { Ingrediente } from './ingrediente.entity';
import { getIngredienteFiltroDto } from './dto/get-ingrediente-filtro.dto';
import { IngredienteDto } from './dto/ingrediente.dto';

@EntityRepository(Ingrediente)
export class IngredienteRepository extends Repository<Ingrediente> {

    async getIngrediente(filtro: getIngredienteFiltroDto): Promise<Ingrediente[]> {
        const { search } = filtro;
        const query = this.createQueryBuilder('Ingrediente');

        if (search) {
            query.andWhere('(Ingrediente.nome_ing LIKE :search)', {search: `%${search}%`});
        }
        query.orderBy('Ingrediente.nome_ing', 'DESC');

        const ingredientes = await query.getMany();
        return ingredientes;
    }
    
    async criarIngrediente(
        ingredienteDto: IngredienteDto,
        ): Promise<Ingrediente> {
       
        const ingrediente = new Ingrediente();
        const {nome_ing} = ingredienteDto;
        ingrediente.nome_ing = nome_ing;       
        await ingrediente.save();

        return ingrediente;
    }
}