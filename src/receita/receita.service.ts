import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceitaRepository } from './receita.repository';
import { Receita } from './receita.entity';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';


@Injectable()
export class ReceitaService {
    constructor(@InjectRepository(ReceitaRepository) private receitaRepository: ReceitaRepository,) { }

    async criarReceita(
        receitaDto: ReceitaDto,        
        ): Promise<Receita> {
        return this.receitaRepository.criarReceita(receitaDto);
    }
    
    async getReceita(filtro: getReceitaFiltroDto): Promise<Receita[]> {
        return this.receitaRepository.getReceita(filtro);
    }
    
    async getReceitaId(id: number): Promise<Receita> {
        const achou = await this.receitaRepository.findOne(id);
        if (!achou) {
            throw new NotFoundException(`Receita com id "${id}" não encontrada!`);
        }
        return achou;
    }

    async removerReceita(
        id: number,
        ): Promise<void> {
        const result = await this.receitaRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Receita com id "${id}" não encontrada!`)
        }
    }    
}
