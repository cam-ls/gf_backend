import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { getTagFiltroDto } from './dto/get-tag-filtro.dto';
import { TagDto } from './dto/tag.dto';

@Controller('tag')

export class TagController {
    constructor(
        private tagService: TagService,
        ) {}
    
    @Get()
    getTag(@Query(ValidationPipe) filtro: getTagFiltroDto): Promise<Tag[]> {
        return this.tagService.getTag(filtro);
    }
    
    @Get('/:id')
    getTagId(@Param('id', ParseIntPipe) id: number): Promise<Tag> {
        return this.tagService.getTagId(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    criarTag(
        @Body() tagDto: TagDto,
        ): Promise<Tag> {

        return this.tagService.criarTag(tagDto);
    }

    @Delete('/:id')
    removerTag(
        @Param('id', ParseIntPipe) id: number,
        ): Promise<void> {
        return this.tagService.removerTag(id);
    }
    
}
