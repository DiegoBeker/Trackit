import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png"
import {BASE_URL} from "../constants/urls"


export default function RegisterPage() {
    const [form,setForm] = useState({email:"", password:"", name:"", image:""});
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate();
    
    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    function register(event){
        event.preventDefault();
        const body = {...form};
        setWaiting(true);

        axios.post(`${BASE_URL}/auth/sign-up`,body)
        .then((response)=> {
            console.log(response);
            setWaiting(false);
            navigate("/");
        })
        .catch((err) => console.log(err));
    }
    return (
        <PageContainer>
            <img src={logo} alt="track it" />
            <Form onSubmit={register}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={waiting}
                />
                <input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    disabled={waiting}
                />
                <input
                    data-test="user-name-input"
                    type="text"
                    placeholder="nome"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={waiting}
                />
                <input
                    data-test="user-image-input"
                    type="url"
                    placeholder="foto"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    required
                    disabled={waiting}
                />
                <button data-test="signup-btn" disabled={waiting} type="submit">
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
                            "Cadastrar"
                    }
                </button>
            </Form>
            <Link data-test="login-link" to="/">
                <p>Já tem um conta? Faça login!</p>
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