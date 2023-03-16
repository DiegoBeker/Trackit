import { useState } from "react";
import styled from "styled-components";

export default function Daycard({id, name, disabled, days, setDays, selected}){
    
    const [isSelected,setIsSelected] = useState(selected);
    
    function toggleDay(){
        setIsSelected(!isSelected);
        if(!days.includes(id)){
            setDays([...days, id]);
        }else{
            setDays(days.filter((d)=> d !==id))
        }
    }

    return(
        <DayButton isSelected={isSelected} disabled={disabled} selected={selected} onClick={toggleDay}>{name}</DayButton>
    );
}

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: ${(props) => props.isSelected || props.selected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid ${(props) => props.isSelected || props.selected ? "#CFCFCF" : "#D4D4D4"};
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.isSelected || props.selected ? "#FFFFFF" : "#D4D4D4"};
`