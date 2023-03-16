import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AddHabit from "../components/AddHabit";
import BottomMenu from "../components/BottomMenu";
import Habits from "../components/Habits";
import NavBar from "../components/NavBar";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../cotexts/UserContext";

export default function HabitPage() {
    const [showAddWindow, setShowAddWindow] = useState(false);
    const [habits, setHabits] = useState(undefined);
    const user = useContext(UserContext);
    console.log(habits);

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        axios.get(`${BASE_URL}/habits`, config)
        .then((response) => setHabits(response.data))
        .catch((err) => console.log(err.response.data.message));
    },[showAddWindow])

    if(habits === undefined){
        return <>Carregando</>
    }

    return (
        <PageContainer>
            <NavBar />
            <HabitMenu>
                <h2>Meus Hábitos</h2>
                <button onClick={() => setShowAddWindow(true)}>+</button>
            </HabitMenu>
            <AddHabit showAddWindow={showAddWindow} setShowAddWindow={setShowAddWindow} />
            {
                habits.length === 0 ?
                    <NoHabitsMessage>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </NoHabitsMessage>
                    :
                    <Habits habits={habits} />
            }
            <BottomMenu />
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