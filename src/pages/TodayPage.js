import styled from "styled-components";
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../cotexts/UserContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { weekDays } from "../constants/weekdays";
import HabitOfTheDay from "../components/HabitOfTheDay";
import { useNavigate } from "react-router-dom";

export default function TodayPage({ setProgress }) {
    const [date, setDate] = useState({ weekday: "", day: "", month: "" });
    const [list, setList] = useState(undefined);
    const [refresh, setRefresh] = useState(false);
    const user = useContext(UserContext);
    const [total, setTotal] = useState(0);
    const [completed, setCompleted] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date(Date.now());
        setDate({ weekday: today.getUTCDay(), day: today.getUTCDate(), month: today.getMonth() });
        if (user) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            };
            axios.get(`${BASE_URL}/habits/today`, config)
                .then((response) => {
                    const listAux = response.data;
                    let count = 0;
                    setList(listAux);
                    setTotal(listAux.length);
                    listAux.forEach(element => {
                        if (element.done) {
                            count++;
                        }
                    });
                    setCompleted(count);
                    setProgress(Math.ceil(count / listAux.length * 100));
                })
                .catch((err) => console.log(err.response.data.message));
        }else{
            navigate("/");
        }
        // eslint-disable-next-line
    }, [refresh]);

    function checkHabit(id) {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const body = [];
        axios.post(`${BASE_URL}/habits/${id}/check`, body, config)
            .then(() => {
                setRefresh(!refresh);
            })
            .catch((err) => console.log(err));
    }

    function uncheckHabit(id) {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const body = [];
        axios.post(`${BASE_URL}/habits/${id}/uncheck`, body, config)
            .then(() => {
                setRefresh(!refresh);
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
            <ProgressInfo completed={completed}>
                <h2 data-test="today">{weekDays[date.weekday]}, {date.day}/{(date.month + 1) > 9 ? (date.month + 1) : "0" + (date.month + 1)}</h2>
                <span data-test="today-counter">{completed ? `${Math.ceil(completed / total * 100)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</span>
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
        color: ${({ completed }) => completed ? "#8FC549" : "#BABABA"};
    }
`;

const HabitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;