import styled from "styled-components";
import Habit from "./Habit";

export default function Habits({ habits, deleteHabit }) {

    if (habits === undefined) {
        return <></>;
    }

    return (
        <HabitContainer>
            {habits.map((h) => <Habit key={h.id} id={h.id} name={h.name} days={h.days} deleteHabit={deleteHabit} />)}
        </HabitContainer>
    );
}

const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;