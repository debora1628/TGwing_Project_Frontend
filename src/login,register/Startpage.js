import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import {KAKAO_AUTH_URL} from "./OAuth";
import kakaologo from ".//kakaotalk.png";
import "../App.css";

//Login.js ==> Startpage.js로 바꿨어용
//원래 하려던 카카오 로그인 망했으니 로그인하는거 새로 파야 할것 같아서
//Loginpage를 새로 파고 원래 있던 Login.js를 startpage로 수정했습니당
//이외에도 수정한거 더 있을..수도 있으니 나중에 천천히 보시고 모르는거 있음 물어보세용


const Buttonbox = styled.div`
    width: 400px;
    height : 220px;
    box-shadow: 0 0 3px 0 #bcbcbc;
    border-radius : 10px;
    padding : 20px;
    margin : 250px auto;
    align-items: center;
`
const Button1 = styled.button`
    width: 200px;
    height : 70px;
    border: 1px solid black;
    cursor : pointer;
    padding: 10px;
    display : block;
    text-align : center;
    vertical-align : middle;
    font-size : 12px;
    align-items: center;
    margin-left : auto;
    margin-right: auto;
`
const Button2 = styled.button`
    width: 200px;
    height : 70px;
    border: 1px solid black;
    cursor : pointer;
    padding: 10px;
    display : block;
    align-items: center;
    margin-left : auto;
    margin-right: auto;
`
const Button3 = styled.button`
    width: 200px;
    height : 70px;
    border: 1px solid black;
    cursor : pointer;
    padding: 10px;
    display : block;
    align-items: center;
    margin-left : auto;
    margin-right: auto;
`

function Start() {
    const navigate = useNavigate();
    const onClick1 = () => {
        navigate(`/register`);
    }
    const onClick2 = () => {
        navigate(`/loginpage`);
    }
    //navigate 안에는 무조건 소문자만 넣기

    return (
            <Buttonbox>
                <Button1>
                    <NavLink to = {KAKAO_AUTH_URL}>
                        <img id = "kakao" src={kakaologo} height="25" width="25" padding="1"/>
                        카카오톡으로 로그인하기
                    </NavLink>
                </Button1>

                <Button2 onClick={onClick1}>회원가입하기</Button2>
                <Button3 onClick={onClick2}>로그인하기</Button3>
            </Buttonbox>

    )
}

export default Start;