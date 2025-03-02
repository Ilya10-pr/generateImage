import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { config } from 'orm.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from "path"

@Module({
  imports: [ ImagesModule, TypeOrmModule.forRoot(config), UserModule, ServeStaticModule.forRoot({ //используем модули созанных сущностей 
    rootPath: join("src", "uploadImages" ), //статика для раздачи изображений 
    serveRoot: "/images"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
