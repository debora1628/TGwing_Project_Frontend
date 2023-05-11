import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { post, put, axios } from 'axios';
import { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken } from '././components/token/tokenstorage';

const Box = styled.div`
    width: 500px;
    height : 600px;
    box-shadow: 0 2px 10px 0 #bcbcbc;
    border-radius : 20px;
    padding : 30px;
    margin: 100px auto;
    text-align: center;
    position: relative;
`
const LoginButton = styled.div`
    width : 200px;
    height : 40px;
    box-shadow: 0 1px 0 0  #bdbdbd;
    border: none;
    cursor: pointer;
    margin : 300px auto;
    align-items: center;
    text-align : center;
    vertical-align : middle;
    font-size: 20px;

`

function Loginpage() {
    const navigate = useNavigate();

    const [ID, setID] = useState(null);
    const [PW, setPW] = useState(null);
    
    const IDRef = useRef(null);
    const PWRef = useRef(null);
   
    const IDChange = () => {
        setID(String(IDRef.current.value));
        
    };
    const PWChange = () => {
        setPW(String(PWRef.current.value));
        
    };
    const NavigateToMainPage = () => {
        navigate(`/Mainpage`)
    };

    const url = "http://localhost:3000/user/login";
    const data = {
        'user_id' : IDRef,
        'user_password' : PWRef
    }
    const config = {"Content-Type" : 'application/json'};

    const UserCheck = () => {
        post(url, data, config)
            .then(res => {
                console.log(res.message)
                setAccessToken(res.accessToken)
                console.log(getAccessToken)
                setRefreshToken(res.refreshToken)
                console.log(getRefreshToken)
                navigate(`/mainpage`)
            }).catch(err => console.log(err.message))

    }

    return(
        <Box>
            <p>아이디</p>
            <input
                ref={IDRef}
                onChange={IDChange}
                placeholder="아이디"
            ></input>
            <p>비밀번호</p>
            <input
                ref={PWRef}
                onChange={PWChange}
                placeholder="패스워드"
            ></input>

            <LoginButton onClick={UserCheck}>로그인</LoginButton>
        </Box>
    )
}

export default Loginpage;