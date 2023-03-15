import styled from "styled-components";
import Daycard from "./DayCard";


export default function AddHabit(){
    return(
        <AddContainer>
            <input placeholder="nome do hábito"/>
            <WeekContainer>
                <Daycard name ="D"/>
                <Daycard name ="S"/>
                <Daycard name ="T"/>
                <Daycard name ="Q"/>
                <Daycard name ="Q"/>
                <Daycard name ="S"/>
                <Daycard name ="S"/>
            </WeekContainer>
            <ButtonContainer>
                <CancelButton>Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
            </ButtonContainer>
        </AddContainer>
    );
}

const AddContainer = styled.div`
    height: 180px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px 18px;
    input{
        width: 303px;
        height: 45px;
        margin: 6px 0px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        padding: 0 11px;
        color: #666666;
        &::placeholder{
            color: #DBDBDB;
        }
        &:disabled{
            background-color: #F2F2F2;
        }
    }
`
const WeekContainer = styled.div`
    display: flex;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    margin-top: 30px;
    button{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }
`;

const CancelButton = styled.button`
    width: 69px;
    height: 20px;
    margin: 0 23px;
    color: #52B6FF;
    background: #FFFFFF;
`
const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
`
