import {Route, Routes} from 'react-router-dom';
import {Register} from '../pages/Register';


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path='/register' element={<Register/>}/>
        </Routes>

    )
}