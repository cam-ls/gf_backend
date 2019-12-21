import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { Comentario } from './comentario.entity';
import { ComentarioService } from './comentario.service';
import { ComentarioDto } from './dto/comentario.dto';
import { getComentarioFiltroDto } from './dto/get-comentario-filtro.dto';

@Controller('comentario')

export class ComentarioController {
    constructor(
        private comentarioService: ComentarioService,
        ) {}
    
    @Get()
    getComentario(@Query(ValidationPipe) filtro: getComentarioFiltroDto): Promise<Comentario[]> {
        return this.comentarioService.getComentario(filtro);
    }
    
    @Get('/:id')
    getComentarioId(@Param('id', ParseIntPipe) id: number): Promise<Comentario> {
        return this.comentarioService.getComentarioId(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    criarComentario(
        @Body() comentarioDto: ComentarioDto,
        ): Promise<Comentario> {

        return this.comentarioService.criarComentario(comentarioDto);
    }

    @Delete('/:id')
    removerComentario(
        @Param('id', ParseIntPipe) id: number,
        ): Promise<void> {
        return this.comentarioService.removerComentario(id);
    }
    
}
