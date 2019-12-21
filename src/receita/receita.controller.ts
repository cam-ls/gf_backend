import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { Receita } from './receita.entity';
import { ReceitaService } from './receita.service';
import { ReceitaDto } from './dto/receita.dto';
import { getReceitaFiltroDto } from './dto/get-receita-filtro.dto';

@Controller('receita')

export class ReceitaController {
    constructor(
        private receitaService: ReceitaService,
        ) {}
    
    @Get()
    getReceita(@Query(ValidationPipe) filtro: getReceitaFiltroDto): Promise<Receita[]> {
        return this.receitaService.getReceita(filtro);
    }
    
    @Get('/:id')
    getReceitaId(@Param('id', ParseIntPipe) id: number): Promise<Receita> {
        return this.receitaService.getReceitaId(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    criarReceita(
        @Body() receitaDto: ReceitaDto,
        ): Promise<Receita> {

        return this.receitaService.criarReceita(receitaDto);
    }

    @Delete('/:id')
    removerReceita(
        @Param('id', ParseIntPipe) id: number,): Promise<void> {
        return this.receitaService.removerReceita(id);
    }
    
}
