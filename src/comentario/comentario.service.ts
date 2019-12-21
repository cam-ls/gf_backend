import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComentarioRepository } from './comentario.repository';
import { Comentario } from './comentario.entity';
import { ComentarioDto } from './dto/comentario.dto';
import { getComentarioFiltroDto } from './dto/get-comentario-filtro.dto';

@Injectable()
export class ComentarioService {
    constructor(@InjectRepository(ComentarioRepository) private comentarioRepository: ComentarioRepository,) { }

    async criarComentario(
        comentarioDto: ComentarioDto,        
        ): Promise<Comentario> {
        return this.comentarioRepository.criarComentario(comentarioDto);
    }
    
    async getComentario(filtro: getComentarioFiltroDto): Promise<Comentario[]> {
        return this.comentarioRepository.getComentario(filtro);
    }
    
    async getComentarioId(id: number): Promise<Comentario> {
        const achou = await this.comentarioRepository.findOne(id);
        if (!achou) {
            throw new NotFoundException(`Comentário com id "${id}" não encontrado!`);
        }
        return achou;
    }

    async removerComentario(
        id: number,
        ): Promise<void> {
        const result = await this.comentarioRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Comentário com id "${id}" não encontrado!`)
        }
    }
    
}
