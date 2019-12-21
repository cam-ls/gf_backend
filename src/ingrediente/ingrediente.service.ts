import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredienteRepository } from './ingrediente.repository';
import { Ingrediente } from './ingrediente.entity';
import { getIngredienteFiltroDto } from './dto/get-ingrediente-filtro.dto';
import { IngredienteDto } from './dto/ingrediente.dto';

@Injectable()
export class IngredienteService {
    constructor(@InjectRepository(IngredienteRepository) private ingredienteRepository: IngredienteRepository,) { }

    async criarIngrediente(
        ingredienteDto: IngredienteDto,        
        ): Promise<Ingrediente> {
        return this.ingredienteRepository.criarIngrediente(ingredienteDto);
    }
    
    async getIngrediente(filtro: getIngredienteFiltroDto): Promise<Ingrediente[]> {
        return this.ingredienteRepository.getIngrediente(filtro);
    }
    
    async getIngredienteId(id: number): Promise<Ingrediente> {
        const achou = await this.ingredienteRepository.findOne(id);
        if (!achou) {
            throw new NotFoundException(`Ingrediente com id "${id}" não encontrado!`);
        }
        return achou;
    }

    async removerIngrediente(
        id: number,
        ): Promise<void> {
        const result = await this.ingredienteRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Ingrediente com id "${id}" não encontrado!`)
        }
    }
    
}
