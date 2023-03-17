import styled from "styled-components";
import NavBar from "../components/NavBar"
import BottomMenu from "../components/BottomMenu"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../cotexts/UserContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { weekDays } from "../constants/weekdays"
import {FaCheck} from "react-icons/fa"

export default function TodayPage() {
    const [date, setDate] = useState({ weekday: "", day: "", month: "" });
    const user = useContext(UserContext);
    console.log(date);

    useEffect(() => {
        const today = new Date(Date.now());
        console.log(today);
        setDate({ weekday: today.getUTCDay(), day: today.getUTCDate(), month: today.getMonth() })
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        axios.get(`${BASE_URL}/habits/today`, config)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err.response.data.message));
        // eslint-disable-next-line
    }, [])

    return (
        <PageContainer>
            <NavBar />
            <ProgressInfo>
                <h2>{weekDays[date.weekday]}, {date.day}/{(date.month + 1) > 9 ? (date.month + 1) : "0" + (date.month + 1)}</h2>
                <span>Nenhum hábito concluído ainda</span>
            </ProgressInfo>
            <HabitsContainer>
                <HabitOfTheDay>
                    <div>
                        <h3>Ler 1 capítulo de livro</h3>
                        <p>Sequência atual: <span>3 dias</span></p>
                        <p> Seu recorde: 5 dias</p>
                    </div>
                    <CheckButton>
                        <FaCheck/>
                    </CheckButton>
                </HabitOfTheDay>
            </HabitsContainer>
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

`
const CheckButton = styled.div`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 30px;
        color: #FFFFFF;
    }
`;

const HabitOfTheDay = styled.div`
    height: 94px;
    width: 100%;
    padding: 12px 14px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    color: #666666;
    h3{
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
    }
    p{
        font-size: 13px;
        line-height: 16px;
    }
`