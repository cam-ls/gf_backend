import { Module } from '@nestjs/common';
import { RespostaController } from './resposta.controller';
import { RespostaService } from './resposta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespostaRepository } from './resposta.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RespostaRepository]),
    AuthModule,
],
  controllers: [RespostaController],
  providers: [RespostaService]
})
export class RespostaModule {}
