import { Injectable } from '@nestjs/common';
import { PruebaService } from './prueba.service';

@Injectable()
export class AppService {
  constructor(private readonly pruebaService: PruebaService) {}

  getHello(): string {
    return this.pruebaService.getHello2();
  }
}
