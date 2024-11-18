import React from 'react';
import styled from 'styled-components';
import { DeepArrow, BigCheckbox, Xbox, Notice } from '../img/Logo';
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { FaBookOpen } from "react-icons/fa";


const PageContainer = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  width: 390px;
  padding: 0 20px;
  padding-bottom: 60px;
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
  margin-top: 5px;  /* 상단 여백 추가 */
  margin-bottom: 0;  /* 불필요한 아래 여백 제거 */
`;

const ProgressContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px;
  width: auto;
`;

const Section1 = styled.div`
  width: 390px;
  padding: 20px;
  background-color: #F6F6F6;
  margin-bottom: 20px;
`;

const SectionDivider = styled.div`
  width: 390px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const Section2 = styled.div`
  width: 390px;
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

const NoticeContainer = styled.div`
  margin-left: auto; /* 오른쪽으로 밀어 배치 */
`;

const RequirementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-left: 60px;
  display: flex; /* flex 속성 추가 */
  justify-content: space-between; /* 양 끝 정렬 */
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
  margin-bottom: 29px;
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


const TitleWithArrow = styled.div`
  display: flex;
  align-items: center; 
  gap: 8px;  
  margin-left: 10px;
`;

const NoticeModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 198px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalTitle = styled.h2`
  font-size: 16px;
  color: #333;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; // 각 줄 사이 간격
`;

const WrapperRow = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬 */
  gap: 10px; /* 각 요소 사이 간격 */
`;


const StyledP = styled.p`
  font-size: 10px; 
  color: #000000;
  margin: 0;
`;

const StyledP2 = styled.p`
  font-size: 10px; 
  color: #A5A2A2; 
  margin: 0;
`;

const StyledP3 = styled.p`
  font-size: 8px; 
  color: #000000; 
  margin: 0;
  white-space: nowrap;
`;

const StyledP4 = styled.p`
  font-size: 7px; 
  color: #A5A2A2; 
  margin: 0;
  white-space: normal; 
`;


export default function Require() {
  const navigate = useNavigate(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completionRates = {
    major: 0.75,
    doubleMajor: 0.60,
    liberalArts: 0.85,
    elective: 0.50
  };

  const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

  const openModal = () => setIsModalOpen(true);


  return (
    <PageContainer>
      <Section1>
        <Title>졸업진행도</Title>
        <ProgressContainer>
          <ProgressBox title={"본전공\n이수율"} progress={completionRates.major} />
          <ProgressBox title={"이중전공\n이수율"} progress={completionRates.doubleMajor} />
          <ProgressBox title={"교양\n이수율"} progress={completionRates.liberalArts} />
          <ProgressBox title={"자율선택\n이수학점"} progress={completionRates.elective} />
        </ProgressContainer>
      </Section1>

      <SectionDivider>
        <Title2>내 졸업 요건</Title2>
      </SectionDivider>

      <Section2>

      <TitleWithArrow onClick={() => navigate('/depthrequire')}>
        <Title3>본전공</Title3>
        <DeepArrow />
      </TitleWithArrow>
        <RequirementBox>
          <RequirementRow>
            <BigCheckboxContainer>
              <BigCheckbox /> 
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>어학시험</RequirementTitle>
              <RequirementText>토익 700점 이상</RequirementText>
            </RequirementContainer>
            <NoticeContainer onClick={openModal}>
              <Notice />
              </NoticeContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업프로젝트 PASS</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업필수과목</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        </RequirementBox>

        <TitleWithArrow onClick={() => navigate('/depthrequire')}>
          <Title3>이중전공</Title3>
          <DeepArrow />
        </TitleWithArrow>
        <RequirementBox>
          <RequirementRow>
            <BigCheckboxContainer>
              <BigCheckbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>어학시험</RequirementTitle>
              <RequirementText>토익 700점 이상</RequirementText>
            </RequirementContainer>
            <NoticeContainer onClick={openModal}>
              <Notice />
              </NoticeContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업프로젝트 PASS</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>

          <RequirementRow>
            <BigCheckboxContainer>
              <Xbox />
            </BigCheckboxContainer>
            <RequirementContainer>
              <RequirementTitle>졸업필수과목</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        </RequirementBox>
      </Section2>
  {isModalOpen && (
    <ModalBackground onClick={() => setIsModalOpen(false)}>
      <NoticeModal onClick={(e) => e.stopPropagation()}>  {/* 모달 자체 클릭은 이벤트 전파 방지 */}
        <ModalTitle>어학시험</ModalTitle>
        <ModalContent>
          <WrapperRow>
            <FaBookOpen color="#BE63F9" size="20px" />
            <StyledP>TOEIC</StyledP>
            <StyledP2>700점 이상</StyledP2>
          </WrapperRow>
          <WrapperRow>
            <StyledP3>대체가능시험</StyledP3>
            <StyledP4>
              OPIc, TOEIC SPEAKING,{"\n"}
              FLEX, TOFEL, FLEX SPEAKING
            </StyledP4>
          </WrapperRow>
        </ModalContent>
      </NoticeModal>
    </ModalBackground>
)}
    </PageContainer>
  );
}
   
function ProgressBox({ title, progress }) {
  const [total, setTotal] = useState(54); // 기본값 설정
  
  // API로부터 total 값을 가져오는 함수
  const fetchTotal = async () => {
    try {
      const response = await fetch('API_ENDPOINT'); // 실제 API 주소로 변경
      const data = await response.json();
      setTotal(data.total || 54); // total 값이 없으면 기본값 54
    } catch (error) {
      console.error('Failed to fetch total value:', error);
    }
  };

  useEffect(() => {
    fetchTotal();
  }, []); // 컴포넌트가 처음 렌더링될 때 호출됨

  const current = Math.floor(progress * total);
  const isElective = title === "자율선택\n이수학점";

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
      {!isElective ? (
        <PercentageText>{`${(progress * 100).toFixed(0)}%`}</PercentageText>
      ) : (
        <PercentageText>자율선택</PercentageText>
      )}
    </ProgressBoxContainer>
  );
}

