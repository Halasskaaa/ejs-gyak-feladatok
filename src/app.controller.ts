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
      szoveg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac suscipit massa. Quisque ultrices metus at aliquet viverra. Nunc maximus justo quam, a finibus justo semper eget. Cras pellentesque velit sit amet elit fringilla sollicitudin. Nullam eget massa nisl. Quisque non consequat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Duis eu rhoncus erat. Duis non lobortis justo. Proin gravida nec ante a porttitor. Suspendisse ut bibendum lectus. Curabitur luctus ligula augue, sit amet commodo tellus sollicitudin ut. Praesent scelerisque ut lectus eget tempor. Nullam condimentum aliquam ante eget convallis. Vestibulum quis odio ut odio dapibus laoreet eu ac elit. Aenean et nunc ipsum. Proin vel blandit lorem. Nam lorem nisi, consectetur scelerisque dui sit amet, tempor aliquet justo. Mauris aliquet, lectus et fermentum venenatis, nunc tortor sagittis leo, vel fringilla nisl justo vel risus. Sed ullamcorper nec tellus vitae egestas. Donec vel tincidunt nibh, non rhoncus enim. Pellentesque nisi leo, ullamcorper eget interdum sit amet, mattis at risus. Proin aliquam varius tortor, vestibulum feugiat orci luctus vel.

Curabitur sit amet libero in libero dapibus tempus. Nullam sodales blandit libero non blandit. Quisque est metus, faucibus non placerat eget, auctor ut neque. Nam urna purus, molestie a molestie in, placerat nec ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac ante quis nisi mattis rutrum sed in purus. Nulla tristique libero tristique dignissim porttitor. Donec ut neque a mauris suscipit posuere. Duis volutpat augue nec congue ultrices. Ut efficitur sem a tellus aliquet, eget pretium sapien euismod.

Curabitur ut ultrices ligula. Pellentesque at risus convallis, consectetur leo a, congue nulla. Aliquam vulputate augue vitae eros feugiat semper. Maecenas eu sapien purus. Duis gravida elit eu viverra ultrices. Aliquam vulputate cursus enim, eu pulvinar lectus fermentum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod mauris eu nunc congue, eu dapibus massa tincidunt.

Quisque pellentesque consectetur neque, ut interdum justo tristique nec. Curabitur euismod id massa sed fringilla. Proin vitae rutrum est. In sed nisi vitae nibh bibendum vulputate nec eget erat. Donec gravida non erat ut varius. Suspendisse tincidunt accumsan pellentesque. Morbi a nisi vitae diam dignissim scelerisque. In hac habitasse platea dictumst.`
    }
  }

  @Get('piros-kek')
  @Render('red-blue')
  getRedBlue() {
    const random = Math.random();
    const bgColor = random > 0.5 ? 'red' : 'blue';
    return {
      bgColor: bgColor
    }
  } 
}
