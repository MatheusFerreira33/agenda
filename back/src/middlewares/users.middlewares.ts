import { BadRequestException, ConflictException, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
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

export class CheckToken implements NestMiddleware{

    jwt = new JwtService({secret:'pF4ptxHdmBru5BcQr92NT6LMsPGwqQNN'});

    use(req: Request, res: Response, next:NextFunction) {
        
        if(req.headers.authorization){
            const [bearer,token] = req.headers.authorization.split(' ');
            try {
                const data = this.jwt.verify(token);
                res.locals.data = data
                next();
            } catch (error) {
                throw new BadRequestException(error);
            }

        }else{
            throw new UnauthorizedException('no token');
        }
    }
    
}