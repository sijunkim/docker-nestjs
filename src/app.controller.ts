import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health-check')
  healthCheck(): string {
    return 'ok';
  }

  @Get('/kimsijun')
  kimsijun(): string {
    return "I'm SiJun Kim.";
  }

  //asd

  @Get('/chain-partners')
  chainpartners(): string {
    return "I'm chainpartners!!!";
  }
}
