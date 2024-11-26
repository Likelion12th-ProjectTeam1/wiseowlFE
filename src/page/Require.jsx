import React, { useState, useEffect } from 'react';
import axiosInstance from '../auth/axiosInstance';
import styled from 'styled-components';
import { BigCheckbox, Xbox, DeepArrow, Notice } from '../img/Logo'; 
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 

const PageContainer = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  width: 390px;
  padding: 0 20px;
  padding-top: 60px;
  padding-bottom: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 19.71px;
  font-family: Inter;
  color: #333;
  text-align: left;
  margin-bottom: 40px;
  font-weight: bold;
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

const Title4 = styled.h1`
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
  justify-content: space-between;  /* 좌우로 공간을 분배 */
  align-items: center;             /* 세로 중앙 정렬 */
  width: 100%;                     /* 전체 너비를 차지하게 설정 */
`;

const BigCheckboxContainer = styled.div`
  margin-right: 10px;
  margin-left: 15px;
`;

const NoticeContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 240px;
`;

const NoticeContainer2 = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 230px;
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
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  flex-shrink: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);  /* 기본적인 그림자 추가 */
`;

const TitleBox = styled.div`
  font-size: 10px;
  font-family: Inter;
  margin-bottom: 29px;
  font-weight: 500;
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
  font-weight: 400;
  font-family: Roboto;
`;

const TotalText = styled.span`
  font-size: 14.04px;
  color: #737373;
  margin-left: 4px;
  font-family: Roboto;
  font-weight: 400;

`;

const PercentageText = styled.div`
  font-size: 10px;
  color: #A5A2A2;
  margin-top: 20px;
  font-family: Inter;
  font-weight: 500;
`;


const TitleWithArrow = styled.div`
  display: flex;
  align-items: center; 
  gap: 8px;  
  margin-left: 10px;
`;

const TitleWithArrow2 = styled.div`
  display: flex;
  align-items: center; 
  gap: 5px;  
  margin-left: 10px;
  cursor: pointer;
  pointer-events: auto;  // 클릭이 가능하도록 설정

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
  font-size: 14px; 
  color: #000000;
  margin: 0;
  padding: 0;
  white-space: nowrap;
`;

const StyledP2 = styled.p`
  font-size: 10px; 
  color: #A5A2A2; 
  margin: 0;
  padding: 0;
  white-space: nowrap;
  margin-left: 25px;
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

const StyledP5 = styled.p`
  font-size: 10px; 
  color: #000000; 
  margin: 0;
  white-space: normal; 
  font-family: Inter;
  font-weight: 600;
`;

const StyledP6 = styled.p`
  font-size: 7px; 
  color: #A5A2A2; 
  margin: 0;
  white-space: normal; 
  margin-top: -5px;
`;

export default function Require() {
  const [requirements, setRequirements] = useState(null);
  const [completeRequirement, setCompleteRequirement] = useState(null);
  const [profileGibun, setProfileGibun] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewType, setViewType] = useState(null);  // Add this line
  const [modalContent, setModalContent] = useState(null);
  const navigate = useNavigate(); 
  const handleNoticeClick = async (type, e) => {
    // 클릭 이벤트 전파 방지
    e.stopPropagation();

    
    try {
      const response = await axiosInstance.get('/api/requirements/i/');
      const data = response.data;

      // 타입에 따라 모달 내용 설정
      if (type === 'major') {
        setModalContent(data.major);
      } else if (type === 'double_or_minor') {
        setModalContent(data.double_or_minor);
      }

      openModal(); // 모달 열기
    } catch (error) {
      console.error('Error fetching modal data:', error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [completionRates, setCompletionRates] = useState({
    major: 0,
    doubleMajor: 0,
    liberalArts: 0,
    elective: 0,
    total: {
      major: 54, 
      doubleMajor: 42,
      liberalArts: 32,
      elective: 54
    }
  });

  const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -5px;
`;

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

const handleClick = () => {
  navigate('/depthrequire', { state: { viewType: 'double_or_minor' } });  // viewType을 'double_or_minor'로 설정하여 이동
};

