import styled from "styled-components";
import { useState } from "react";

// Styled Components
const ModalContainer = styled.div`
    width: 250px;
    height: 410px;
    display: flex;
    flex-direction: column;
    border-radius: 22px;
    background: #F5F5F5;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
`;

const ModalTitle = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    margin-left: 25px;
    margin-top: 35px;
`;

const TitleImg = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("/img/stopwatch.png"); 
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: 20px;
    top: 30px;
`;

const CancleImg = styled.div`
    width: 17px;
    height: 20px;
    background-image: url("/img/cancle.png"); 
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: 55px;
    top: 30px;
`;

const NoticeText = styled.h4`
    color: #A7A8AB;
    font-family: Inter;
    font-size: 10px;
    font-weight: 500;
    margin-left: 25px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 22px;
`;

const CenterButton = styled.div`
    width: 110px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #737373;
    border-radius: 30px;
    background: #FFF;
    margin-bottom: 10px; // Add space between buttons
    &:hover {
        border: 3px solid #5D96E8;
        background: #FFF;
        color: #000;
    }
`;

// Main Component
export default function NoticeModal() {
    const [center, setCenter] = useState([
        { id: 1, center: "AI교육원" },
        { id: 2, center: "통계학과" },
        { id: 3, center: "창업지원센터" },
    ]);

    return (
        <ModalContainer>
            <TitleContainer>
                <TitleImg />
                <ModalTitle>알림 선택</ModalTitle>
                <CancleImg />
            </TitleContainer>
            <NoticeText>알림을 받아보실 기관을 선택해주세요</NoticeText>
            <ButtonContainer>
                {center.map((item) => (
                    <CenterButton key={item.id}>{item.center}</CenterButton>
                ))}
            </ButtonContainer>
        </ModalContainer>
    );
}
