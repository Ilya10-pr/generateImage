import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ApiKeyMiddleware } from 'src/middlware/apiKyeMiddleware';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) { //прокидваем мидлвар для возможности авторизации только нашего клиента
    consumer.apply(ApiKeyMiddleware).forRoutes('/user');
  }
}
