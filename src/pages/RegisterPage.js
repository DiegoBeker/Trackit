import styled from "styled-components";
import logo from "../assets/logo.png"

export default function RegisterPage(){
    return (
        <PageContainer>
            <img src={logo} alt="track it" />
            <Form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="senha"></input>
                <input type="text" placeholder="nome"></input>
                <input type="url" placeholder="foto"></input>
                <button type="submit">Cadastrar</button>
            </Form>
            <p>Já tem um conta? Faça login!</p>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    img{
        width: 180px;
        height: 178px;
        margin-top: 68px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 20px;
    }
`;

const Form = styled.form`
    width: 303px;
    input{
        width: 303px;
        height: 45px;
        margin: 6px 0px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        padding: 0 11px;
    }
    button{
        width: 303px;
        height: 45px;
        margin: 6px 0px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
    }
`;