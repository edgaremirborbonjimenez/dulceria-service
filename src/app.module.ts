import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DulceriaModule } from './dulceria/dulceria.module';

@Module({
  imports: [DulceriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
