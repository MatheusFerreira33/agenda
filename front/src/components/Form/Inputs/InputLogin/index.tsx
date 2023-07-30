import { Path, UseFormRegister } from 'react-hook-form';
import {InputStyled, FieldsetStyled} from './style';
import { ReactNode } from 'react';


export interface IFormLogin {
    email: string;
    password: string;
  }


interface iNameInputs {
    nameInput: Path<IFormLogin>;
    type: string;
    register: UseFormRegister<IFormLogin>,
    error: ReactNode;
}
  


export const Input = ({type,  register, nameInput, error}:iNameInputs)=>{

    return(
        <FieldsetStyled>
            <InputStyled type={type}  {...register(nameInput)}/>
        </FieldsetStyled>
    )
}