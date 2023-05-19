import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./logreg.css";

function Register() {
    const navigate = useNavigate();
    //초기값
    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");
    const [Name, setName] = useState("");
    //오류메세지
    const [IdMsg, setIdMsg] = useState("");
    const [PwMsg, setPwMsg] = useState("");
    const [NameMsg, setNameMsg] = useState("");
    //유효성
    const [isId, setIsId] = useState(false); 
    const [isPw, setIsPw] = useState(false);
    const [isName, setIsName] = useState(false);

    const onChangeId = (e) => {
        const currId = e.target.value;
        setId(currId)
        const IdRegExp = /^[a-zA-Z0-9]{3,12}$/;    
        if(!IdRegExp.test(currId)) {
            setIdMsg("영문, 숫자로 4자 이상 입력해주세요");
            setIsId(false);
        }else{
            setIdMsg("");
            setIsId(true);
        };
    };

    const onChangePw = (e) => {
        const currPw = e.target.value;
        setPw(currPw);
        const PwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,25}$/;    
        if(!PwRegExp.test(currPw)) {
            setPwMsg("영문, 숫자, 특수기호를 포함하여 8자 이상 입력해주세요");
            setIsPw(false);
        }else{
            setPwMsg("안전한 비밀번호 입니다");
            setIsPw(true);
        };
    };
    
    const onChangeName = (e) => {
        const currName = e.target.value;
        setName(currName);
        if(currName.length < 2 || currName.length > 8){
            setNameMsg("2자 이상 8자 이하의 닉네임을 입력해주세요");
            setIsName(false);
        }else{
            setNameMsg("사용 가능한 닉네임 입니다");
            setIsName(true);
        };
    };
    

    const RegiButton = () => {
       axios({
                method:"POST",
                url : "http://163.180.118.157:8000/user/register",
                data:{
                    "user_id": Id,
                    "user_password": Pw,
                    "user_name": Name
                }
            }).then((res)=>{
                    if(res.status === 200) {
                    console.log("회원가입 성공");
                    alert("회원가입이 완료되었습니다.");
                    navigate(`/mainpage`);
                }else if(res.status === 400){
                    console.log("필수적인 파라미터가 전달되지 않았습니다.");
                    alert("필수정보가 입력되지 않았습니다");
                }
                }).catch((error)=>{
                    console.log(error);
                })
    };

    return(
        <div className="Box">
            <p style={{marginLeft: '40px', marginTop:'40px'}}>아이디</p>
                <input
                    className="Input"
                    value = {Id}
                    onChange={onChangeId}
                    placeholder="아이디"
                />
                <p className="msg">{IdMsg}</p>
            <p style={{marginLeft: '40px'}}>비밀번호</p>
            <input
                className="Input"
                type="password"
                value={Pw}
                onChange= {onChangePw}
                placeholder="패스워드"
            />
            <p className="msg">{PwMsg}</p>

            <p style={{marginLeft: '40px'}}>닉네임</p>
            <input
                className="Input"
                value={Name}
                onChange={onChangeName}
                placeholder="닉네임"
            ></input>
            <p className="msg">{NameMsg}</p>
 
            <div className="RegiButton" onClick={RegiButton}>회원가입</div>
        </div>
    );
};

export default Register;