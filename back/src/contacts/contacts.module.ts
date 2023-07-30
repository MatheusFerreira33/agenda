import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {CheckToken} from '../middlewares/users.middlewares';
import { PrismaModule } from 'src/prisma/prisma.module';
import { checkEmailContactsExist } from 'src/middlewares/contacts.middlewares';

@Module({
  imports:[PrismaModule],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(CheckToken,checkEmailContactsExist)
    .forRoutes({path:'auth/contacts', method:RequestMethod.POST},
    {path:'auth/contacts', method:RequestMethod.GET},
    {path:'auth/contacts/:id', method:RequestMethod.GET},
    {path:'auth/contacts/:id', method:RequestMethod.PATCH},
    {path:'auth/contacts/:id', method:RequestMethod.DELETE},)
  }
}
