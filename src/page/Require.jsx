import React from 'react';
import styled from 'styled-components';
import { Arrow, BigCheckbox, Xbox } from '../img/Logo';  // 아이콘 import
import { Link } from 'react-router-dom';  // Link 컴포넌트 사용

// 스타일 정의
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
  color: #333;
  text-align: left;
  margin-bottom: 17px;
  font-weight: 700;
  position: relative;
  left: 10px;
  top: 5px;
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

const RequirementBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 97%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px auto;
`;

const RequirementRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`;

const BigCheckboxContainer = styled.div`
  margin-right: 10px;
  margin-left: 15px;
`;

const RequirementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-left: 90px;
`;

const RequirementTitle = styled.h2`
  font-size: 10.35px;
  color: #333;
  font-weight: 700;
  margin-bottom: 5px;
`;

const RequirementText = styled.div`
  font-size: 10.35px;
  color: #333;
  margin-bottom: 10px;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  margin-left: 10px;
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

export default function Require() {
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
        <Title3>본전공</Title3>

        <RequirementBox>
          <RequirementRow>
            <BigCheckboxContainer>
              <BigCheckbox /> 
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>어학시험</RequirementTitle>
              <RequirementText>토익 700점 이상</RequirementText>
            </RequirementContainer>
            <ArrowContainer>
              <Link to="/Depthrequire">
                <Arrow />
              </Link>
            </ArrowContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업프로젝트</RequirementTitle>
              <RequirementText>캡스톤 프로젝트 PASS</RequirementText>
            </RequirementContainer>
            <ArrowContainer>
              <Link to="/Depthrequire">
                <Arrow />
              </Link>
            </ArrowContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업필수과목</RequirementTitle>
              <RequirementText>졸업필수과목 수강</RequirementText>
            </RequirementContainer>
            <ArrowContainer>
              <Link to="/Depthrequire">
                <Arrow />
              </Link>
            </ArrowContainer>
          </RequirementRow>
        </RequirementBox>

        <Title3>이중전공</Title3>
        <RequirementBox>
          <RequirementRow>
            <BigCheckboxContainer>
              <BigCheckbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>어학시험</RequirementTitle>
              <RequirementText>토익 700점 이상</RequirementText>
            </RequirementContainer>
            <ArrowContainer>
              <Link to="/Depthrequire">
                <Arrow />
              </Link>
            </ArrowContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업프로젝트</RequirementTitle>
              <RequirementText>캡스톤 프로젝트 PASS</RequirementText>
            </RequirementContainer>
            <ArrowContainer>
              <Link to="/Depthrequire">
                <Arrow />
              </Link>
            </ArrowContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업필수과목</RequirementTitle>
              <RequirementText>졸업필수과목 수강</RequirementText>
            </RequirementContainer>
            <ArrowContainer>
              <Link to="/Depthrequire">
                <Arrow />
              </Link>
            </ArrowContainer>
          </RequirementRow>
        </RequirementBox>
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
