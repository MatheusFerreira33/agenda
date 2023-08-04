import {StyledButtonDelete, StyledUpdateuserForm } from './style';
import {Input} from '../Inputs/InputUpdateUser/index';
import * as yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { iUser } from '../../../providers/UserContext';
import {UserContext} from '../../../providers/UserContext/index';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from '../../../services/api';

export const UpdateUserForm = () =>{

    const {updateuser, userUpdate,deleteUser} = useContext(UserContext);
    const [userInfo,setUserInfo] = useState<iUser>(Object);

    const schema = yup.object().shape({
        full_name: yup.string().optional(),
        email: yup.string().email('Email invalido').optional(),
        password: yup.string().optional(),
        telefone: yup.string().optional()
      })
    
    
    
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

      useEffect(()=>{
          
          const user = async()=>{
            const token = JSON.parse(localStorage.getItem('token') || "");

            const userData = await api.get('auth/user',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            setUserInfo(userData.data);
        }   
        user();

      },[])

      useEffect(()=>{
          
        const user = async()=>{
          const token = JSON.parse(localStorage.getItem('token') || "");

          const userData = await api.get('auth/user',{
              headers:{
                  Authorization:`Bearer ${token}`
              }
          })

          setUserInfo(userData.data);
      }   
      user();

    },[userUpdate])

    return (
        <>
            <StyledUpdateuserForm onSubmit={handleSubmit(updateuser)}>
                <h1>Atualizar Perfil</h1><br/>

                <label>Nome Completo</label>
                <Input type='text' nameInput='full_name' defaultValue={userInfo.full_name}  register={register} error={errors.full_name?.message}/><br/>

                <label>Email</label>
                <Input type='email' nameInput='email' defaultValue={userInfo.email}  register={register} error={errors.email?.message}/><br/>

                <label>Senha</label>
                <Input type='password' nameInput='password' register={register}  error={errors.password?.message}/><br/>

                <label>Telefone</label>
                <Input type='number' nameInput='telefone' defaultValue={userInfo.telefone} register={register} error={errors.telefone?.message}/><br/>
                <button type='submit'>Atualizar Perfil</button> <br/> 
            </StyledUpdateuserForm>
            
            <StyledButtonDelete onClick={()=>deleteUser()}>Deletar Perfil</StyledButtonDelete> 

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