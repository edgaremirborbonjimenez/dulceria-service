import { Module } from '@nestjs/common';
import { DulceriaController } from './dulceria.controller';
import { DulceriaService } from './dulceria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from 'src/config/typeorm.config';
import { EntitiesModule } from 'src/entities/entities.module';

@Module({
  imports:[TypeOrmModule.forRoot(TypeOrmOptions),EntitiesModule],
  controllers: [DulceriaController],
  providers: [DulceriaService]
})
export class DulceriaModule {}
