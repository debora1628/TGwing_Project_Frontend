import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Buttonbox = styled.div`
    width: 400px;
    height : 100px;
    box-shadow: 0 0 3px 0 #bcbcbc;
    border-radius : 10px;
    padding : 30px;
    margin : 300px auto;
`
const Button = styled.div`
    width: 200px;
    height : 30px;
    border: 1px solid black;
    cursor : pointer;
    padding: 10px;
`

function Login() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/register`);
    }

    return (
            <Buttonbox>
                <Button>카카오톡으로 로그인하기</Button>
                <Button onClick={onClick}>카카오톡으로 회원가입하기</Button>
            </Buttonbox>

    )
}

export default Login;