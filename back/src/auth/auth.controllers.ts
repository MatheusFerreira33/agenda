import { Body, Controller, Post, NotFoundException, Get, Res, Patch, Delete } from "@nestjs/common";
import  {LoginDto} from './dto/login.dto';
import { PrismaService } from "src/prisma/prisma.service";
import {AuthService} from './auth.service';
import {Request, Response} from 'express';
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('auth')
export class AuthController{

    constructor(private readonly prisma:PrismaService, private readonly authservice:AuthService){}
    
    @Post('login')
    async login(@Body() {email,password}:LoginDto){
        const user = await this.prisma.user.findFirst({
            where:{
                email:email,
                password:password
            }
        })

        if(!user){
            throw new NotFoundException('Incorrect email or password');
        }

        return this.authservice.createToken(user);
    }

    @Get('user')
    async findOne(@Res() res:Response){
        const result = await this.authservice.finduser(res.locals.data.email);
        return res.status(200).json(result);
    }

    @Patch('user')
    async update(@Body() body:UpdateUserDto, @Res() res:Response){
        const result = await this.authservice.update(body, parseInt(res.locals.data.sub));
        return res.json(result);
    }

    @Delete('user')
    async delete(@Res() res:Response){
        await this.authservice.delete(parseInt(res.locals.data.sub));
        return res.status(204).send();
    }
}