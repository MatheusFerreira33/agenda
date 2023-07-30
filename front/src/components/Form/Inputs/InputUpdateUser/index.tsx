import { Path, UseFormRegister } from 'react-hook-form';
import {InputStyled, FieldsetStyled} from './style';
import { ReactNode } from 'react';


interface IFormValues {
    full_name: string;
    email: string;
    password: string;
    telefone: number | string;
  }


interface iNameInputs {
    nameInput: Path<IFormValues>;
    type: string;
    register: UseFormRegister<any>,
    value?:string | number,
    error: ReactNode;
    defaultValue?:string | number;
}
  


export const Input = ({type,  register,defaultValue, nameInput, value, error}:iNameInputs)=>{

    return(
        <FieldsetStyled>
            <InputStyled type={type} defaultValue={defaultValue} value={value} {...register(nameInput)}/>
        </FieldsetStyled>
    )
}