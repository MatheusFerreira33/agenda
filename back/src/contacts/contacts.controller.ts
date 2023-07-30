import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactsDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {Response} from 'express';

@Controller('auth')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('contacts')
  async create(@Body() createContactDto: CreateContactsDto, @Res() res:Response) {
    const result = await this.contactsService.create(createContactDto,parseInt(res.locals.data.sub));
    return res.status(201).json(result);
  }

  @Get('contacts')
  async findAll(@Res() res:Response) {
    const result = await this.contactsService.findAll(parseInt(res.locals.data.sub));
    return res.json(result);
  }

  @Get('contacts/:id')
 async findOne(@Param('id') id: string, @Res() res:Response) {
    const result = await this.contactsService.findOne(parseInt(id), parseInt(res.locals.data.sub));
    return res.json(result);
  }

  @Patch('contacts/:id')
  async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto, @Res() res:Response) {
    const result = await this.contactsService.update(parseInt(id), parseInt(res.locals.data.sub), updateContactDto);
    return res.json(result);
  }

  @Delete('contacts/:id')
  async remove(@Param('id') id: string, @Res() res:Response) {
    await this.contactsService.remove(parseInt(id), parseInt(res.locals.data.sub));

    return res.status(204).send()
  }
}
