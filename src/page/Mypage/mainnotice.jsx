import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import NoticeItem from "./components/NoticeItem";
import axiosInstance from "../../auth/axiosInstance";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 390px;
  min-height: 570px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const CustomSpace = styled.div`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;

const HeaderHorizontalBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 15px;
  margin-left: 25px;
  gap: 15px;
  margin-bottom: 20px;
`;
const NameText = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 22px;
  color: #000000;
  margin-top: -3px;
  margin-left: 40.5%;
`;
export default function MainNotice() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
    console.log("클릭!");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/notices/alarm/`);
        let notsorted = response.data.notice;
        let sorted = notsorted.sort(
          //날짜순으로 정렬해서 10개만 보여줄것임
          (a, b) => new Date(b.notice_date) - new Date(a.notice_date)
        );
        setData(sorted.slice(0, 10));
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading();
      }
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <Container>
      {loading ? (
        "데이터 로딩중..."
      ) : (
        <>
          <HeaderHorizontalBox>
            <FaChevronLeft size="22px" onClick={handleClick} />

            <NameText>알림</NameText>
          </HeaderHorizontalBox>
          <CustomSpace height="20px" />
          {data.map((data) => (
            <NoticeItem
              organization={data.notice_department}
              min={data.notice_date}
              text={data.notice_title}
              isread={data.notice_read}
              link={data.notice_link}
            />
          ))}
        </>
      )}
    </Container>
  );
}
