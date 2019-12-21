import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvaliacaoRepository } from './avaliacao.repository';
import { Avaliacao } from './avaliacao.entity';
import { getAvaliacaoFiltroDto } from './dto/get-avaliacao-filtro.dto';
import { AvaliacaoDto } from './dto/avaliacao.dto';

@Injectable()
export class AvaliacaoService {
    constructor(@InjectRepository(AvaliacaoRepository) private avaliacaoRepository: AvaliacaoRepository,) { }

    async criarAvaliacao(
        avaliacaoDto: AvaliacaoDto,        
        ): Promise<Avaliacao> {
        return this.avaliacaoRepository.criarAvaliacao(avaliacaoDto);
    }
    
    async getAvaliacao(filtro: getAvaliacaoFiltroDto): Promise<Avaliacao[]> {
        return this.avaliacaoRepository.getAvaliacao(filtro);
    }
    
    async getAvaliacaId(id: number): Promise<Avaliacao> {
        const achou = await this.avaliacaoRepository.findOne(id);
        if (!achou) {
            throw new NotFoundException(`Avaliação com id "${id}" não encontrada!`);
        }
        return achou;
    }

    async removerAvaliacao(
        id: number,
        ): Promise<void> {
        const result = await this.avaliacaoRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Avaliação com id "${id}" não encontrada!`)
        }
    }
    
}
