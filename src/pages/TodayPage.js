import styled from "styled-components";
import NavBar from "../components/NavBar"
import BottomMenu from "../components/BottomMenu"

export default function TodayPage(){
    return(
        <PageContainer>
            <NavBar/>
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