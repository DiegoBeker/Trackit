import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }
            axios.get(`${BASE_URL}/habits`, config)
                .then((response) => setHabits(response.data))
                .catch((err) => console.log(err.response.data.message));
        } else {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [refresh])

    function deleteHabit(id) {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        axios.delete(`${BASE_URL}/habits/${id}`, config)
            .then((response) => setRefresh(!refresh))
            .catch((err) => console.log(err));
    }

    if (habits === undefined) {
        return (
            <PageContainer>
                <NavBar />
                <BottomMenu />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <NavBar />
            <HabitMenu>
                <Container>
                    <h2>Meus Hábitos</h2>
                    <AddButton data-test="habit-create-btn" onClick={() => setShowAddWindow(true)}>+</AddButton>
                </Container>
                <AddHabit showAddWindow={showAddWindow} setShowAddWindow={setShowAddWindow} refresh={refresh} setRefresh={setRefresh} />
            </HabitMenu>
            {
                habits.length === 0 ?
                    <NoHabitsMessage>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </NoHabitsMessage>
                    :
                    <Habits habits={habits} deleteHabit={deleteHabit} />
            }
            <BottomMenu />
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
`;

const NoHabitsMessage = styled.p`
    margin-top: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`

const AddButton = styled.button`
        width: 40px;
        height: 35px;
        font-weight: 400;
        font-size: 23px;
        color: #FFFFFF;
        background: #52B6FF;
        border-radius: 5px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`