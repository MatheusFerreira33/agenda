import { ConflictException, NestMiddleware } from "@nestjs/common";
import {PrismaClient} from '@prisma/client';
import {Request, Response, NextFunction} from 'express';
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class checkEmailExist implements NestMiddleware{

    prisma = new PrismaClient()

    async use(req: Request, res: Response, next:NextFunction) {
        const {email}: CreateUserDto = req.body;

        const findEmail = await this.prisma.user.count({
            where:{
                email:email
            }
        })

        if (findEmail){
            throw new ConflictException('email already exists');
        }

        next();
    }
}