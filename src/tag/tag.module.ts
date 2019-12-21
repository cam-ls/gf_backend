import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { TagRepository } from './tag.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TagRepository]),
    AuthModule,
],
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}
