import { Path, UseFormRegister } from 'react-hook-form';
import {InputStyled, FieldsetStyled} from './style';
import { ReactNode } from 'react';


interface IFormValues {
    full_name: string;
    email: string;
    password: string;
    telefone: string;
  }


interface iNameInputs {
    nameInput: Path<IFormValues>;
    type: string;
    register: UseFormRegister<IFormValues>,
    error: ReactNode;
    defaultValue?:string | number;
}
  


export const Input = ({type,  register,defaultValue, nameInput, error}:iNameInputs)=>{

    return(
        <FieldsetStyled>
            <InputStyled type={type} defaultValue={defaultValue} {...register(nameInput)}/>
        </FieldsetStyled>
    )
}