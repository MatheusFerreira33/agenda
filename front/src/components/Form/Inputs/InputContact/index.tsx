import { Path, UseFormRegister } from 'react-hook-form';
import {InputStyled, FieldsetStyled} from './style';
import { ReactNode } from 'react';


interface IFormValues {
    full_name: string;
    email: string;
    telefone: number;
  }


interface iNameInputs {
    nameInput: Path<IFormValues>;
    type: string;
    register: UseFormRegister<IFormValues>,
    error: ReactNode;
}
  


export const Input = ({type,  register, nameInput, error}:iNameInputs)=>{

    return(
        <FieldsetStyled>
            <InputStyled type={type}  {...register(nameInput)}/>
        </FieldsetStyled>
    )
}