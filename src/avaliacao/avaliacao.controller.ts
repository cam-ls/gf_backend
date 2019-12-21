import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacaoService } from './avaliacao.service';
import { getAvaliacaoFiltroDto } from './dto/get-avaliacao-filtro.dto';
import { AvaliacaoDto } from './dto/avaliacao.dto';

@Controller('avaliacao')

export class AvaliacaoController {
    constructor(
        private avaliacaoService: AvaliacaoService,
        ) {}
    
    @Get()
    getAvaliacao(@Query(ValidationPipe) filtro: getAvaliacaoFiltroDto): Promise<Avaliacao[]> {
        return this.avaliacaoService.getAvaliacao(filtro);
    }
    
    @Get('/:id')
    getAvaliacaoId(@Param('id', ParseIntPipe) id: number): Promise<Avaliacao> {
        return this.avaliacaoService.getAvaliacaId(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    criarAvaliacao(
        @Body() avaliacaoDto: AvaliacaoDto,
        ): Promise<Avaliacao> {

        return this.avaliacaoService.criarAvaliacao(avaliacaoDto);
    }

    @Delete('/:id')
    removerAvaliacao(
        @Param('id', ParseIntPipe) id: number,
        ): Promise<void> {
        return this.avaliacaoService.removerAvaliacao(id);
    }
    
}
