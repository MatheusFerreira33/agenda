import { Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {PrismaModule} from '../prisma/prisma.module';
import { checkEmailExist } from 'src/middlewares/users.middlewares';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[PrismaModule]
})
export class UsersModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(checkEmailExist)
    .forRoutes({path:'users', method:RequestMethod.POST},
    {path:'users', method:RequestMethod.PATCH})
  }
}
