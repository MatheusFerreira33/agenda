import {StyledFormRegister } from './style';
import {Input} from '../Inputs/InputRegister/index';
import * as yup from 'yup';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { iInputs } from '../../../providers/UserContext';
import {Button} from '../../Button';
import {UserContext} from '../../../providers/UserContext/index';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

export const RegisterForm = () =>{

    const {getDatasFormRegister} = useContext(UserContext);

    const schema = yup.object().shape({
        full_name: yup.string().required('Nome Obrigatorio'),
        email: yup.string().required('Email obrigatorio').email('Email invalido'),
        password: yup.string().required('Senha obrigatoria'),
        telefone: yup.number().required('telefone obrigatorio')
      })
    
    
    
      const { register, handleSubmit, formState: { errors } } = useForm<iInputs>({
        resolver: yupResolver(schema)
      });

    return (
        <>
            <StyledFormRegister onSubmit={handleSubmit(getDatasFormRegister)}>
                <h1>Cadastro</h1><br/>

                <label>Nome Completo</label>
                <Input type='text' nameInput='full_name' register={register} error={errors.full_name?.message}/><br/>

                <label>Email</label>
                <Input type='email' nameInput='email' register={register} error={errors.email?.message}/><br/>

                <label>Senha</label>
                <Input type='password' nameInput='password' register={register} error={errors.password?.message}/><br/>

                <label>Telefone</label>
                <Input type='number' nameInput='telefone' register={register} error={errors.telefone?.message}/><br/>
                <Button/> <br/> <Link to='/'>Retornar para o login</Link>
                
            </StyledFormRegister>

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