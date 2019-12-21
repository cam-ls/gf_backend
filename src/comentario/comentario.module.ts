import { Module } from '@nestjs/common';
import { ComentarioController } from './comentario.controller';
import { ComentarioService } from './comentario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioRepository } from './comentario.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComentarioRepository]),
    AuthModule,
],
  controllers: [ComentarioController],
  providers: [ComentarioService]
})
export class ComentarioModule {}
