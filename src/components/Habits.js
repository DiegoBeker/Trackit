import styled from "styled-components";
import Habit from "./Habit";


export default function Habits({habits}){
    return(
        <HabitContainer>
            {habits.map((h) => <Habit key={h.id} id={h.id} name={h.name} days={h.days}/>)}
        </HabitContainer>
    );
}

const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;