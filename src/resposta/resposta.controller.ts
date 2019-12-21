import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { RespostaService } from './resposta.service';
import { RespostaDto } from './dto/resposta.dto';
import { getRespostaFiltroDto } from './dto/get-resposta-filtro.dto';
import { Resposta } from './resposta.entity';

@Controller('resposta')

export class RespostaController {
    constructor(
        private respostaService: RespostaService,
        ) {}
    
    @Get()
    getResposta(@Query(ValidationPipe) filtro: getRespostaFiltroDto): Promise<Resposta[]> {
        return this.respostaService.getResposta(filtro);
    }
    
    @Get('/:id')
    getRespostaId(@Param('id', ParseIntPipe) id: number): Promise<Resposta> {
        return this.respostaService.getRespostaId(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    criarResposta(
        @Body() respostaDto: RespostaDto,
        ): Promise<Resposta> {

        return this.respostaService.criarResposta(respostaDto);
    }

    @Delete('/:id')
    removerResposta(
        @Param('id', ParseIntPipe) id: number,
        ): Promise<void> {
        return this.respostaService.removerResposta(id);
    }
    
}
