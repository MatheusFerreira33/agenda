import { useContext } from 'react';
import {UserContext} from '../../../providers/UserContext';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {StyledFormLogin, ButtonStyled} from './style';
import {IFormLogin, Input} from '../Inputs/InputLogin/index';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ()=>{
    const {getDatasFormLogin} = useContext(UserContext);

    const formYup = yup.object().shape({
        email: yup.string().required('Email obrigatorio').email('Email invalido'),
        password: yup.string().required('Senha obrigatoria')
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
        resolver: yupResolver(formYup)
    });


    
    return(
        <>
            <StyledFormLogin onSubmit={handleSubmit(getDatasFormLogin)}>
                <h1>Login</h1><br/>
                <label>Email</label>
                <Input type='email' nameInput='email' register={register} error={errors.email?.message}/><br/>

                <label>Senha</label>
                <Input type='password' nameInput='password' register={register} error={errors.password?.message}/><br/>

                <ButtonStyled>Logar</ButtonStyled><br/> 
                <Link to='/register'>Retornar para o Cadastro</Link>
                
            </StyledFormLogin>
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
      />
        </>
    )
    
}