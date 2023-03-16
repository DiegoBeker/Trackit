import styled from "styled-components";
import {IoIosTrash} from "react-icons/io"
import Daycard from "./DayCard";


export default function Habit({id,name,days}){
    console.log(days);
    return(
        <HabitCard>
            <p>{name}</p>
            <WeekContainer>
                <Daycard id={1} name="D" disabled={true} selected={days.includes(1)}/>
                <Daycard id={2} name="S" disabled={true} selected={days.includes(2)}/>
                <Daycard id={3} name="T" disabled={true} selected={days.includes(3)}/>
                <Daycard id={4} name="Q" disabled={true} selected={days.includes(4)}/>
                <Daycard id={5} name="Q" disabled={true} selected={days.includes(5)}/>
                <Daycard id={6} name="S" disabled={true} selected={days.includes(6)}/>
                <Daycard id={7} name="S" disabled={true} selected={days.includes(7)}/>
            </WeekContainer>
            <DeleteIcon>
                <IoIosTrash/>
            </DeleteIcon>
        </HabitCard>
    );
}

const HabitCard = styled.div`
    height: 91px;
    width: 100%;
    margin: 5px 0;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 12px 14px;
    position: relative;
    p{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`
const WeekContainer = styled.div`
    display: flex;
    margin: 8px 0;
`;

const DeleteIcon = styled.div`
    position: absolute;
    top:12px;
    right: 8px;
    font-size: 24px;
    color: #666666;
`