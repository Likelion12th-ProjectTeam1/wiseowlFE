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
  padding-left: 50px; 
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
  font-weight: 100;
  color: #000000;
  margin-top: -60px;
  text-align: left; 
`;

const InstructionText = styled.p`
  font-size: 11px;
  font-weight: 300;
  margin-top: 20px;
  max-width: 600px;
  white-space: pre-line;
  color: #A3A3A3;
  text-align: left;
`;

const RequestText = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px; 
  color: #000000;
  text-align: left;
`;

const PText = styled.p`
  font-size: 11.5px;
  margin-bottom: 5px; 
  color: #000000;
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
  margin-right: 100px;
`;

const SubmitButton = styled.button`
  background-color: #ECECEC;
  color: #959595;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13.4px;
  font-weight: bold;
  cursor: pointer;
  width: 258px;
  height: 40px;
  margin-left: -70px;
  
  &:hover {
    background-color: rgb(169, 168, 168);
  }

  &:active {
    background-color: #959595;
  }
`;

export default function Request() {
  const [colleges, setColleges] = useState([]); // 단과대 목록 상태
  const [selectedCollege, setSelectedCollege] = useState(null); // 선택된 단과대 상태
  const [majors, setMajors] = useState([]); // 전공 목록 상태
  const [selectedMajor, setSelectedMajor] = useState(""); // 선택된 전공 상태
  const [selectedYear, setSelectedYear] = useState(''); // 학번 선택 상태
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
        <Image src="/img/request2.jpg" alt="Request" />
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
        <SubmitButton onClick={handleSubmit}>
          신청 하기
        </SubmitButton>
      </SubmitButtonWrapper>
    </Container>
  );
}
