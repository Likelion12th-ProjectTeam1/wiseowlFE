import styled from "styled-components";
import NoticeHeader from "./components/NoticeHeader";
import { Carousel } from "antd";
import { useState } from "react";

const PageContainer = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BoxContainer = styled.div`
    width : 390px;
    height : 250px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px; // Adjusted for smaller spacing between boxes
`;

const ContentContainer = styled.div`
    width : 100%;
    height : 180px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8.81px;
    background: rgba(245, 245, 245, 0.50);
`;

const CenterText = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 18.724px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 20px;
`;

const NoticeContainer = styled.div`
    display : flex;
    flex-direction: column;
    width : 90%;
    height : 50px;
    border-radius: 9.855px;
    background: #FFF;
    box-shadow: 0px 0.493px 0.912px 0.985px rgba(0, 0, 0, 0.09);
    margin-top: 20px;
`;

const LowContainer = styled.div`
    display : flex;
    flex-direction: row;
`;

const NoticeContent = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 10.101px;
    font-weight: 500;
    margin-top : 7px;
    margin-left : 20px;
`;

const DayContent = styled.h4`
    color: rgba(95, 95, 95, 0.51);
    font-family: Inter;
    font-size: 10.101px;
    font-weight: 500;
    margin-left: auto;
    margin-top : 7px;
    margin-right: 20px;
`;

const CenterContent = styled.h4`
    color: rgba(95, 95, 95, 0.51);
    font-family: Inter;
    font-size: 10.101px;
    font-weight: 500;
    margin-right: auto;
    margin-top : 7px;
    margin-left: 20px;
`;

const SettingButton = styled.div`
    width : 40%;
    height : 30px;
    border-radius: 40px;
    background: #5D96E8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SettingText = styled.h3`
    color: #FFF;
    font-family: Inter;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const contentStyle = {
    margin: 0,
    height: '180px',
    color: '#fff',
    lineHeight: '160px',
};

// Main component
export default function Notice() {
    const [center, setCenter] = useState("통계학과");
    const [mockdata, setMockData] = useState([
        { id: "1", centername: "AI교육원", noticedate: "10월 1일", noticecontent: "[SW중심대학] 제6회 HUFS Code Festival 모집 공고" },
        { id: "2", centername: "AI교육원", noticedate: "10월 2일", noticecontent: "[SW중심대학] 제7회 HUFS Code Festival 모집 공고" },
    ]);

    const [boxContainers, setBoxContainers] = useState([1]); // Start with one box

    // Function to add a new BoxContainer
    const addBoxContainer = () => {
        setBoxContainers([...boxContainers, boxContainers.length + 1]);
    };

    return (
        <PageContainer>
            <NoticeHeader />
            {/* Render each BoxContainer */}
            {boxContainers.map((box, index) => (
                <BoxContainer key={index}>
                    <CenterText>{center} 공지사항 {box}</CenterText>
                    <Carousel draggable={true} dotPosition={"top"}>
                        <div>
                            <ContentContainer>
                                {mockdata.map((notice) => (
                                    <NoticeContainer key={notice.id}>
                                        <NoticeContent>{notice.noticecontent}</NoticeContent>
                                        <LowContainer>
                                            <CenterContent>{notice.centername}</CenterContent>
                                            <DayContent>{notice.noticedate}</DayContent>
                                        </LowContainer>
                                    </NoticeContainer>
                                ))}
                            </ContentContainer>
                        </div>
                        <div>
                            <ContentContainer>
                                {mockdata.map((notice) => (
                                    <NoticeContainer key={notice.id}>
                                        <NoticeContent>{notice.noticecontent}</NoticeContent>
                                        <LowContainer>
                                            <CenterContent>{notice.centername}</CenterContent>
                                            <DayContent>{notice.noticedate}</DayContent>
                                        </LowContainer>
                                    </NoticeContainer>
                                ))}
                            </ContentContainer>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                    </Carousel>
                </BoxContainer>
            ))}
            
            {/* Button to add a new BoxContainer */}
            <SettingButton onClick={addBoxContainer}>
                <SettingText>알림받을 기관 선택하기</SettingText>
            </SettingButton>
        </PageContainer>
    );
}
