import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import NoticeItem from "./components/NoticeItem";
const Container = styled.div`
  width: 390px;
  min-height: 570px;
  margin: 0 auto;
  margin-bottom: 70px;
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
  margin-bottom: 30px;
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
  return (
    <Container>
      <HeaderHorizontalBox>
        <FaChevronLeft size="22px" />
        <NameText>알림</NameText>
      </HeaderHorizontalBox>
      <CustomSpace height="20px" />
      <NoticeItem
        organization={"AI 교육원"}
        min={"3분전"}
        text={"[SW중심대학] 제6회 HUFS Code Festival 모집 공고"}
        isread={true}
      />
      <NoticeItem
        organization={"GBT 학부"}
        min={"12분전"}
        text={"[2024-2] 이중전공 졸업시험 장소 및 추가 공지"}
        isread={true}
      />
    </Container>
  );
}
