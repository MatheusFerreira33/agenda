import { IsEmail, IsPositive, IsString, MaxLength } from 'class-validator';


export class CreateUserDto {

    @IsString()
    @MaxLength(45)
    full_name:string

    @IsEmail()
    @MaxLength(45)
    email:string

    @IsString()
    @MaxLength(45)
    password:string

    @IsPositive()
    telefone:number

}
