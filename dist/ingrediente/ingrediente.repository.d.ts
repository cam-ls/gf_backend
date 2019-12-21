import { Repository } from 'typeorm';
import { Ingrediente } from './ingrediente.entity';
import { getIngredienteFiltroDto } from './dto/get-ingrediente-filtro.dto';
import { IngredienteDto } from './dto/ingrediente.dto';
export declare class IngredienteRepository extends Repository<Ingrediente> {
    getIngrediente(filtro: getIngredienteFiltroDto): Promise<Ingrediente[]>;
    criarIngrediente(ingredienteDto: IngredienteDto): Promise<Ingrediente>;
}
