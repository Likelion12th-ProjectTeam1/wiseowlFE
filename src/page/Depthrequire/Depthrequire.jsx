import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow-x: hidden;
  padding-bottom: 100px; //이건 네브바때문에 잠시만 해둘게염
`;

const Title = styled.h1`
  font-size: 19.71px;
  color: #333;
  text-align: left;
  margin-bottom: 40px;
  font-weight: 700;
  position: relative;
  left: 20px;
  top: 30px;
`;

const Title2 = styled.h1`
  font-size: 18.72px;
  color: #333;
  text-align: left;
  margin-bottom: 40px;
  font-weight: 700;
  position: relative;
  left: 20px;
  top: 30px;
`;

const Title3 = styled.h1`
  font-size: 18.72px;
  font-weight: 300; 
  color: #333;
  text-align: left;
  margin-bottom: 17px;
  position: relative;
  left: 10px;
  top: 5px;
`;

const Title4Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px; 
  width: 100%;
`;

const Title4 = styled.h1`
  font-size: 14px;
  color: #00191F;
  margin-bottom: 10px;
  margin-right: auto; 
`;

const Title5Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px; 
  width: 100%;
  margin-top: 20px; 
`;

const Title5 = styled.h1`
  font-size: 14px;
  color: #00191F;
  margin-bottom: 5px;
  margin-right: auto; 
  margin-top: 10px;
`;

const ProgressContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px;
  width: 400px;
`;

const Section1 = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #F6F6F6;
  margin-bottom: 20px;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const Section2 = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #F6F6F6;
`;

const ProgressBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  flex-shrink: 0;
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

const PercentageText = styled.div`
  font-size: 10px;
  color: #A5A2A2;
  margin-top: 20px;
`;

const Title3Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  position: relative;
  left: 10px;
  top: 5px;
  width: 100%; 
`;

const MajorBox = styled.div`
  font-size: 10.35px;
  background-color: #FFFFFF;
  padding: 5px 10px;
  margin-left: 30px;
`;

const MajorText = styled.span`
  font-size: 10.35px;  
  color: #333;
  font-weight: 300;
  text-align: center;
`;

const SubjectItem = styled.div`
  font-size: 10.35px;
  color: #000000;
  text-align: center;
  flex: 1; 
  margin: 0 5px; 
  margin-top: 5px; 
`;
const MajorSubjectItem = styled.div`
  font-size: 10.35px;
  color: #868686;
  text-align: center;
  flex: 1;
  margin: 0 5px;
`;

const SubjectBox = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;  
  gap: 10px;
  align-items: center;
`;

const DataRow = styled.div`
  display: contents;  
  grid-row: 2; 
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;  
  margin-bottom: 5px; 
  width: 100%;
  color: #868686;
  font-weight: bold; 
`;

const CompletionStatus = styled.div`
  font-size: 10.35px;
  color: ${(props) => (props.isCompleted ? "#4154FF" : "#FF4164")};
  background-color: ${(props) =>
    props.isCompleted ? "rgba(65, 84, 255, 0.16)" : "rgba(255, 65, 100, 0.16)"};
  border-radius: 12px;
  width: 62px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #5D96E8;
  color: white;
  border: none;
  border-radius: 4px;
  width: 97px; 
  height: 24px; 
  font-size: 10.35px;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  padding: 0; 
`;

export default function DepthRequire() {
  const completionRates = {
    major: 0.75,
    doubleMajor: 0.60,
    liberalArts: 0.85,
    elective: 0.50
  };

  return (
    <PageContainer>
      <Section1>
        <Title>졸업진행도</Title>
        <ProgressContainer>
          <ProgressBox title={"본전공\n이수율"} progress={completionRates.major} />
          <ProgressBox title={"이중전공\n이수율"} progress={completionRates.doubleMajor} />
          <ProgressBox title={"교양\n이수율"} progress={completionRates.liberalArts} />
          <ProgressBox title={"자율선택\n이수율"} progress={completionRates.elective} />
        </ProgressContainer>
      </Section1>

      <SectionDivider>
        <Title2>내 졸업 요건</Title2>
      </SectionDivider>

      <Section2>
        <Title3Container>
          <Title3>본전공</Title3>
          <MajorBox>
            <MajorText>정보통신공학과</MajorText>
          </MajorBox>
        </Title3Container>

        <Title4Container>
        <Title4>전공필수과목</Title4>
        </Title4Container>

        <TitleRow>
        <MajorSubjectItem>이수여부</MajorSubjectItem>
        <MajorSubjectItem>과목코드</MajorSubjectItem>
        <MajorSubjectItem>교과목명</MajorSubjectItem>
        </TitleRow>
        <SubjectBox>
        <DataRow>
            <CompletionStatus isCompleted={true}>이수완료</CompletionStatus>
            <SubjectItem>T04343</SubjectItem>
            <SubjectItem>데이터통신</SubjectItem>
        </DataRow>
        <DataRow>
            <CompletionStatus isCompleted={false}>이수미완</CompletionStatus>
            <SubjectItem>T04344</SubjectItem>
            <SubjectItem>네트워크</SubjectItem>
        </DataRow>
        </SubjectBox>

        <Title5Container>
        <Title5>교양필수과목</Title5>
        </Title5Container>

        <TitleRow>
        <MajorSubjectItem>이수여부</MajorSubjectItem>
        <MajorSubjectItem>학년</MajorSubjectItem>
        <MajorSubjectItem>영역 / 교과목명</MajorSubjectItem>
        </TitleRow>
        <SubjectBox>
        <DataRow>
            <CompletionStatus isCompleted={true}>이수완료</CompletionStatus>
            <SubjectItem>1학년</SubjectItem>
            <SubjectItem>미네르바인문1</SubjectItem>
        </DataRow>
        </SubjectBox>
        <ButtonContainer>
            <Link to="/DepthRequire2">
            <Button>이중전공 보기</Button>
            </Link>
        </ButtonContainer>
      </Section2>
    </PageContainer>
  );
}

function ProgressBox({ title, progress }) {
  const current = Math.floor(progress * 54);
  const total = 54;
  const isElective = title === "자율선택\n이수율";

  return (
    <ProgressBoxContainer>
      <TitleBox>{title}</TitleBox>
      <ProgressCircleContainer progress={progress}>
        <ProgressCircleInner>
          <ProgressText>
            <CurrentText>{current}</CurrentText>
            {!isElective && <TotalText>/{total}</TotalText>}
          </ProgressText>
        </ProgressCircleInner>
      </ProgressCircleContainer>
      {!isElective && <PercentageText>{`${(progress * 100).toFixed(0)}%`}</PercentageText>}
    </ProgressBoxContainer>
  );
}