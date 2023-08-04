import { ConflictException, Injectable} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { user } from "@prisma/client";
import {PrismaService} from '../prisma/prisma.service';
import {UpdateUserDto} from './dto/update-user.dto';


@Injectable()
export class AuthService{

    constructor(private readonly jwtservice:JwtService, private readonly prisma:PrismaService){}

    async createToken(user:user){
        return{
            token:this.jwtservice.sign({
                email:user.email
            },{
                expiresIn:'1 days',
                subject:String(user.id),
                audience:'login'
            })
        }
    }

    async finduser(email:string){
        return this.prisma.user.findUnique({
            where:{
                email:email
            },select:{
                id:true,
                full_name:true,
                email:true,
                telefone:true,
                createdAt:true
            }
        });
    }

    async update(data:UpdateUserDto, id:number){
        
        const {email}:UpdateUserDto = data;

        if(email){
            const findEmail = await this.prisma.user.count({where:{email:email}});

            if(findEmail){
                throw new ConflictException('email already exists');
            }
        }

        return this.prisma.user.update({where:{id:id},data:data,select:{
            id:true,
            full_name:true,
            email:true,
            telefone:true,
            createdAt:true
        }})
       
    }

    async delete(id:number){
        await this.prisma.user.delete({where:{id:id}});
    }
    
}