import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export default function HabitOfTheDay({ id, name, done, currentSequence, highestSequence, checkHabit, uncheckHabit }) {
    return (
        <HabitOTD data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name">{name}</h3>
                <p data-test="today-habit-sequence">
                    Sequência atual: <Current done={done}>{currentSequence !== 1 ? currentSequence + " dias" : currentSequence + " dia"}</Current>
                </p>
                <p data-test="today-habit-record">
                    Seu recorde: <Highest currentSequence={currentSequence} highestSequence={highestSequence} done={done}>
                        {highestSequence !== 1 ? highestSequence + " dias" : highestSequence + " dia"}
                    </Highest>
                </p>
            </div>
            <CheckButton
                data-test="today-habit-check-btn"
                done={done}
                onClick={() => {
                    if (done) {
                        uncheckHabit(id);
                    } else {
                        checkHabit(id);
                    }
                }}
            >
                <FaCheck />
            </CheckButton>
        </HabitOTD>
    );
}

const CheckButton = styled.div`
    width: 69px;
    height: 69px;
    background: ${({ done }) => done ? "#8FC549" : "#EBEBEB"};
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

const HabitOTD = styled.div`
    height: 94px;
    width: 100%;
    padding: 12px 14px;
    margin: 5px 0;
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
`;

const Current = styled.span`
    color: ${({ done }) => done ? "#8FC549" : "#666666"};
`;
const Highest = styled.span`
    color: ${({ highestSequence, currentSequence, done }) => done && highestSequence === currentSequence && highestSequence > 0 ? "#8FC549" : "#666666"};
`;