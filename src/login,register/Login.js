import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import {KAKAO_AUTH_URL} from "./OAuth";
import kakaologo from ".//kakaotalk.png";
import "../App.css";

const Buttonbox = styled.div`
    display : flex;
    width: 400px;
    height : 100px;
    box-shadow: 0 0 3px 0 #bcbcbc;
    border-radius : 10px;
    padding : 30px;
    margin : 300px auto;
    align-items: center;
`
const Button1 = styled.button`
    width: 200px;
    height : 70px;
    border: 1px solid black;
    cursor : pointer;
    padding: 10px;
    display : flex;
    text-align : center;
    vertical-align : middle;
    font-size : 12px;
    align-items: center;
`
const Button2 = styled.button`
    width: 200px;
    height : 70px;
    border: 1px solid black;
    cursor : pointer;
    padding: 10px;
    display : block;
    align-items: center;
`



function Login() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/register`);
    }

    return (
            <Buttonbox>
                <Button1>
                    <NavLink to = {KAKAO_AUTH_URL}>
                        <img id = "kakao" src={kakaologo} height="25" width="25" padding="1"/>
                        카카오톡으로 로그인하기
                    </NavLink>
                </Button1>

                <Button2 onClick={onClick}>카카오톡으로 회원가입하기</Button2>
            </Buttonbox>

    )
}

export default Login;