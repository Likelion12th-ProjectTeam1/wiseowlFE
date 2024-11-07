import styled from "styled-components";
import { useState } from "react";

const HeaderContianer = styled.div`
    width : 390px;
    height : 250px;
    display : flex;
    flex-direction: column;
    bottom : 450px;
    background: rgba(245, 245, 245, 0.50);

`

const DayContainer = styled.div`
    width : 100%;
    height : 60%;
    display: flex;
    flex-direction: row;
`

const CountContainer = styled.div`
    width : 100%;
    height : 10%;
    display: flex;
    flex-direction: row;
`
const DayText = styled.h1`
    color: #00191F;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left : 50px;
    margin-top: 70px;
`

const NoticeImg = styled.div`
    width: 150px;
    height: 150px;
    background-image: url("/img/NoticeIcon.png"); 
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    position : relative;
    left : 160px;
    bottom: 130px;
`;

const NoticeText = styled.h3`
    color: #000;
    font-family: Inter;
    font-size: 12.318px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left : 50px;
`

const Countnotice = styled.div`
    width: 35px;
    height : 15px;
    border-radius: 9.855px;
    background: #5D96E8;
    color : #FFF;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 15px;
`

export default function NoticeHeader(){

    const Today = new Date();

    const formattedYear = `${Today.getFullYear()}년`;
    const formattedDate = `${Today.getMonth() + 1}월 ${Today.getDate()}일`

    const [count , setCount] = useState("5");

    return(
        <HeaderContianer>
            <DayContainer>
                <DayText>
                    {formattedYear}<br/>
                    {formattedDate}
                    <NoticeImg/>
                </DayText>
            </DayContainer>
            <CountContainer>
                <NoticeText>새 공지사항을 확인해보세요!</NoticeText>
                <Countnotice>{count}</Countnotice>
            </CountContainer>
        </HeaderContianer>
    );
}