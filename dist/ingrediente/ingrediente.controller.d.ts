import { Ingrediente } from './ingrediente.entity';
import { IngredienteService } from './ingrediente.service';
import { getIngredienteFiltroDto } from './dto/get-ingrediente-filtro.dto';
import { IngredienteDto } from './dto/ingrediente.dto';
export declare class IngredienteController {
    private ingredienteService;
    constructor(ingredienteService: IngredienteService);
    getIngrediente(filtro: getIngredienteFiltroDto): Promise<Ingrediente[]>;
    getIngredienteId(id: number): Promise<Ingrediente>;
    criarIngrediente(ingredienteDto: IngredienteDto): Promise<Ingrediente>;
    removerIngrediente(id: number): Promise<void>;
}
