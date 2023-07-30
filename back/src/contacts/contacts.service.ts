import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactsDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {PrismaService} from '../prisma/prisma.service';

@Injectable()
export class ContactsService {

  constructor(private readonly prisma:PrismaService){}

  create(createContactDto: CreateContactsDto, id:number) {

    const data = {
      ...createContactDto,
      userId:id
    }

    return this.prisma.contacts.create({data:data,
    select:{
        id:true,
        full_name:true,
        email:true,
        telefone:true,
        createdAt:true
    }});
  }

  findAll(id:number) {
    
    return this.prisma.contacts.findMany({where:{userId:id},select:{
        id:true,
        full_name:true,
        email:true,
        telefone:true,
        createdAt:true
    }});
  }

  async findOne(idContacts: number, idUser:number) {
    const contact = await this.prisma.contacts.findFirst({
      where:{
        id:idContacts,
        userId:idUser
      },
      select:{
        id:true,
        full_name:true,
        email:true,
        telefone:true,
        createdAt:true
      }
    })

    if(!contact){
      throw new NotFoundException('Contact not found in your contact list');
    }
    return contact
  }

  async update(idContact:number, idUser:number, updateContactDto: UpdateContactDto) {

    const checkIdUserAssoctionContacts = await this.prisma.contacts.findFirst({
      where:{
        id:idContact,
        userId:idUser
      }
    })

    if(!checkIdUserAssoctionContacts){
        throw new NotFoundException('Contact not found in your contact list');
    }

    const contactUpdate = await this.prisma.contacts.update({
      where:{
        id:idContact,
      },
      data:updateContactDto,
      select:{
        id:true,
        full_name:true,
        email:true,
        telefone:true,
        createdAt:true
      }
    })

    return contactUpdate
  }

  async remove(id: number, idUser:number) {

    const checkIdUserAssoctionContacts = await this.prisma.contacts.findFirst({
      where:{
        id:id,
        userId:idUser
      }
    })

    if(!checkIdUserAssoctionContacts){
        throw new NotFoundException('Contact not found in your contact list');
    }

    await this.prisma.contacts.delete({
      where:{
        id:id
      }
    })
  }
}
