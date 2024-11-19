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
  border-radius: 5px;
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

const UserContainer = styled.div`
  width :100%;
  height : 100%;
  display : flex;
  align-items: center;
  justify-content: center;
  margin-top : 20px;
  margin-left: 17px;
`

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

const RequireTitle = styled.div`
  width : 100%;
  height : 20%;
`

const MajorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Requirement = styled.div`
  width: 90%;
  height: 28px;
  margin: 3px;
  border-radius: 4px;
  border: 1px solid #C2C1C1;
  background: #FFF;
`;

const LineContainer = styled.div`
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UnderLine = styled.div`
  width: 80%;
  height: 2px;
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

const MajorText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 7.884px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const RateText = styled.h4`
  color: #A7A8AB;
  font-family: Roboto;
  font-size: 7.884px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top : 10px;
`

const UserText = styled.h2`
  color: #000;
  font-family: Roboto;
  font-size: 14.885px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
const RequireText = styled.h4`
  color: #000;
  font-family: Roboto;
  font-size: 10.347px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right : auto;
  margin-left: 10px;
`

const Text = styled.p`
  font-size: 13px;
  color: #333;
  margin: 0;
`;


const TitleBox = styled.div`
  font-size: 10px;
  margin-bottom: 20px;
  font-weight: 400;
  white-space: pre-line;
  text-align: left;
  width: 100%;
`;

const ProgressCircleContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: conic-gradient(
    #113371 ${(props) => props.progress * 100}%, 
    #ddd ${(props) => props.progress * 100}%
  );
`;

const ProgressCircleInner = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressText = styled.div`
  display: flex;
  align-items: baseline;
`;

const CurrentText = styled.span`
  font-size: 20.94px;
  color: #000000;
  font-weight: 700;
`;

const TotalText = styled.span`
  font-size: 14.04px;
  color: #737373;
  margin-left: 4px;
`;





export default function DashBoard({data}) {
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

  function ProgressBox({ title, progress, total, complete}) {
    const current = Math.floor(progress * 54);
    const isElective = title === "자율선택\n이수율";
  
    return (
      <>
        <ProgressCircleContainer progress={30}>
          <ProgressCircleInner>
            <ProgressText>
              <CurrentText>{complete}</CurrentText>
              {!isElective && <TotalText>/{total}</TotalText>}
            </ProgressText>
          </ProgressCircleInner> 
        </ProgressCircleContainer>
      </>
    );
  }

  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        <Board key="slide1">
          <InfoContainer>
            <UserContainer>
              <UserText style={{ marginLeft: '10px' }}>안녕하세요 {data.name}님</UserText>
            </UserContainer>
            <MajorContainer>
              <Major>
                <MajorText>{data.major}</MajorText>
              </Major>
              <Major>
                <MajorText>{data.double_major}</MajorText>
              </Major>
            </MajorContainer>
          </InfoContainer>
          <LineContainer>
            <UnderLine />
          </LineContainer>
          <ViewContainer>
            <RateContainer>
              <ProgressBox total={data.major_credit_required} complete={data.major_credit_completed}/>
              <RateText>본전공 이수율</RateText>
            </RateContainer>
            <RequirementsContainer>
              <RequireTitle>
                <RequireText>졸업요건</RequireText>
              </RequireTitle>
              <Requirement>
                <RequireText>{data.major_requirements[0]}</RequireText>
              </Requirement>
              <Requirement>
                <RequireText>{data.major_requirements[1]}</RequireText>
              </Requirement>
              <Requirement>
                <RequireText>{data.major_requirements[2]}</RequireText>
              </Requirement>
            </RequirementsContainer>
          </ViewContainer>
        </Board>
        <Board key="slide2">
          <InfoContainer>
            <UserContainer>
              <UserText style={{ marginLeft: '10px' }}>안녕하세요 {data.name}님</UserText>
            </UserContainer>
            <MajorContainer>
              <Major>
                <MajorText>{data.major}</MajorText>
              </Major>
              <Major>
                <MajorText>{data.double_major}</MajorText>
              </Major>
            </MajorContainer>
          </InfoContainer>
          <LineContainer>
            <UnderLine />
          </LineContainer>
          <ViewContainer>
            <RateContainer>
              <ProgressBox total={data.double_credit_required} complete={data.double_credit_completed}/>
              <RateText>부전공 이수율</RateText>
            </RateContainer>
            <RequirementsContainer>
              <RequireTitle>
                <RequireText>졸업요건</RequireText>
              </RequireTitle>
              <Requirement>
                <RequireText>{data.double_requirements[0]}</RequireText>
              </Requirement>
              <Requirement>
                <RequireText>{data.double_requirements[1]}</RequireText>
              </Requirement>
              <Requirement>
                <RequireText>{data.double_requirements[2]}</RequireText>
              </Requirement>
            </RequirementsContainer>
          </ViewContainer>
        </Board>
      </StyledSlider>
    </CarouselWrapper>
  );
}