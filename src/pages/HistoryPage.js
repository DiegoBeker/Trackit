import styled from "styled-components";
import NavBar from "../components/NavBar"
import BottomMenu from "../components/BottomMenu"

export default function HistoryPage(){
    return(
        <PageContainer>
            <NavBar/>
            <Message>
                <h2>Histórico</h2>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </Message>
            <BottomMenu/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    min-height: calc(100vh - 140px);
    margin: 70px 0px;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    *{
        font-family: 'Lexend Deca', sans-serif;
    }
`;

const Message = styled.div`
    width: 100%;
    margin: 20px 0;
    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    span{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;