import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { user } from "@prisma/client";

@Injectable()
export class AuthService{

    constructor(private readonly jwtservice:JwtService){}

    async createToken(user:user){
        return{
            token:this.jwtservice.sign({
                email:user.email
            },{
                expiresIn:'1 days',
                subject:String(user.id)
            })
        }
    }
    
}