useEffect(() => {
  if (viewType === 'double_or_minor') {
    navigate('/depthrequire');  // 상태가 변경되면 해당 페이지로 이동
  }
}, [viewType, navigate]);  // viewType 변경 시 effect 실행


  useEffect(() => {
    // navigate 함수는 페이지를 이동시키는 역할을 합니다.
    
    // API 호출하여 졸업 요건과 조건 충족 여부 가져오기
    const fetchRequirements = async () => {
      try {
        const response = await axiosInstance.get('/api/requirements/');
        setRequirements(response.data);

        // 본전공은 main_major_conditions 사용
        if (response.data.main_major_conditions && response.data.main_major_conditions.complete_requirment) {
          setCompleteRequirement(response.data.main_major_conditions.complete_requirment[0]);
        }

        /// 'profile_gibun' 값에 "이중전공" 또는 "부전공"이 포함되었는지 확인
        if (response.data.profile_gibun) {
          if (response.data.profile_gibun.includes('이중전공')) {
            setProfileGibun('이중전공');
          } else if (response.data.profile_gibun.includes('부전공')) {
            setProfileGibun('부전공');
          }
        }
        // 이수율 계산
        if (response.data.completed_credits && response.data.required_credits) {
          const completedCredits = response.data.completed_credits[0];
          const requiredCredits = response.data.required_credits[0];

          // 본전공 이수율 계산
          const mainMajorCompletion = (completedCredits.main_major_credits / requiredCredits.main_major_graduation_credits) * 100;
          // 이중전공 이수율 계산
          const doubleMajorCompletion = (completedCredits.double_minor_major_credits / requiredCredits.double_minor_major_graduation_credits) * 100;
          // 교양 이수율 계산
          const liberalArtsCompletion = (completedCredits.liberal_credits / requiredCredits.liberal_graduation_credits) * 100;
          // 자율선택 이수율 계산
          const electiveCompletion = (completedCredits.elective_credits / (requiredCredits.liberal_graduation_credits + completedCredits.elective_credits)) * 100;

          // 졸업 요건 총 학점도 계산
          setCompletionRates({
            major: mainMajorCompletion,
            doubleMajor: doubleMajorCompletion,
            liberalArts: liberalArtsCompletion,
            elective: electiveCompletion,
            total: {
              major: requiredCredits.main_major_graduation_credits,
              doubleMajor: requiredCredits.double_minor_major_graduation_credits,
              liberalArts: requiredCredits.liberal_graduation_credits,
              elective: requiredCredits.liberal_graduation_credits + completedCredits.elective_credits,
            }
          });
        }

      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };


    fetchRequirements();
  }, []);

  if (!requirements || !completeRequirement) return <div>로딩 중...</div>;

  // 졸업 요건을 출력하는 함수
  const renderRequirements = (requirements, completeRequirement) => {
    return requirements.map((req, index) => (
      <RequirementBox key={index}>
        {/* 졸업 요건에 따라 '본전공' 또는 '이중전공'을 렌더링 */}
        {req.graduation_foreign && (
          
          <RequirementRow>
            {completeRequirement.for_langauge ? (
              <BigCheckboxContainer>
                <BigCheckbox />
              </BigCheckboxContainer>
            ) : (
              <BigCheckboxContainer>
                <Xbox />
              </BigCheckboxContainer>
            )}
              <RequirementContainer>
              <RequirementTitle>어학시험 PASS</RequirementTitle>
              </RequirementContainer>


          </RequirementRow>
        )}

        {/* 졸업 프로젝트 */}
        {req.graduation_project && (
          <RequirementRow>
            {completeRequirement.grad_pro ? (
              <BigCheckboxContainer>
                <BigCheckbox />
              </BigCheckboxContainer>
            ) : (
              <XboxContainer>
                <Xbox />
              </XboxContainer>
            )}
            <RequirementContainer>
              <RequirementTitle>졸업프로젝트 PASS</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        )}
        
        {/* 졸업 시험 */}
        {req.graduation_exam && (
          <RequirementRow>
            {completeRequirement.grad_exam ? (
              <BigCheckboxContainer>
                <BigCheckbox />
              </BigCheckboxContainer>
            ) : (
              <XboxContainer>
                <Xbox />
              </XboxContainer>
            )}
            <RequirementContainer>
              <RequirementTitle>졸업시험 PASS</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        )}
        
        {/* 졸업 논문 */}
        {req.graduation_thesis && (
          <RequirementRow>
            {completeRequirement.grad_research ? (
              <BigCheckboxContainer>
                <BigCheckbox />
              </BigCheckboxContainer>
            ) : (
              <BigCheckboxContainer>
                <Xbox />
              </BigCheckboxContainer>
            )}
              <RequirementContainer>
              <RequirementTitle>졸업논문 제출</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        )}

        {/* 졸업 자격증 */}
        {req.graduation_qualifications && (
          <RequirementRow>
            {completeRequirement.grad_certificate ? (
              <BigCheckboxContainer>
                <BigCheckbox />
              </BigCheckboxContainer>
            ) : (
              <BigCheckboxContainer>
                <Xbox />
                </BigCheckboxContainer>
            )}
            <RequirementContainer>
              <RequirementTitle>졸업 자격증</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        )}

        {/* 졸업 필수과목 이수 */}
        {req.graduation_requirments && (
          <RequirementRow>
            {completeRequirement.grad_requirments ? (
              <BigCheckboxContainer>
                <BigCheckbox />
              </BigCheckboxContainer>
            ) : (
              <BigCheckboxContainer>
                <Xbox />
              </BigCheckboxContainer>
            )}
            <RequirementContainer>
              <RequirementTitle>졸업 필수과목 이수</RequirementTitle>
            </RequirementContainer>
          </RequirementRow>
        )}
      </RequirementBox>
    ));
  };

  return (
    <PageContainer>
    {/* 졸업 진행도 섹션 */}
      <Section1>
        <Title>졸업진행도</Title>
        <ProgressContainer>
        <ProgressBox title={"본전공\n이수율"} progress={completionRates.major} total={completionRates.total.major} />
          <ProgressBox title={"이중전공\n이수율"} progress={completionRates.doubleMajor} total={completionRates.total.doubleMajor} />
          <ProgressBox title={"교양\n이수율"} progress={completionRates.liberalArts} total={completionRates.total.liberalArts} />
          <ProgressBox title={"자율선택\n이수학점"} progress={completionRates.elective} total={completionRates.total.elective} />
        </ProgressContainer>
      </Section1>
      <SectionDivider>
        <Title2>내 졸업 요건</Title2>
      </SectionDivider>
      <Section2>
      {/* 본전공 섹션 */}
      
      <TitleWithArrow onClick={() => navigate('/depthrequire')}>
        
        <Title3>본전공</Title3>
        <DeepArrow />      
        <NoticeContainer onClick={(e) => { handleNoticeClick('major', e);}}>
          <Notice />
          </NoticeContainer>
      </TitleWithArrow>

      
      {requirements.main_major_conditions && renderRequirements(requirements.main_major_conditions.requirement, completeRequirement)}

      {/* 이중전공 섹션 */}
      
      {profileGibun && (
        <> 

        
        <TitleWithArrow2 onClick={handleClick}>
        



      <Title4>{profileGibun}</Title4>
      <DeepArrow />
      <NoticeContainer2 onClick={(e) => { handleNoticeClick('double_or_minor', e); }}>
          <Notice />
        </NoticeContainer2>
      </TitleWithArrow2>
      {profileGibun === '이중전공' && requirements.double_minor_major_conditions && (
      renderRequirements(requirements.double_minor_major_conditions.requirement, completeRequirement)
    )}
    
    {profileGibun === '부전공' && requirements.sub_major_conditions && (
      renderRequirements(requirements.sub_major_conditions.requirement, completeRequirement)
    )}
  </>
)}
      </Section2>
      {isModalOpen && modalContent && (
  <ModalBackground onClick={closeModal}>
    <NoticeModal onClick={(e) => e.stopPropagation()}>
        
    <ModalTitle>어학시험</ModalTitle>
    <ModalContent>
      <WrapperRow>
      <Image src="/img/Book.svg" alt="Request" />
        {modalContent.lang_test.basic && modalContent.lang_test.basic.length > 0 && (
          modalContent.lang_test.basic.map((test, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <StyledP style={{ marginRight: '10px' }}>{test.test_name} </StyledP>
              <StyledP2>{test.test_basic_score}점 이상</StyledP2>
            </div>
          ))
        )}
      </WrapperRow>

        <WrapperRow>
         <StyledP3>대체 가능 시험:</StyledP3>
        {modalContent.lang_test.etc && modalContent.lang_test.etc.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0px' }}>
            {modalContent.lang_test.etc.map((test, index) => (
              <StyledP4 key={index}>
                {test.test_name} : {test.test_basic_score} </StyledP4>
              
          ))}
        </div>
        )}
          </WrapperRow>
        {modalContent.extra_foreign_test && modalContent.extra_foreign_test.length > 0 && (
  <>
          <StyledP5>추가 어학 시험:</StyledP5>
          {modalContent.extra_foreign_test.map((extraTest, index) => (
            <StyledP6 key={index}>
              {extraTest.extra_test_name}: {extraTest.extra_test_basic_score}
            </StyledP6>
          ))}
        </>
      )}

        {modalContent.requirement_description && (
          <>
            <StyledP5>기타</StyledP5>
            <StyledP6>{modalContent.requirement_description}</StyledP6>
          </>
        )}




      </ModalContent>
    </NoticeModal>
  </ModalBackground>
)}
    </PageContainer>
  );
}



