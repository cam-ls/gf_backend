import { Module } from '@nestjs/common';
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoRepository } from './avaliacao.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AvaliacaoRepository]),
    AuthModule,
],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService]
})
export class AvaliacaoModule {}
