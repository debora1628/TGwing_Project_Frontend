import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setRefreshToken} from "../components/token/tokenstorage";
import axios from "axios";
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

    const url = "http://59.18.221.32:8000/user/login";
    const data = {
        'user_id' : ID,
        'user_password' : PW
    }
    const config = {"Content-Type" : 'application/json'};

    const UserCheck = () => {
        var data2 = {...data}
        console.log(ID)
        console.log(PW)
        axios.post(url, data2, config)
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
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