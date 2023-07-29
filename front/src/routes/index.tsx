import {Route, Routes} from 'react-router-dom';
import {Register} from '../pages/Register';
import {Login} from '../pages/Login/index';
import {DashBoard} from '../pages/Dashboard';
import {Perfil} from '../pages/Perfil';
import {Contato} from '../pages/Contato';
import {Cards} from '../pages/Cards';

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<DashBoard/>}>

                <Route index  element={<Cards/>}/>
                <Route path='/dashboard/perfil' element={<Perfil/>}/>
                <Route path='/dashboard/contato' element={<Contato/>}/>

            </Route>

        </Routes>

    )
}