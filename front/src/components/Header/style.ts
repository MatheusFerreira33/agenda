import {styled} from 'styled-components';

export const HeaderStyled = styled.ul`

    width: 100%;
    heigth:250px;
    background:white;
    padding:30px;
    font-size:30px;
    display:flex;
    justify-content: space-evenly;

    li{
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        font-style: none;
    }

    li a {
        text-decoration: none;
        color:black;
      }

`