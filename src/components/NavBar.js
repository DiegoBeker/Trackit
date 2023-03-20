import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../cotexts/UserContext";

export default function NavBar(){
    const user = useContext(UserContext);

    if(user === undefined){
        return(
            <NavBarContainer data-test="header">
            <h1>Trackit</h1>
        </NavBarContainer>
        );
    }
    
    return(
        <NavBarContainer data-test="header">
            <h1>Trackit</h1>
            <ProfilePicture src={user.image} alt="Picture"/>
        </NavBarContainer>
    );
}

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px;
    height: 70px;
    width: 100vw;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    h1{
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
    }
`;

const ProfilePicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`