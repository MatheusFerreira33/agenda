import { createContext } from "react";
import { api } from "../../services/api";
import { SubmitHandler } from 'react-hook-form';
import { AxiosError } from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

interface typeChildren {
    children: React.ReactNode;
}

export interface iInputs {
    full_name: string;
    email: string;
    password: string;
    telefone: number;
}

export interface iInputsLogin{
    email:string,
    password:string
}

interface iUserContext{
    getDatasFormRegister: (datas: iInputs) => void;
    getDatasFormLogin: (datas: iInputsLogin) => void;
}

export const UserContext = createContext({} as iUserContext);


export const UserProvider = ({children}:typeChildren)=>{
    const navigate = useNavigate();

    const getDatasFormRegister: SubmitHandler<iInputs> = async(datas) =>{

        try {
            const response = await api.post('users', datas);
            toast.success('Cadastro feito com sucesso');
            setTimeout(() => { navigate('/') }, 2000);
            
        } catch (error) {
            const currentError = error as AxiosError;
            toast.error('Esse email ja existe');
        }

    }

    const getDatasFormLogin: SubmitHandler<iInputsLogin> = async(datas)=>{
        try {
            const response = await api.post('auth/login', datas);
            toast.success('Login feito com sucesso');
            localStorage.setItem('token', JSON.stringify(response.data.token));
            //setTimeout(() => { navigate('/') }, 2000);
            
        } catch (error) {
            const currentError = error as AxiosError;
            toast.error('Email ou senha incorretos');
        }
    }


    return(
        <UserContext.Provider value={{getDatasFormRegister, getDatasFormLogin}}>
            {children}
        </UserContext.Provider>
    )
}
