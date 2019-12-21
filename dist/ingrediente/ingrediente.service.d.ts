import { IngredienteRepository } from './ingrediente.repository';
import { Ingrediente } from './ingrediente.entity';
import { getIngredienteFiltroDto } from './dto/get-ingrediente-filtro.dto';
import { IngredienteDto } from './dto/ingrediente.dto';
export declare class IngredienteService {
    private ingredienteRepository;
    constructor(ingredienteRepository: IngredienteRepository);
    criarIngrediente(ingredienteDto: IngredienteDto): Promise<Ingrediente>;
    getIngrediente(filtro: getIngredienteFiltroDto): Promise<Ingrediente[]>;
    getIngredienteId(id: number): Promise<Ingrediente>;
    removerIngrediente(id: number): Promise<void>;
}
