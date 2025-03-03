import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from "path"

@Module({
  imports: [ ImagesModule,ConfigModule.forRoot(), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory:(configService: ConfigService) =>({
        type: "postgres",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB"),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true
      }),
    
  }), UserModule, ServeStaticModule.forRoot({ //используем модули созанных сущностей 
    rootPath: join("src", "uploadImages" ), //статика для раздачи изображений 
    serveRoot: "/images"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
