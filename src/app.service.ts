import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getupdate(): string {
    return 'Its updated';
  }
  getchange(): string {
    return 'Its changed';
  }
}
