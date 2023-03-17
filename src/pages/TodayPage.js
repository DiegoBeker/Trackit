import styled from "styled-components";
import NavBar from "../components/NavBar"
import BottomMenu from "../components/BottomMenu"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../cotexts/UserContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { weekDays } from "../constants/weekdays"
import HabitOfTheDay from "../components/HabitOfTheDay";

export default function TodayPage() {
    const [date, setDate] = useState({ weekday: "", day: "", month: "" });
    const [list, setList] = useState(undefined);
    const [refresh,setRefresh] = useState(false);
    const user = useContext(UserContext);
    console.log(list);

    useEffect(() => {
        const today = new Date(Date.now());
        setDate({ weekday: today.getUTCDay(), day: today.getUTCDate(), month: today.getMonth() })
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        axios.get(`${BASE_URL}/habits/today`, config)
            .then((response) => setList(response.data))
            .catch((err) => console.log(err.response.data.message));
        // eslint-disable-next-line
    }, [refresh]);

    function checkHabit(id){
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const body = [];
        axios.post(`${BASE_URL}/habits/${id}/check`, body, config)
        .then((response) => {
            console.log(response)
            setRefresh(!refresh)
        })
        .catch((err) => console.log(err));
    }

    function uncheckHabit(id){
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const body = [];
        axios.post(`${BASE_URL}/habits/${id}/uncheck`, body, config)
        .then((response) => {
            console.log(response)
            setRefresh(!refresh)
        })
        .catch((err) => console.log(err));
    }

    if (list === undefined) {
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
            <ProgressInfo>
                <h2>{weekDays[date.weekday]}, {date.day}/{(date.month + 1) > 9 ? (date.month + 1) : "0" + (date.month + 1)}</h2>
                <span>Nenhum hábito concluído ainda</span>
            </ProgressInfo>
            <HabitsContainer>
                {list.map((l) => 
                    (<HabitOfTheDay
                        key={l.id}
                        id={l.id}
                        name={l.name}
                        done={l.done}
                        currentSequence={l.currentSequence}
                        highestSequence={l.highestSequence}
                        checkHabit={checkHabit}
                        uncheckHabit={uncheckHabit}
                    />)
                )}
            </HabitsContainer>
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
    background: #F2F2F2;
    *{
        font-family: 'Lexend Deca', sans-serif;
    }
`;

const ProgressInfo = styled.div`
    width: 100%;
    margin: 20px 0;
    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    span{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`;

const HabitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;