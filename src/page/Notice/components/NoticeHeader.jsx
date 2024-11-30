import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const NoticeImg = styled.img`
    width: 150px;
    height: 150px;
    display: flex;
    position : relative;
    left : 160px;
    bottom: 130px;
    margin-top: 24px;
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
    width: 41px;
    height: 17px;
    border-radius: 9.855px;
    background: #5D96E8;
    display: flex; /* 플렉스 컨테이너 활성화 */
    align-items: center; /* 수직 정렬 */
    justify-content: center; /* 수평 정렬 */
    text-align: center; /* 텍스트 정렬 (플렉스 컨테이너 외 추가 안전성) */
    margin-left: 15px;
    color: #FFF;
    font-family: Inter;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    z-index: 10;
    cursor : pointer;
`

export default function NoticeHeader({sum}){

    const Today = new Date();
    const navigate = useNavigate();

    const formattedYear = `${Today.getFullYear()}년`;
    const formattedDate = `${Today.getMonth() + 1}월 ${Today.getDate()}일`

   
    const goToMainNoticepage = () => {
        navigate("/mainnotice");
  };

    return(
        <HeaderContianer>
            <DayContainer>
                <DayText>
                    {formattedYear}<br/>
                    {formattedDate}
                    <NoticeImg src="/img/NoticeIcon.svg" alt="noticeIcon" />
                </DayText>
            </DayContainer>
            <CountContainer>
                <NoticeText>새 공지사항을 확인해보세요!</NoticeText>
                <Countnotice
                    onClick={() => {
                        goToMainNoticepage(); // 페이지 이동 함수
                        console.log("Clicked!");
                    }}
                    >{sum}
                    </Countnotice>
            </CountContainer>
        </HeaderContianer>
    );
}