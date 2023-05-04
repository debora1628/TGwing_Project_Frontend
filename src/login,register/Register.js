import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
    width: 500px;
    height : 600px;
    box-shadow: 0 2px 10px 0 #bcbcbc;
    border-radius : 20px;
    padding : 30px;
    margin: 100px auto;
`
const RegiButton = styled.div`
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
const Idinput = styled.div`
    width: 300px;
    height : auto;
    border : 1px solid black;
`

function Register() {
    const navigate = useNavigate();

    const [ID, setID] = useState(null);
    const [PW, setPW] = useState(null);
    const [name, setName] = useState(null);
    
    const IDRef = useRef(null);
    const PWRef = useRef(null);
    const nameRef = useRef(null);
   
    const IDChange = () => {
        setID(String(IDRef.current.value));
        
    };
    const PWChange = () => {
        setPW(String(PWRef.current.value));
        
    };
    const nameChange = () => {
        setName(String(nameRef.current.value));
        
    };
    const NavigateToMainPage = () => {
        navigate("/MainPage")
    }

    //아이디중복확인//
    /*
    const users = 
    const [canID, setCanID] = useState(null);

    const IDCheck = () => {
        if (id !== null) {
        
    };
    */

    // const Register = () => {
    //     if (
    //         canID &&
    //         PW.length >= 8 &&
    //         name
    //     )
    //     {
    //         fetch(?)
    //     }
    //
    // }

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
            <p>닉네임</p>
            <input
                ref={nameRef}
                onChange={nameChange}
                placeholder="닉네임"
            ></input>
 
            <RegiButton onClick={NavigateToMainPage}>회원가입</RegiButton>
        </Box>
    )
}

export default Register;