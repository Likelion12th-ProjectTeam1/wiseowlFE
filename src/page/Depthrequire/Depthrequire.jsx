import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../auth/axiosInstance';

const PageContainer = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  width: 390px;
  padding: 0 20px;
  padding-top: 100px;
  padding-bottom: 400px; //30px;
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
  width: 390px;
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
  flex: 1; /* 항목들이 동일하게 공간을 차지하도록 설정 */
  margin: 0 5px; /* 좌우 마진 추가 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 '...'으로 표시 */
  overflow: hidden; /* 넘친 텍스트 숨기기 */
  white-space: nowrap; /* 텍스트가 한 줄로 설정 */
`;

const SubjectItem2 = styled.div`
  font-size: 10.35px;
  color: #000000;
  text-align: center;
  flex: 1; /* 항목들이 동일하게 공간을 차지하도록 설정 */
  margin: 0 5px; /* 좌우 마진 추가 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 '...'으로 표시 */
  overflow: hidden; /* 넘친 텍스트 숨기기 */
  white-space: nowrap; /* 텍스트가 한 줄로 설정 */
  margin-right: -29px;
`;

const MajorSubjectItem = styled.div`
  font-size: 10.35px;
  color: #868686;
  text-align: center;
  flex: 1;
  margin: 0 5px;
  white-space: nowrap; /* 텍스트가 한 줄로 설정 */
  overflow: hidden; /* 넘친 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */
`;

const SubjectBox = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex; /* flexbox로 설정 */
  flex-direction: column; /* 세로 방향으로 설정 */
`;

const DataRow = styled.div`
  display: flex; /* 가로 방향으로 설정 */
  justify-content: space-between; /* 항목 간의 간격을 균등하게 분배 */
  margin-bottom: 5px; /* 각 행 간의 간격 추가 */
  width: 100%; /* 전체 너비 사용 */
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;  
  margin-bottom: 5px; 
  margin-left: -14px;
  width: 100%;
  color: #868686;
  font-weight: bold; 
`;

const TitleRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;  
  margin-bottom: 5px; 
  margin-left: -22px;
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
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewType, setViewType] = useState('main');  // 'main' -> 본전공, 'double_or_minor' -> 이중전공/부전공
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



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/requirements/required-subject/');
        console.log('응답 데이터:', response.data); // 응답 데이터 확인
        setData(response.data);

        // 졸업 이수율 및 총 이수 학점 계산
      if (response.data.completed_credits && response.data.required_credits) {
        const completedCredits = response.data.completed_credits[0];
        const requiredCredits = response.data.required_credits[0];

        // 각 항목의 졸업 이수율 계산
        const mainMajorCompletion = (completedCredits.main_major_credits / requiredCredits.main_major_graduation_credits) * 100;
        const doubleMajorCompletion = (completedCredits.double_minor_major_credits / requiredCredits.double_minor_major_graduation_credits) * 100;
        const liberalArtsCompletion = (completedCredits.liberal_credits / requiredCredits.liberal_graduation_credits) * 100;
        const electiveCompletion = (completedCredits.elective_credits / (requiredCredits.liberal_graduation_credits + completedCredits.elective_credits)) * 100;

        // 졸업 요건 총 학점
        setCompletionRates({
          major: mainMajorCompletion,
          doubleMajor: doubleMajorCompletion,
          liberalArts: liberalArtsCompletion,
          elective: electiveCompletion,
          total: {
            major: requiredCredits.main_major_graduation_credits,
            doubleMajor: requiredCredits.double_minor_major_graduation_credits,
            liberalArts: requiredCredits.liberal_graduation_credits,
            elective: completedCredits.elective_credits + requiredCredits.liberal_graduation_credits // 자율선택 학점은 교양학점 + 자율선택 학점으로 계산
          }
        });
      }

      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
        console.error('데이터 가져오기 오류:', err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  

  if (!data) {
    return <div>Loading...</div>;
  }

// 데이터가 정상적으로 로드되었을 때에만 처리하도록 조건 추가
const { main_major, main_major_required_courses, liberal_required_courses, double_major, profile_gibun, double_or_minor_required_courses } = data || {};

// profile_gibun이 있으면 join으로 이중전공/부전공 구분
const majorType = profile_gibun ? profile_gibun.join(' / ') : '';

// double_major가 없을 경우 빈 배열로 초기화
const doubleMajor = double_major || []; // 이중전공 정보

// majortype을 정의: profile_gibun의 첫 번째 값을 기준으로
const majortype = profile_gibun?.[0] || '이중전공/부전공';

// double_major에서 부서명이 있는 데이터를 찾아서 첫 번째 항목만 사용
const doubleMajorDepartment = doubleMajor?.[0]?.department_name || '이중전공/부전공';

// 상태 설정
const handleToggleView = () => {
  setViewType(viewType === 'main' ? 'double_or_minor' : 'main');
};

// 이중전공/부전공 보기일 때, 전공명은 상관없이 처리
const isDoubleOrMinorView = viewType === 'double_or_minor';


   


   // 이중전공/부전공 과목 필터링 (이중전공 / 부전공에 해당하는 과목만)
   const filteredCourses = double_or_minor_required_courses.filter(course => {
     return course.subject_department_name; // 여기에 더 구체적인 조건을 추가할 수 있음
   });



  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  
  return (
    <PageContainer>
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
        <Title3Container>
        <Title3>{viewType === 'main' ? '본전공 보기' : `${majorType} 보기`}</Title3>
          <MajorBox>
            <MajorText>
            {viewType === 'main'
              ? (main_major?.[0]?.department_name || '정보통신공학과')  // 본전공일 경우
              : (doubleMajor?.[0]?.department_name || '정보통신공학과')}  
              </MajorText>
          </MajorBox>
        </Title3Container>

        <Title4Container>
          <Title4>전공필수과목</Title4>
        </Title4Container>

        <TitleRow2>
          <MajorSubjectItem>이수여부</MajorSubjectItem>
          <MajorSubjectItem>과목코드</MajorSubjectItem>
          <MajorSubjectItem>교과목명</MajorSubjectItem>
        </TitleRow2>
        {/* 과목 목록 */}
        <SubjectBox>
        {viewType === 'main' && main_major_required_courses && main_major_required_courses.map((course) => (
          <DataRow key={course.subject_department_code}>
            <CompletionStatus isCompleted={course.completion_status}>
              {course.completion_status ? '이수완료' : '미완료'}
            </CompletionStatus>
            <SubjectItem2>{course.subject_department_code}</SubjectItem2>
            <SubjectItem>{course.subject_department_name}</SubjectItem>
          </DataRow>
        ))}

        {viewType === 'double_or_minor' && filteredCourses && filteredCourses.map((course) => (
          <DataRow key={course.subject_department_code}>
            <CompletionStatus isCompleted={course.completion_status}>
              {course.completion_status ? '이수완료' : '미완료'}
            </CompletionStatus>
            <SubjectItem2>{course.subject_department_code}</SubjectItem2>
            <SubjectItem>{course.subject_department_name}</SubjectItem>
          </DataRow>
        ))}
        </SubjectBox>

        <Title5Container>
          <Title5>교양필수과목</Title5>
        </Title5Container>

        <TitleRow>
          <MajorSubjectItem>이수여부</MajorSubjectItem>
          <MajorSubjectItem>과목코드</MajorSubjectItem>
          <MajorSubjectItem>영역</MajorSubjectItem>
          <MajorSubjectItem>교과목명</MajorSubjectItem>
        </TitleRow>
        <SubjectBox>
          {liberal_required_courses.map((course) => (
            <DataRow key={course.subject_gened_code}>
              <CompletionStatus isCompleted={course.completion_status}>
                {course.completion_status ? '이수완료' : '미완료'}
              </CompletionStatus>
              <SubjectItem>{course.subject_gened_code}</SubjectItem>
              <SubjectItem>{course.gen_category_name}</SubjectItem>
              <SubjectItem>{course.subject_gened_name}</SubjectItem>
            </DataRow>
          ))}
        </SubjectBox>

        <ButtonContainer>
        <Button onClick={handleToggleView}>
        {viewType === 'main' ? `${majortype} 보기` : '본전공 보기'}
          </Button>
        </ButtonContainer>
      </Section2>
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

      const completedCredits = data.completed_credits[0] || {}; // completed_credits 배열이 비어 있을 수 있으므로 안전하게 접근
      const requiredCredits = data.required_credits[0] || {}; // required_credits 배열이 비어 있을 수 있으므로 안전하게 접근

      let completionRate = 0;
      let totalCredits = 0;

      // 제목에 따라 적절한 값을 선택하여 이수율 계산
      switch (title) {
        case "본전공\n이수율":
          const mainMajorCredits = completedCredits.main_major_credits || 0;
          const mainMajorGraduationCredits = requiredCredits.main_major_graduation_credits || 0;
          if (mainMajorGraduationCredits > 0) {
            completionRate = (mainMajorCredits / mainMajorGraduationCredits) * 100;
            totalCredits = mainMajorGraduationCredits; // 총 이수해야 하는 학점
          }
          break;
        case "이중전공\n이수율":
          const doubleMajorCredits = completedCredits.double_minor_major_credits || 0;
          const doubleMajorGraduationCredits = requiredCredits.double_minor_major_graduation_credits || 0;
          if (doubleMajorGraduationCredits > 0) {
            completionRate = (doubleMajorCredits / doubleMajorGraduationCredits) * 100;
            totalCredits = doubleMajorGraduationCredits; // 이중전공 이수 학점
          }
          break;
        case "교양\n이수율":
          const liberalCredits = completedCredits.liberal_credits || 0;
          const liberalGraduationCredits = requiredCredits.liberal_graduation_credits || 0;
          if (liberalGraduationCredits > 0) {
            completionRate = (liberalCredits / liberalGraduationCredits) * 100;
            totalCredits = liberalGraduationCredits; // 교양 이수 학점
          }
          break;
        case "자율선택\n이수학점":
          const electiveCredits = completedCredits.elective_credits || 0;
          const totalElectiveCredits = requiredCredits.liberal_graduation_credits + electiveCredits;
          if (totalElectiveCredits > 0) {
            completionRate = (electiveCredits / totalElectiveCredits) * 100;
            totalCredits = totalElectiveCredits; // 자율선택 학점
          }
          break;
        default:
          completionRate = 0;
      }

      setProgress(completionRate); // 계산된 이수율 저장
      setTotal(totalCredits); // total 값 업데이트
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  useEffect(() => {
    fetchCompletionData(); // 컴포넌트가 처음 렌더링될 때 API 호출
  }, [title]); // title이 변경될 때마다 다시 호출

  // total이 업데이트 될 때마다 실행
  useEffect(() => {
    console.log('Updated Total:', total); // total 값이 변경될 때마다 로그 출력
  }, [total]); // total이 변경될 때마다 실행

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
