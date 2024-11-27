import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoticeConatiner = styled.div`
  width: 390px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const NoticeHeader = styled.div`
  width: 300px;
  height: 10%;
  display: flex;
  flex-direction: row;
  margin-left: 17px;
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
  margin-top: 15px;
  margin-left: 22px;
  margin-bottom: 10px;
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
  font-size: 10.1px;
  font-weight: 500;
  margin-left: 11px;
  white-space: nowrap;       /* 텍스트를 한 줄로 유지 */
  overflow: hidden;          /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis;   /* 넘치는 부분을 "..."로 표시 */
  max-width: 200px;
`;
const SemiContentText = styled.h3`
  color: #a7a8ab;
  font-family: Inter;
  font-size: 10.84px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 10px;
`;

export default function NoticeMain({ data }) {
  const [date, setDate] = useState("null");
  const navigate = useNavigate();

  const goToNoticepage = () => {
    navigate("/notice");
  };

  const handleNoticeClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };


  useEffect(() => {
    // 현재 날짜를 "MM월 DD일" 형식으로 포맷
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;
    setDate(formattedDate);
  }, []); // 컴포넌트가 마운트될 때 한 번 실행
  return (
    <NoticeConatiner>
      <NoticeHeader>
        <NoticeTitle>공지사항 알림</NoticeTitle>
        <Arrow onClick={goToNoticepage} />
      </NoticeHeader>
      <SemiText>{date}</SemiText>
      {data.map((item, index) => (
        <NoticeContent
          key={index}
          onClick={() => handleNoticeClick(item.notice_link)}
        >
          <ContentText>{item.notice_title}</ContentText>
          <SemiContentText>{item.notice_department}</SemiContentText>
        </NoticeContent>
      ))}
    </NoticeConatiner>
  );
}
