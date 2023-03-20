import styled from "styled-components";

export default function Daycard({ id, name, disabled, days, setDays }) {

    function toggleDay() {
        if (!days.includes(id)) {
            setDays([...days, id]);
        } else {
            setDays(days.filter((d) => d !== id));
        }
    }

    return (
        <DayButton data-test="habit-day" id={id} days={days} disabled={disabled} onClick={toggleDay}>{name}</DayButton>
    );
}

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: ${(props) => props.days.includes(props.id) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid ${(props) => props.days.includes(props.id) ? "#CFCFCF" : "#D4D4D4"};
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.days.includes(props.id) ? "#FFFFFF" : "#D4D4D4"};
`;