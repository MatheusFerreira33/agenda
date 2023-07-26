import { ConflictException, NestMiddleware } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateContactsDto } from '../contacts/dto/create-contact.dto';
import {Request, Response, NextFunction} from 'express';

export class checkEmailContactsExist implements NestMiddleware{
    prisma = new PrismaClient()

    async use(req: Request, res: Response, next:NextFunction) {
    const{email}:CreateContactsDto = req.body;
    
    const findEmail = await this.prisma.contacts.count({
        where:{
            email:email
        }
    })

    if(findEmail){
        throw new ConflictException('Email already exists in a contact');
    }
    next();
}
}