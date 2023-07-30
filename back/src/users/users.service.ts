import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private readonly prisma:PrismaService){}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({
      data:data,
      select:{
        id:true,
        full_name:true,
        email:true,
        telefone:true,
        createdAt:true
      }
    })
  }
}
