import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function BottomMenu() {
    return (
        <MenuContainer>
            <ButtonsContainer>
                <Link to="/habitos">
                <span>Habitos</span>
                </Link>
                <Link to="/hoje">
                <CicleProgress>
                    <CircularProgressbar
                        value={33}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent",
                        })}
                    />
                </CicleProgress>
                </Link>
                <Link to="/historico">
                <span>Histórico</span>
                </Link>
            </ButtonsContainer>
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background: #FFFFFF;
    span{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
    a{
        text-decoration: none;
    }
`;

const ButtonsContainer = styled.div`
    height: 70px;
    width: 100vw;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const CicleProgress = styled.div`
    width: 91px;
    height: 91px;
    position: absolute;
    top: -30px;
    left: calc(50vw - 46px);
`