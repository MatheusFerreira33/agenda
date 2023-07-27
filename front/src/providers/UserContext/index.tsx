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

interface iUserContext{
    getDatasFormRegister: (datas: iInputs) => void;
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


    return(
        <UserContext.Provider value={{getDatasFormRegister}}>
            {children}
        </UserContext.Provider>
    )
}
