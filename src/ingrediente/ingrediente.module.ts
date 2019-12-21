import { Module } from '@nestjs/common';
import { IngredienteController } from './ingrediente.controller';
import { IngredienteService } from './ingrediente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredienteRepository } from './ingrediente.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([IngredienteRepository]),
    AuthModule,
],
  controllers: [IngredienteController],
  providers: [IngredienteService]
})
export class IngredienteModule {}
