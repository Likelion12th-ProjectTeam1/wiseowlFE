import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const NoticeConatiner = styled.div`
    width : 390px;
    height : 300px;
    display : flex;
    flex-direction: column;
`

const NoticeHeader = styled.div`
    width : 100%;
    height : 10%;
    display: flex;
    flex-direction: row;
`

const Arrow = styled(IoIosArrowForward)`
    margin-top: 3px;
    margin-left: 8px;
`

const SemiText = styled.h3`
    color: #A7A8AB;
    font-family: Inter;
    font-size: 10.84px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin : 10px;
`

const NoticeTitle = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 17.246px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const NoticeContent = styled.div`
    width : 90%;
    height : 20%;
    border-radius: 9.855px;
    background: #FFF;
    box-shadow: 0px 0.493px 0.912px 0.985px rgba(0, 0, 0, 0.09);
    padding: 10px;
    margin : 5px;
    margin-left: 20px;
    &:hover {
    transform: scale(1.1);
  }
`

const ContentText = styled.h3`
    color: #000;
    font-family: Inter;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 11px;
    
`

export default function NoticeMain(){

    const[date,setDate] = useState("10월 2일")

    return(
        <NoticeConatiner>
            <NoticeHeader>
                <NoticeTitle>공지사항 알림</NoticeTitle>
                <Arrow />
            </NoticeHeader>
            <SemiText>{date}</SemiText>
            <NoticeContent>
                <ContentText>
                    [SW중심대학] 제6회 HUFS Code Festival 모집 공고
                </ContentText>
                <SemiText>
                    AI 교육원
                </SemiText>
            </NoticeContent>
            <NoticeContent>
                <ContentText>
                    [SW중심대학] 제6회 HUFS Code Festival 모집 공고
                </ContentText>
                <SemiText>
                    AI 교육원
                </SemiText>
            </NoticeContent>
        </NoticeConatiner>
    );
}