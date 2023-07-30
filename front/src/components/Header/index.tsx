import { Link } from 'react-router-dom';
import {HeaderStyled} from './style';
import {useContext} from 'react';
import {UserContext} from '../../providers/UserContext';
 
export const Header = ()=>{

    const {logout} = useContext(UserContext);

    return(
        <HeaderStyled>
            <li><Link to={'/dashboard'}>Home</Link></li>
            <li><Link to={'/dashboard/perfil'}>Perfil</Link></li>
            <li><Link to={'/dashboard/contato'}>Criar Contato</Link></li>
            <li onClick={()=>logout()}>logout</li>
        </HeaderStyled>
    )
}