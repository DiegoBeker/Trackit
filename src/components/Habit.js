import styled from "styled-components";
import { IoIosTrash } from "react-icons/io";
import Daycard from "./DayCard";

export default function Habit({ id, name, days, deleteHabit }) {

    function deleteCard() {
        if (window.confirm("Deseja deletar o Hábito?")) {
            deleteHabit(id);
        }
    }

    return (
        <HabitCard data-test="habit-container">
            <p data-test="habit-name">{name}</p>
            <WeekContainer>
                <Daycard id={0} name="D" disabled={true} days={days} />
                <Daycard id={1} name="S" disabled={true} days={days} />
                <Daycard id={2} name="T" disabled={true} days={days} />
                <Daycard id={3} name="Q" disabled={true} days={days} />
                <Daycard id={4} name="Q" disabled={true} days={days} />
                <Daycard id={5} name="S" disabled={true} days={days} />
                <Daycard id={6} name="S" disabled={true} days={days} />
            </WeekContainer>
            <DeleteIcon onClick={deleteCard} data-test="habit-delete-btn">
                <IoIosTrash />
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
`;
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
`;