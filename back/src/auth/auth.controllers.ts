import { Body, Controller, Post, NotFoundException } from "@nestjs/common";
import  {LoginDto} from './dto/login.dto';
import { PrismaService } from "src/prisma/prisma.service";
import {AuthService} from './auth.service';

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
}