import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { Ingrediente } from './ingrediente.entity';
import { IngredienteService } from './ingrediente.service';
import { getIngredienteFiltroDto } from './dto/get-ingrediente-filtro.dto';
import { IngredienteDto } from './dto/ingrediente.dto';

@Controller('ingrediente')

export class IngredienteController {
    constructor(
        private ingredienteService: IngredienteService,
        ) {}
    
    @Get()
    getIngrediente(@Query(ValidationPipe) filtro: getIngredienteFiltroDto): Promise<Ingrediente[]> {
        return this.ingredienteService.getIngrediente(filtro);
    }
    
    @Get('/:id')
    getIngredienteId(@Param('id', ParseIntPipe) id: number): Promise<Ingrediente> {
        return this.ingredienteService.getIngredienteId(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    criarIngrediente(
        @Body() ingredienteDto: IngredienteDto,
        ): Promise<Ingrediente> {

        return this.ingredienteService.criarIngrediente(ingredienteDto);
    }

    @Delete('/:id')
    removerIngrediente(
        @Param('id', ParseIntPipe) id: number,
        ): Promise<void> {
        return this.ingredienteService.removerIngrediente(id);
    }
    
}
