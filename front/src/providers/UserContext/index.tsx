import { createContext, useEffect, useState, } from "react";
import { api } from "../../services/api";
import { SubmitHandler } from 'react-hook-form';
import { AxiosError } from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { ObjectSchema, object } from "yup";

interface typeChildren {
    children: React.ReactNode;
}

export interface iInputs {
    full_name: string;
    email: string;
    password: string;
    telefone: number;
}

export interface iInputsFormContacts {
    full_name: string;
    email: string;
    telefone: number;
}

export interface iInputsFormContactsUpdate {
    full_name?: string;
    email?: string;
    telefone?: number;
}

export interface CardContacts{
    id:number;
    full_name: string;
    email: string;
    telefone: number | string;
    createdAt:string;
}

export interface iInputsLogin{
    email:string,
    password:string
}

interface iUserContext{
    getDatasFormRegister: (datas: iInputs) => void;
    getDatasFormLogin: (datas: iInputsLogin) => void;
    getDatasFormContacts:(datas: iInputsFormContacts) => void;
    contacts:Array<CardContacts>;
    contactsUpdate: CardContacts;
    setContactsUpdate: React.Dispatch<React.SetStateAction<CardContacts>>;
    modal: boolean;
    setModal: (boolean: boolean) => void;
    getDatasFormContactsUpdate: (datas: iInputsFormContactsUpdate, idContact:number) => void;
    getContactById: (id: number) => void;
    deleteContact:(id: number) => void;
}

export const UserContext = createContext({} as iUserContext);


export const UserProvider = ({children}:typeChildren)=>{
    const [checkUser, setCheckUser] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [contacts, setContacts] = useState(Array<CardContacts>);
    const [contactsUpdate, setContactsUpdate] = useState<CardContacts>(Object);

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(!token){
            navigate('/');
        }else{
            navigate('/dashboard')
        }

        async function getContacts() {
            const token = JSON.parse(localStorage.getItem('token') || "");

            try {
                const result = await api.get('auth/contacts',{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setContacts([...result.data]);
                
            } catch (error) {
                console.log(error)
            }  
        }
        getContacts();

    },[])

    useEffect(()=>{

         async function getContacts() {
            const token = JSON.parse(localStorage.getItem('token') || "");

            try {
                const result = await api.get('auth/contacts',{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setContacts([...result.data]);
                
            } catch (error) {
                console.log(error)
            }  
        } 
        getContacts()      

    },[contacts]);

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
            setTimeout(() => { navigate('/dashboard') }, 2000);
            
        } catch (error) {
            const currentError = error as AxiosError;
            toast.error('Email ou senha incorretos');
        }
    }

    const getDatasFormContacts: SubmitHandler<iInputsFormContacts> = async(datas)=>{
        const token = JSON.parse(localStorage.getItem('token') || "");

        try {
            const response = await api.post('auth/contacts', datas,{
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });

            toast.success('Contato criado com sucesso');
            setTimeout(() => { navigate('/dashboard') }, 2000);
            
        } catch (error) {
            const currentError = error as AxiosError;
            toast.error('Email ja esta em outro contato');
        }
    }
    
    const getDatasFormContactsUpdate= async(datas:iInputsFormContactsUpdate, idContact:number)=>{
        const token = JSON.parse(localStorage.getItem('token') || "");

    try {
        const response = await api.patch(`auth/contacts/${idContact}`,datas,{
            headers:{
                Authorization:`Bearer ${token}` 
            }
        })

        toast.success('Contato atualizado com sucesso');
        setTimeout(() => { location.reload()}, 2000);
        
    } catch (error) {
        const currentError = error as AxiosError;
        toast.error('Email ja esta em outro contato');
        
    }
    }


    const getContactById = async(id:number)=>{
        
        const token = JSON.parse(localStorage.getItem('token') || "");

        const user = await api.get(`auth/contacts/${id}`, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        setContactsUpdate(user.data);
       
    }

    const deleteContact = async(id:number)=>{
        const token = JSON.parse(localStorage.getItem('token') || "");

        await api.delete(`auth/contacts/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }



    return(
        <UserContext.Provider value={{getDatasFormRegister, getDatasFormLogin,getDatasFormContacts,contacts,modal,setModal, getDatasFormContactsUpdate,getContactById,contactsUpdate,setContactsUpdate,deleteContact}}>
            {children}
        </UserContext.Provider>
    )
}
