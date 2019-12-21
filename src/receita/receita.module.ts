import { Module } from '@nestjs/common';
import { ReceitaController } from './receita.controller';
import { ReceitaService } from './receita.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitaRepository } from './receita.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReceitaRepository]),
    AuthModule,
],
  controllers: [ReceitaController],
  providers: [ReceitaService]
})
export class ReceitaModule {}
