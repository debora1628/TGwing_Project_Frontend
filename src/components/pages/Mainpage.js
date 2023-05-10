import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import Button from "../ui/button";

const Container = styled.div`
    text-align: center;
    height: 100%;
    width = 100px;
    vertical-align: middle;
    position: static;
    height: 100%;
`;

function Mainpage() {
    return(
    <div>
        <Container>
            <Button>
                검색
            </Button>
            <Button>
                상품 카테고리
            </Button>
            <Button>
                거래 방식
            </Button>
            <Button>
                거래하기(게시글목록)
            </Button>
            <Button>
                채팅
            </Button>
            <Button>
                마이페이지
            </Button>

        </Container>
    </div>
    )
};

export default Mainpage;