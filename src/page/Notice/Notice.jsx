import styled from "styled-components";
import NoticeHeader from "./components/NoticeHeader";
import { Carousel } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../auth/axiosInstance";
import NoticeModal from "./NoticeModal"; // NoticeModal을 import

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  width: 390px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px; // Adjusted for smaller spacing between boxes
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
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
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 55px;
  border-radius: 9.855px;
  background: #fff;
  box-shadow: 0px 0.493px 0.912px 0.985px rgba(0, 0, 0, 0.09);
  margin-top: 20px;
`;

const LowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NoticeContent = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 10.101px;
  font-weight: 500;
  margin-top: 7px;
  margin-left: 20px;
  white-space: nowrap;       /* 텍스트를 한 줄로 유지 */
  overflow: hidden;          /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis;   /* 넘치는 부분을 "..."로 표시 */
  max-width: 320px;
`;

const DayContent = styled.h4`
  color: rgba(95, 95, 95, 0.51);
  font-family: Inter;
  font-size: 10.101px;
  font-weight: 500;
  margin-left: auto;
  margin-top: 7px;
  margin-right: 20px;
`;

const CenterContent = styled.h4`
  color: rgba(95, 95, 95, 0.51);
  font-family: Inter;
  font-size: 10.101px;
  font-weight: 500;
  margin-right: auto;
  margin-top: 7px;
  margin-left: 20px;
  white-space: nowrap;       /* 텍스트를 한 줄로 유지 */
  overflow: hidden;          /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis;   /* 넘치는 부분을 "..."로 표시 */
  max-width: 320px;
`;

const SettingButton = styled.div`
  width: 40%;
  height: 30px;
  border-radius: 40px;
  background: #5d96e8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 83px;
`;

const SettingText = styled.h3`
  color: #fff;
  font-family: Inter;
  font-size: 10.101px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const contentStyle = {
  margin: 0,
  height: '180px',
  color: '#fff',
  lineHeight: '160px',
};

// Main component
export default function Notice() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const goToNoticeModal = () => {
    navigate("/noticemodal");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/notices/notice/");
        setData(response.data); // 데이터 저장
        console.log("공지사항 데이터", response.data); // 데이터 출력
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleNoticeClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  const chunkNotices = (notices) => {
    const chunked = [];
    for (let i = 0; i < notices.length; i += 2) {
      chunked.push(notices.slice(i, i + 2)); // Creates a chunk of 2 notices at a time
    }
    return chunked;
  };

  return (
    <PageContainer>
      <NoticeHeader sum={data.new_sum} />
      {data &&
        data.subscribe_organ &&
        Object.keys(data.subscribe_organ).map((organ) => {
          const notices = data.subscribe_organ[organ];
          const noticeChunks = chunkNotices(notices); // Split notices into chunks of 2

          return (
            <BoxContainer key={organ}>
              <CenterText>{organ} 공지사항</CenterText>
              <Carousel draggable={true} dotPosition={"top"}>
                {noticeChunks.map((chunk, index) => (
                  <div key={index}>
                    <ContentContainer>
                      {chunk.map((notice, idx) => (
                        <NoticeContainer key={idx} onClick={() => handleNoticeClick(notice.url)}>
                          <NoticeContent>{notice.title}</NoticeContent>
                          <LowContainer>
                            <CenterContent>{organ}</CenterContent>
                            <DayContent>{notice.date}</DayContent>
                          </LowContainer>
                        </NoticeContainer>
                      ))}
                    </ContentContainer>
                  </div>
                ))}
              </Carousel>
            </BoxContainer>
          );
        })}

      <SettingButton onClick={goToNoticeModal}>
        <SettingText>알림받을 기관 선택하기</SettingText>
      </SettingButton>
    </PageContainer>
  );
}
