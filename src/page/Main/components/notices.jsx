import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoticeConatiner = styled.div`
    width: 390px;
    height: 300px;
    display: flex;
    flex-direction: column;
`;

const NoticeHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
`;

const Arrow = styled(IoIosArrowForward)`
    margin-top: 3px;
    margin-left: 8px;
    cursor: pointer;
`;

const SemiText = styled.h3`
    color: #a7a8ab;
    font-family: Inter;
    font-size: 10.84px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px;
`;

const NoticeTitle = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 17.246px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const NoticeContent = styled.div`
    width: 90%;
    height: 25%;
    border-radius: 9.855px;
    background: #fff;
    box-shadow: 0px 0.493px 0.912px 0.985px rgba(0, 0, 0, 0.09);
    padding: 10px;
    margin: 5px;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const ContentText = styled.h3`
    color: #000;
    font-family: Inter;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 11px;
`;

export default function NoticeMain({ mockdata }) {
    const [date, setDate] = useState("10월 2일");
    const navigate = useNavigate();

    const goToNoticepage = () => {
        navigate("/notice");
    };


    const handleNoticeClick = (link) => {
        window.open(link, "_blank"); // Opens the link in a new tab
    };

    return (
        <NoticeConatiner>
            <NoticeHeader>
                <NoticeTitle>공지사항 알림</NoticeTitle>
                <Arrow onClick={goToNoticepage} />
            </NoticeHeader>
            <SemiText>{date}</SemiText>
            {mockdata.map((item, index) => (
                <NoticeContent key={index} onClick={() => handleNoticeClick(item.notice_link)}>
                    <ContentText>{item.notice_title}</ContentText>
                    <SemiText>{item.notice_department}</SemiText>
                </NoticeContent>
            ))}
        </NoticeConatiner>
    );
}
