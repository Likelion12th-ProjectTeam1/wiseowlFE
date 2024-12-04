import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DropDown3 from '../../component/DropDown3';
import DropDown4 from '../../component/DropDown4';
import DropDown5 from '../../component/DropDown5';
import axiosInstance from '../../auth/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: flex-start; 
  min-height: 100vh; 
  text-align: left; 
  padding-top: 50px; 
  padding-left: 38px; 
  width: 390px;
`;

const ImageWrapper = styled.div`
  width: 200px; 
  align-self: flex-end;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -30px;
`;

const HighlightedText = styled.p`
  font-size: 22px;
  color: #000000;
  margin-top: -60px;
  text-align: left; 
  font-weight: 500;
  font-family: Inter;
`;

const InstructionText = styled.p`
  font-size: 11px;
  font-weight: 500;
  margin-top: 20px;
  max-width: 600px;
  white-space: pre-line;
  color: #A3A3A3;
  text-align: left;
  font-family: Inter;
`;

const RequestText = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px; 
  color: #000000;
  text-align: left;
  font-family: Inter;
`;

const PText = styled.p`
  font-size: 11.5px;
  margin-bottom: 5px; 
  color: #000000;
  font-weight: 500;
  font-family: Inter;
`;

const MajorDText = styled.p`
  font-size: 11.5px;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #000000;
`;

const MajorText = styled.p`
  font-size: 11.5px;
  margin-top: 20px; 
  margin-bottom: 5px;
  color: #000000;
`;

const MajorWrapper = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 100%; 
  margin-top: 10px; 
  gap: 40px;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
  margin-top: 200px;
  margin-bottom: 20px; 
  margin-left: -30px;
  
`;

const SubmitButton = styled.button`
  background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
  color: ${props => props.disabled ? '#959595' : '#FFFFFF'};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13.4px;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 258px;
  height: 40px;
  margin-left: 20px;
  
  &:hover {
    background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
  }

  &:active {
    background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
  }
`;

export default function Request() {
  const [colleges, setColleges] = useState([]); // 단과대 목록 상태
  const [selectedCollege, setSelectedCollege] = useState(null); // 선택된 단과대 상태
  const [majors, setMajors] = useState([]); // 전공 목록 상태
  const [selectedMajor, setSelectedMajor] = useState(""); // 선택된 전공 상태
  const [selectedYear, setSelectedYear] = useState(''); // 학번 선택 상태
  const [isAllRequiredChecked, setIsAllRequiredChecked] = useState(false); // 모든 선택이 완료되었는지 확인
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    // 단과대 목록을 가져오는 API 호출
    const fetchColleges = async () => {
      try {
        const response = await axiosInstance.get('/api/requirements/colleges/');
        setColleges(response.data.colleges); // API 응답에서 단과대 목록 설정
      } catch (error) {
        console.error("단과대 목록을 가져오는 데 오류가 발생했습니다:", error);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    // 선택된 단과대에 따라 전공 목록 업데이트
    if (selectedCollege) {
      const selected = colleges.find(college => college.college_name === selectedCollege);
      setMajors(selected ? selected.majors : []);
      setSelectedMajor(""); // 전공 초기화
    }
  }, [selectedCollege, colleges]);

  useEffect(() => {
    // 모든 드롭다운이 선택되었는지 체크
    if (selectedYear && selectedCollege && selectedMajor) {
      setIsAllRequiredChecked(true); // 모든 값이 선택되었으면 버튼 활성화
    } else {
      setIsAllRequiredChecked(false); // 하나라도 선택되지 않으면 버튼 비활성화
    }
  }, [selectedYear, selectedCollege, selectedMajor]);

  const handleSubmit = async () => {
    // 학번에서 숫자만 추출하여 `request_number`에 보내기
    const requestNumber = parseInt(selectedYear, 10); // 숫자만 추출

    const requestData = {
      request_number: requestNumber, // 숫자형으로 학번을 전달
      request_college: selectedCollege,
      request_department: selectedMajor
    };

    // 요청 데이터를 콘솔에 출력
    console.log("보내는 데이터:", requestData); 

    try {
      // API에 POST 요청 보내기
      const response = await axiosInstance.post('/api/accounts/request/student-number/', requestData);
      console.log("API 응답:", response.data); // API 응답을 로그로 출력
      navigate("/requestaccept"); // 성공적으로 요청 후 페이지 이동
    } catch (error) {
      console.error("요청을 보내는 데 오류가 발생했습니다:", error);
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src="/img/accept.svg" alt="Request" />
      </ImageWrapper>

      <HighlightedText>
        잠깐! <br />
        혹시 해당하는 학번이 없으신가요?
      </HighlightedText>

      <InstructionText>
        와이즈올은 원활한 서비스 제공을 위해 21학번
        <br />
        이전 학번은 요청을 통해 서비스 제공을 하고 있습니다.
      </InstructionText>

      <RequestText>
        원하시는 학번을 요청해주세요.
      </RequestText>

      <PText>학번</PText>
      <DropDown3 selectedYear={selectedYear} setSelectedYear={setSelectedYear} />

      <MajorWrapper>
        <div>
          <MajorDText>본전공 단과대</MajorDText>
          <DropDown4 colleges={colleges} selectedCollege={selectedCollege} setSelectedCollege={setSelectedCollege} />
        </div>
        <div>
          <MajorText>본전공</MajorText>
          <DropDown5 majors={majors} selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} />
        </div>
      </MajorWrapper>

      <SubmitButtonWrapper>
        <SubmitButton onClick={handleSubmit} disabled={!isAllRequiredChecked}>
          신청하기
        </SubmitButton>
      </SubmitButtonWrapper>
    </Container>
  );
}
