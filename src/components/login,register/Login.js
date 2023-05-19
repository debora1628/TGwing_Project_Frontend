import { useNavigate, NavLink } from "react-router-dom";
import {React, useState} from "react";
import {KAKAO_AUTH_URL} from "./OAuth.js";
import kakaologo from ".//kakaotalk.png";
import "./logreg.css";
import axios from "axios";


function Login() {
    const navigate = useNavigate();
    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");
    const onClick = () => {
        navigate(`/register`);
    }
    
    const onClickLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://163.180.118.157:8000/user/login',{
                "user_id": Id,
                "user_password": Pw
            });
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;
            
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken',refreshToken);
            if(response === 200){
                console.log("로그인 완료")
                accessToken();
                refreshToken();
                navigate(`/mainpage`);
            }else if(response === 401) {
                console.log("일치하는 로그인 데이터가 없습니다.")
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
            <div className="box-container">
                <div className="-boxButton1">
                    <NavLink to = {KAKAO_AUTH_URL}>
                        <img id = "kakao" src={kakaologo} height="25" width="25" padding="1"/>
                        카카오톡으로 로그인하기
                    </NavLink>
                </div>

                <div className="box-Button2" onClick={onClick}>회원가입하기</div>
                <div className="box-loginBox">
                    <div>
                        <input
                            className="input"
                            placeholder="아이디"
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
                        ></input>
                        <input
                            type="password"
                            className="input"
                            placeholder="패스워드"
                            onChange={(e) => {
                                setPw(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <button className="loginbutton"
                                onClick={onClickLogin}
                        >로그인</button>
                    </div>
                    
                </div>
            </div>

    );
}

export default Login;