import { PartialType } from '@nestjs/mapped-types';
import { CreateContactsDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactsDto) {}
