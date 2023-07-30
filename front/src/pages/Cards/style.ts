import {styled} from 'styled-components';

export const CardContainer = styled.div`

    position:absolute;
    left:15%;
    top:30%;
    width:850px;
    padding:30px;
    margin:auto;
    display:flex;
    justify-content: space-evenly; 
    flex-wrap: wrap;
    justify-content: left;
    gap:15px;
`
export const Card = styled.ul`

    width:190px;
    height:200px;
    background:white;
    border-radius:10px;
    padding:10px;
    width: calc(33.33% - 10px);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 25px;

    button{
        padding:5px;
        cursor: pointer;
    }

`

export const ContainerModal = styled.div`

    width:100%;
    height:100%;    
    background:white;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center; 
    padding:auto;
`

export const FormModal = styled.form`

    width:650px;
    height:400px;
    background: white;
    margin-left:330px;
    margin-top:130px;
    border-radius: 25px;
    display: flex;
    justify-content: space-around; 
    flex-direction: column;
    justify-content: flex-start;
    gap:50px;
`;

export const HeaderModal = styled.header`

    width:100%;
    height:50px;
    border-radius: 25px 25px 0 0;
    padding:10px;
    display: flex;
    justify-content: space-between; 
    font-family: Arial, Helvetica, sans-serif;

    button{
        width:50px;
        font-size:15px;
        cursor: pointer;
        right: 0px;
        border:none
        padding:15px;
    }

`

export const MainModal = styled.main`

    width:550px;
    height:50px;
    padding:10px;
    margin-left:15px;
`