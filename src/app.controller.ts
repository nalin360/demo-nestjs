import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request, Response } from '@nestjs/common';
// import { request } from 'http';
// import { Request } from 'express';
// import {update} from './updatee/update.js';
@Controller('id')
// endpint id
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  getupdate(): string {
    return this.appService.getupdate();
  }
  @Put()
  getchange(): string {
    return this.appService.getchange();
  }
}
