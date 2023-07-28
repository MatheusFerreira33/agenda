import { Link } from 'react-router-dom';
import {HeaderStyled} from './style';

export const Header = ()=>{

    return(
        <HeaderStyled>
            <li><Link to={'/dashboard'}>Home</Link></li>
            <li><Link to={'/dashboard/perfil'}>Perfil</Link></li>
            <li><Link to={'/dashboard/contato'}>Criar Contato</Link></li>
            <li>logout</li>
        </HeaderStyled>
    )
}