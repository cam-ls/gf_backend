import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RespostaRepository } from './resposta.repository';
import { RespostaDto } from './dto/resposta.dto';
import { getRespostaFiltroDto } from './dto/get-resposta-filtro.dto';
import { Resposta } from './resposta.entity';

@Injectable()
export class RespostaService {
    constructor(@InjectRepository(RespostaRepository) private respostaRepository: RespostaRepository,) { }

    async criarResposta(
        respostaDto: RespostaDto,        
        ): Promise<Resposta> {
        return this.respostaRepository.criarResposta(respostaDto);
    }
    
    async getResposta(filtro: getRespostaFiltroDto): Promise<Resposta[]> {
        return this.respostaRepository.getResposta(filtro);
    }
    
    async getRespostaId(id: number): Promise<Resposta> {
        const achou = await this.respostaRepository.findOne(id);
        if (!achou) {
            throw new NotFoundException(`Resposta com id "${id}" não encontrada!`);
        }
        return achou;
    }

    async removerResposta(
        id: number,
        ): Promise<void> {
        const result = await this.respostaRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Resposta com id "${id}" não encontrada!`)
        }
    }
    
}
