import {StyledFormContact,ButtonStyled} from './style';
import {Input} from '../Inputs/InputContact/index';
import * as yup from 'yup';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { iInputsFormContacts } from '../../../providers/UserContext';
import {UserContext} from '../../../providers/UserContext/index';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const RegisterForm = () =>{

    const {getDatasFormContacts} = useContext(UserContext);

    const schema = yup.object().shape({
        full_name: yup.string().required('Nome Obrigatorio'),
        email: yup.string().required('Email obrigatorio').email('Email invalido'),
        telefone: yup.string().required('telefone obrigatorio')
      })
    
    
    
      const { register, handleSubmit, formState: { errors } } = useForm<iInputsFormContacts>({
        resolver: yupResolver(schema)
      });

    return (
        <>
            <StyledFormContact onSubmit={handleSubmit(getDatasFormContacts)}>
                <h1>Criar Contato</h1><br/>

                <label>Nome Completo</label>
                <Input type='text' nameInput='full_name' register={register} error={errors.full_name?.message}/><br/>

                <label>Email</label>
                <Input type='email' nameInput='email' register={register} error={errors.email?.message}/><br/>

                <label>Telefone</label>
                <Input type='number' nameInput='telefone' register={register} error={errors.telefone?.message}/><br/>
                <ButtonStyled>Criar Contato</ButtonStyled> <br/>
                
            </StyledFormContact>

            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
      /></>
        
    )
}