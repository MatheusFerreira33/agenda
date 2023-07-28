import { Outlet } from 'react-router-dom';
import {Header} from '../../components/Header';

export const DashBoard = ()=>{

    return(
        <>
          <Header/>
          <Outlet />  
        </>
    )
}