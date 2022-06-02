
import styled from 'styled-components/macro';


export const Container  = styled.div`
 color:#fff;
 display:flex;
 flex-direction:column;
 text-align:center;
 border-bottom:8px solid #222;
 padding:165px 45px;

 @media(max-width:1000px){
     padding:70px 45px;
 }
`;

export const Title = styled.h1`
    font-size:50px;
    font-weight:500px;
    max-width:640px;
    margin:auto;

    @media(max-width:1000px){
        font-size:35px;
    }
`;

export const SubTitle = styled.h2`
    font-weight:normal;
    font-size:24px;
    max-width:640px;
    margin:auto;

    @media(max-width:1000px){
        font-size:15px;
    }
}`;