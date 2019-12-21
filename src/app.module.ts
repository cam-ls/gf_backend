import { Module } from '@nestjs/common';
import { ReceitaModule } from './receita/receita.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, ReceitaModule,],
})
export class AppModule {}