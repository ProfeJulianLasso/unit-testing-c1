import { Injectable } from '@nestjs/common';

@Injectable()
export class PruebaService {
  getHello2(): string {
    return 'Hello World!';
  }
}
