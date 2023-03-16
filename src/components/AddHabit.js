import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../cotexts/UserContext";
import Daycard from "./DayCard";

export default function AddHabit({ showAddWindow, setShowAddWindow }) {
    const [disabled, setDisabled] = useState(false);
    const [days, setDays] = useState([]);
    const [name, setName] = useState("");
    const [waiting,setWaiting] = useState(false);
    const user = useContext(UserContext);

    function postHabit() {
        const body = {name:name, days: days}
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        setWaiting(true);
        setDisabled(true);
        console.log(body);
        axios.post(`${BASE_URL}/habits`, body, config)
        .then((response) => {
            console.log(response.data)
            setShowAddWindow(false);
            setWaiting(false);
            setDisabled(false);
            setDays([])
        })
        .catch((err) => {
            setDisabled(false);
            setWaiting(false);
            alert(err.response.data.message);
        })
    }

    return (
        <AddContainer data-test="habit-create-container" showAddWindow={showAddWindow}>
            <input data-test="habit-name-input" placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} />
            <WeekContainer>
                <Daycard id={0} name="D" disabled={disabled} days={days} setDays={setDays} />
                <Daycard id={1} name="S" disabled={disabled} days={days} setDays={setDays} />
                <Daycard id={2} name="T" disabled={disabled} days={days} setDays={setDays} />
                <Daycard id={3} name="Q" disabled={disabled} days={days} setDays={setDays} />
                <Daycard id={4} name="Q" disabled={disabled} days={days} setDays={setDays} />
                <Daycard id={5} name="S" disabled={disabled} days={days} setDays={setDays} />
                <Daycard id={6} name="S" disabled={disabled} days={days} setDays={setDays} />
            </WeekContainer>
            <ButtonContainer>
                <CancelButton data-test="habit-create-cancel-btn" onClick={() => setShowAddWindow(false)}>Cancelar</CancelButton>
                <SaveButton
                    data-test="habit-create-save-btn"
                    onClick={postHabit}
                >
                    {
                        waiting ?
                            <ThreeDots
                                height="40"
                                width="40"
                                radius="26"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                            :
                            "Salvar"
                    }
                </SaveButton>
            </ButtonContainer>
        </AddContainer>
    );
}

const AddContainer = styled.div`
    display: ${(props) => props.showAddWindow ? "initial" : "none"};
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
    display: flex;
    justify-content: center;
    align-items: center;
`
