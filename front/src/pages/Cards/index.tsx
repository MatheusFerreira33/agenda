import { useContext} from 'react';
import {CardContainer, Card, ContainerModal, FormModal,HeaderModal,MainModal} from './style';
import { UserContext} from '../../providers/UserContext';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Form/Inputs/InputContactUpdate';
import { ButtonStyled } from '../../components/Button/style';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export interface iInputsFormContactsUpdate {
    full_name: string | undefined;
    email: string | undefined;
    telefone: string| undefined;
}

export interface CardContacts{
    id:number;
    full_name: string;
    email: string;
    telefone: string;
    createdAt:string;
}


export const Cards = ()=>{
    const {contacts,setModal,modal,getDatasFormContactsUpdate,getContactById,contactsUpdate, deleteContact} = useContext(UserContext);

    

    const schema = yup.object().shape({
        full_name: yup.string().optional(),
        email: yup.string().email('Email invalido').optional(),
        telefone: yup.string().optional()
      })

      const { register, handleSubmit, formState: { errors } } = useForm<iInputsFormContactsUpdate>({
        resolver: yupResolver(schema)
      });

    const submitFunction = (data:iInputsFormContactsUpdate) => {
        getDatasFormContactsUpdate(data,contactsUpdate.id);
    }

    return(
    <>
            <CardContainer>
            {
                contacts.map(contact=>
                (
                    <Card>
                        <strong>Nome:</strong>{contact.full_name}<br/>
                        <strong>Email:</strong> {contact.email}<br/>
                        <strong>Telefone:</strong> {contact.telefone}<br/><br/>
                        <button onClick={()=>[setModal(true), getContactById(contact.id)]}>Editar</button> <button onClick={()=>deleteContact(contact.id)}>Deletar</button> 
                    </Card>
                ))
            }
        </CardContainer>
            {
                modal &&
            
            
            <ContainerModal>
            <FormModal onSubmit={handleSubmit(submitFunction)}>
                <HeaderModal>
                    <h1>Atualizar Contato</h1>
                    <button onClick={()=>setModal(false)}>X</button>
                </HeaderModal>
                    <MainModal>

                    <label>Nome Completo</label>
                    
                    <Input type='text' nameInput='full_name' register={register} error={errors.full_name?.message}/><br/>
                    

                    <label>Email</label>
                    <Input type='email' nameInput='email'   register={register} error={errors.email?.message}/><br/>

                    <label>Telefone</label>
                    <Input type='number'    nameInput='telefone' register={register} error={errors.telefone?.message}/><br/>
                    <ButtonStyled type='submit'>Atualizar Contato</ButtonStyled> <br/>

                    </MainModal>

                
            </FormModal>
            
        </ContainerModal>
                
        }


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