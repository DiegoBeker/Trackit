import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BASE_URL } from "../constants/urls";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../cotexts/UserContext";

export default function LoginPage() {
    const [body, setBody] = useState({ email: "", password: "" });
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    function handleChange(event) {
        setBody({ ...body, [event.target.name]: event.target.value });
    }

    function login(event) {
        event.preventDefault();
        setWaiting(true);
        axios.post(`${BASE_URL}/auth/login`, body)
            .then((response) => {
                setUser(response.data);
                setWaiting(false);
                navigate("/hoje");
            })
            .catch(err => {
                setWaiting(false);
                alert(err.response.data.message);
            });
    }

    return (
        <PageContainer>
            <img src={logo} alt="track it" />
            <Form onSubmit={login}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={body.email}
                    onChange={handleChange}
                    required
                    disabled={waiting}
                />
                <input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    name="password"
                    value={body.password}
                    onChange={handleChange}
                    required
                    disabled={waiting}
                />
                <button data-test="login-btn" disabled={waiting} type="submit">
                    {
                        waiting
                            ?
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
                            "Entrar"
                    }
                </button>
            </Form>
            <Link data-test="signup-link" to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    img{
        width: 180px;
        height: 178px;
        margin-top: 68px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 20px;
    }
`;

const Form = styled.form`
    width: 303px;
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
        &::placeholder{
            color: #DBDBDB;
        }
        &:disabled{
            background-color: #F2F2F2;
        }
    }
    button{
        width: 303px;
        height: 45px;
        margin: 6px 0px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        &:disabled{
            opacity: 0.7;
        }
    }
`;