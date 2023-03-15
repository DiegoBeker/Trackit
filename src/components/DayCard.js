import { useState } from "react";
import styled from "styled-components";

export default function Daycard({name}){
    const [isSelected,setIsSelected] = useState(false);
    return(
        <DayButton isSelected={isSelected} onClick={()=> setIsSelected(!isSelected)}>{name}</DayButton>
    );
}

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid ${(props) => props.isSelected ? "#CFCFCF" : "#D4D4D4"};;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.isSelected ? "#FFFFFF" : "#D4D4D4"};
`