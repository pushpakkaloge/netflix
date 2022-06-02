
import styled from 'styled-components/macro';


export const Container = styled.div`
    display:flex;
`;
export const Inner = styled.div`
    display:flex;
    padding:70px 45px;
    flex-direction:column;
    max-width:815px;
    margin:auto;
`;

export const Item = styled.div`
    max-width:700px;
    color:#fff;
    margin:auto;
    margin-bottom:10px;
    width:100%;

    &:first-of-type{
        margin-top:3em;
    }
`;
export const Frame = styled.div``;

export const Header = styled.div`
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    margin-bottom:1px;
    font-size:26px;
    font-weight:normal;
    background:#303030;
    padding:0.8em 1.2em;
    user-select:none;
    align-items:center;

    img{
        filter: brightness(0) invert(1);
        width:24px;

        @media(max-width:600px){
            width:16px;
        }
    }

    @media(max-width:600px){
        font-size:16px;
    }

`;
export const Body = styled.div`
font-weight:normal;
background:#303030;
padding:0.8em 2.2em;
line-height:1.4;
text-align:justify;
`;

export const Title = styled.h1`
font-size:50px;
color:#fff;
line-height:1.1;
margin-bottom:8px;
text-align:center;

@media(max-width:600px){
    font-size:35px;
}
`;