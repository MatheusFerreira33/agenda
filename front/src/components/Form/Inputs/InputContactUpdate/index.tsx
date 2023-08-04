import { Path, UseFormRegister } from 'react-hook-form';
import {InputStyled, FieldsetStyled} from './style';
import { ReactNode } from 'react';


interface IFormValues {
    full_name: string | undefined;
    email: string | undefined;
    telefone: string| undefined;
  }


interface iNameInputs {
    nameInput: Path<IFormValues>;
    type: string;
    defaultValue?:string | number;
    value?:string | number;
    register: UseFormRegister<IFormValues>,
    error: ReactNode;
}
  


export const Input = ({type,  register, nameInput,defaultValue, value, error}:iNameInputs)=>{

    return(
        <FieldsetStyled>
            <InputStyled type={type} defaultValue={defaultValue} {...register(nameInput)}/>
        </FieldsetStyled>
    )
}