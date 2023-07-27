import {Route, Routes} from 'react-router-dom';
import {Register} from '../pages/Register';
import {Login} from '../pages/Login/index';


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>

    )
}