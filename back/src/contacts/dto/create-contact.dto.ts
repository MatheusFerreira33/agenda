import { IsEmail, IsPositive, IsString, MaxLength } from 'class-validator';


export class CreateContactsDto {

    @IsString()
    @MaxLength(45)
    full_name:string

    @IsEmail()
    @MaxLength(45)
    email:string

    @IsPositive()
    telefone:number

}
