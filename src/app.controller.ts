import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      bemutatkozas: 'Phan Thi Linh Tra, 13.E osztályos tanuló.'
    }
  } 

  @Get('bekezdesek')
  @Render('bekezdesek')
  getSzoveg() {
    return {
      
    }
  }
}
