import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 350px; /* 전체 크기 줄이기 */
  height: 250px; /* 높이 조정 */
  overflow: hidden;
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-slide div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-dots {
    bottom: 10px; /* 슬라이더 아래에 위치 */
  }

  .slick-dots li button:before {
    font-size: 10px; /* 점의 크기 조정 */
    color: #D9D9D9; /* 비활성 점 색상 */
  }

  .slick-dots li.slick-active button:before {
    color: #94B7BF; /* 활성 점 색상 */
  }
`;

const Board = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 1px 1px 0.7px rgba(0, 0, 0, 0.25);
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ViewContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
`;

const RateContainer = styled.div`
  width: 45%;
  height: 150px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequirementsContainer = styled.div`
  width: 45%;
  height: 140px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const MajorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const Requirement = styled.div`
  width: 90%;
  height: 28px;
  margin: 3px;
  border-radius: 4px;
  border: 1px solid #C2C1C1;
  background: #FFF;
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1.8px;
  background: #ebedee;
  margin-top: 18px;
`;

const Major = styled.div`
  border-radius: 10px;
  background: #ebedee;
  margin: 3px;
  padding: 4px 8px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 13px;
  color: #333;
  margin: 0;
`;

export default function DashBoard() {
  const [major, setMajor] = useState("통계학과");
  const [secondmajor, setSecondmajor] = useState("AI융합전공");
  const [username, setUsername] = useState("김민석");
  const [rate, setRate] = useState(34/54 * 100);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        <Board key="slide1">
          <InfoContainer>
            <Text style={{ marginRight: '10px' }}>안녕하세요 {username}님</Text>
            <MajorContainer>
              <Major>
                <Text>{major}</Text>
              </Major>
              <Major>
                <Text>{secondmajor}</Text>
              </Major>
            </MajorContainer>
          </InfoContainer>
          <UnderLine />
          <ViewContainer>
            <RateContainer>
              <CircularProgressbar value={rate} text={"34/54"} />
              <Text>본전공 이수율</Text>
            </RateContainer>
            <RequirementsContainer>
              <Text>졸업요건</Text>
              <Requirement>
                <Text>1</Text>
              </Requirement>
              <Requirement>
                <Text>2</Text>
              </Requirement>
              <Requirement>
                <Text>3</Text>
              </Requirement>
            </RequirementsContainer>
          </ViewContainer>
        </Board>
        <Board key="slide2">
          <Text>완성단계에서 앞 페이지의 state값만 변경</Text>
        </Board>
      </StyledSlider>
    </CarouselWrapper>
  );
}
