import styled from "styled-components";
import AddHabit from "../components/AddHabit";
import BottomMenu from "../components/BottomMenu";
import NavBar from "../components/NavBar";

export default function HabitPage(){
    return(
        <PageContainer>
            <NavBar/>
            <HabitMenu>
                <h2>Meus Hábitos</h2>
                <button>+</button>
            </HabitMenu>
            <AddHabit/>
            <NoHabitsMessage>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsMessage>
            <BottomMenu/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    height: calc(100vh - 140px);
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

const HabitMenu = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        font-weight: 400;
        font-size: 23px;
        color: #FFFFFF;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
`;

const NoHabitsMessage = styled.p`
    margin-top: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`