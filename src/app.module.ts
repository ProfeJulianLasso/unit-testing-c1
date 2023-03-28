import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaService } from './prueba.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PruebaService],
})
export class AppModule {}