function ProgressBox({ title }) {
  const [progress, setProgress] = useState(0); // 이수율
  const [total, setTotal] = useState(54); // 기본 학점 총합, API에서 가져온 값으로 변경됨

  // API 호출하여 졸업 요건과 완료 학점 정보 가져오기
  const fetchCompletionData = async () => {
    try {
      const response = await axiosInstance.get('/api/requirements/graph/');
      const data = response.data;
      console.log('API Response:', data);

      if (!data.completed_credits || !data.required_credits) {
        throw new Error('필수 데이터가 없습니다');
      }

      const completedCredits = data.completed_credits || {}; 
      const requiredCredits = data.required_credits || {}; 

      let completionRate = 0;
      let totalCredits = 0;

      // 제목에 따라 적절한 값을 선택하여 이수율 계산
      switch (title) {
        case "본전공\n이수율":
          const mainMajorCredits = completedCredits.main_major_credits || 0;
          const mainMajorGraduationCredits = requiredCredits.main_major_graduation_credits || 0;
          if (mainMajorGraduationCredits > 0) {
            completionRate = (mainMajorCredits / mainMajorGraduationCredits) * 100;
            totalCredits = mainMajorGraduationCredits;
          }
          break;
        case "이중전공\n이수율":
          const doubleMajorCredits = completedCredits.double_minor_major_credits || 0;
          const doubleMajorGraduationCredits = requiredCredits.double_minor_major_graduation_credits || 0;
          if (doubleMajorGraduationCredits > 0) {
            completionRate = (doubleMajorCredits / doubleMajorGraduationCredits) * 100;
            totalCredits = doubleMajorGraduationCredits;
          }
          break;
        case "교양\n이수율":
          const liberalCredits = completedCredits.liberal_credits || 0;
          const liberalGraduationCredits = requiredCredits.liberal_graduation_credits || 0;
          if (liberalGraduationCredits > 0) {
            completionRate = (liberalCredits / liberalGraduationCredits) * 100;
            totalCredits = liberalGraduationCredits;
          }
          break;
        case "자율선택\n이수학점":
          const electiveCredits = completedCredits.elective_credits || 0;
          const totalElectiveCredits = requiredCredits.liberal_graduation_credits + electiveCredits;
          if (totalElectiveCredits > 0) {
            completionRate = (electiveCredits / totalElectiveCredits) * 100;
            totalCredits = totalElectiveCredits;
          }
          break;
        default:
          completionRate = 0;
      }

      // 완료율(progress) 및 총 학점(total) 상태 값 업데이트
      setProgress(completionRate); 
      setTotal(totalCredits); 
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  useEffect(() => {
    fetchCompletionData(); // 컴포넌트가 처음 렌더링될 때 API 호출
  }, [title]); // title이 변경될 때마다 다시 호출

  useEffect(() => {
    console.log('Progress:', progress); // progress 상태 확인
    console.log('Total:', total); // total 상태 확인
  }, [progress, total]);
  

  const current = Math.floor(progress * total / 100); // 완료된 학점 계산
  const isElective = title === "자율선택\n이수학점"; // 자율선택 학점은 별도 처리

  return (
    <ProgressBoxContainer>
      <TitleBox>{title}</TitleBox>
      <ProgressCircleContainer progress={progress / 100}>
        <ProgressCircleInner>
          <ProgressText>
            <CurrentText>{current}</CurrentText>
            {!isElective && <TotalText>/{total}</TotalText>}
          </ProgressText>
        </ProgressCircleInner>
      </ProgressCircleContainer>
      {!isElective ? (
        <PercentageText>{`${progress.toFixed(0)}%`}</PercentageText> // 퍼센트 표시
      ) : (
        <PercentageText>자율선택</PercentageText> // 자율선택인 경우 다른 표시
      )}
    </ProgressBoxContainer>
  );
}
