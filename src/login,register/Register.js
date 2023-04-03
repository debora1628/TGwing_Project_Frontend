import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Box = styled.div`
    width: 800px;
    height : 600px;
    box-shadow: 0 2px 5px 0 #bcbcbc;
    border-radius : 10px;
    padding : 30px;
    margin: 100px auto;
`
const RegiButton = styled.div`
    width : 200px;
    height : 50px;
    border-radius : 10px;
    border: 1px solid black;
    cursor: pointer;
    margin : 300px auto;
`

function Register() {
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);

    const nameRef = useRef(null);
    const addRef = useRef(null);

    const nameChange = () => {
        setName(String(name.current.value));
        
    };
    const addChange = () => {
        setAddress(String(address.current.value));
    };

    //닉네임중복확인//

    return(
        <Box>
                <p>이름</p>
                <p>휴대폰</p>
                <p>닉네임</p>
                <input
                    ref={nameRef}
                    onChange={nameChange}
                    placeholder="닉네임"
                />
                <p>주소</p>
                
                <p>프로필 사진 추가</p>
 
            <RegiButton>회원가입</RegiButton>
        </Box>
    )
}

export default Register;