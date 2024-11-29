import styled from "styled-components";
import InfoHeader from "./components/infoheader";
import axiosInstance from "../../auth/axiosInstance";
import { Select } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameContainer = styled.div`
  width: 100%;
  height : 10%;
  flex-direction : column;
  margin-top: 100px;
  margin-left: 80px;
`

const MiddleContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

const MajorContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 80px;
`;



const SecondmajorContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-left: 80px;
`;

const DropDownContainer = styled.div`
  width: 150px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 14.486px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;

const NameInput = styled.input`
  width: 229px;
  height: 31px;
  border-radius: 4px;
  border: 1.811px solid #D9D9D9;
  margin-bottom: 15px;
  padding-left: 14.16px;
`

const ButtonTitle = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 14.486px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  margin-left: 45px;
`;

const CautionText = styled.h5`
  color: #a3a3a3;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 50px;
`;

const ChooseContainer = styled.div`
  width: 390px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin-top: 52px;
`;

const ButtonContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ButtonContainer2 = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MajorButton = styled.div`
  width: 98px;
  height: 31px;
  border-radius: 16px;
  border: 1.811px solid ${(props) => (props.isActive ? "#5D96E8" : "#D9D9D9")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5D96E8;
  font-family: Inter;
  font-size: 14.486px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
  margin-top: 10px;
  text-overflow: ellipsis;
  transition: border 0.3s;

  color: ${(props) =>
    props.isActive ? "#5D96E8" : "#A09F9F"}; /* 텍스트 색 변경 */

  &:hover {
    border: 1.811px solid #5d96e8;
    color: #5d96e8;
  }
`;

const MajorButton2 = styled.div`
  width: 150px;
  height: 31px;
  border-radius: 16px;
  border: 1.811px solid ${(props) => (props.isActive ? "#5D96E8" : "#D9D9D9")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5D96E8;
  font-family: Inter;
  font-size: 14.486px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
  margin-top: 10px;
  text-overflow: ellipsis;
  transition: border 0.3s;

  color: ${(props) =>
    props.isActive ? "#5D96E8" : "#A09F9F"}; /* 텍스트 색 변경 */

  &:hover {
    border: 1.811px solid #5d96e8;
    color: #5d96e8;
  }
`;

const CustomSelect = styled(Select)` // antd의 Select로 사용
  width: 120px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  .ant-select-selector {
    height: 30px !important;
    border-radius: 4px !important;
    border: 2.811px solid #E8E8E8 !important;
    background: #FFF !important;
    color: #000 !important;
    display: flex;
    align-items: center;
  }
`;

const NextButton = styled.div`
  width: 239px;
  height: 49px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  top: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export default function Info() {
  const [choose, setChoose] = useState("이중전공");
  const [data , setData] = useState(null);
  const [error, setError] = useState(null);
  const [colleges, setColleges] = useState([]); // 전체 단과대 데이터
  const [selectedCollege, setSelectedCollege] = useState(null); // 선택된 단과대 ID를 저장
  const [selectedCollegeData, setSelectedCollegeData] = useState(null); // 선택된 단과대 데이터를 저장
  const [majors, setMajors] = useState([]); // 선택된 단과대의 학과 데이터
  const [name , setName] = useState("");
  const [number , setNumber] = useState("");
  const [major , setMajor] = useState("");
  const [doublecollege , setDoublecollege] = useState(null);
  const [doublemajor , setDoublemajor] = useState("");
  const [selectedCollegeId, setSelectedCollegeId] = useState(null); // 단과대 ID만 저장
  const [activeButton, setActiveButton] = useState("이중전공"); // 활성화된 버튼 상태
  const navigate = useNavigate();

  const goToNextpage = () => {
        navigate("/infotwo");
        PostData();
    };


    const HandleChoose = (value) => {
        setChoose(value);
      setActiveButton(value); // 버튼 스타일용으로는 클릭된 버튼을 활성화
    };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(
                `/api/requirements/colleges/`
            );
            setData(response.data); // 데이터 저장
            console.log(response.data); // 데이터 출력
        } catch (err) {
            setError("데이터를 불러오는 중 오류가 발생했습니다.");
            console.error("Error fetching data:", err);
        }
    };

    fetchData();
}, []);

const PostData = async () => {
  try {
    const requestBody = {
      profile_name: name, // 이름
      profile_student_number: parseInt(number), // 학번 (정수형 변환)
      major_college_id: selectedCollegeId, // 단과대 ID
      major_id: parseInt(major), // 본전공 ID (정수형 변환)
      profile_gubun: choose, // 이중전공/부전공/전공심화
      double_or_minor_college_id: doublecollege, // 이중/부전공 단과대 ID
      double_or_minor_id: parseInt(doublemajor) // 이중/부전공 전공 ID (정수형 변환)
  };

  console.log("패치 성공:", requestBody);

      // PATCH 요청 보내기
      const response = await axiosInstance.post(
          "/api/accounts/department-info/",
          requestBody
      );

      console.log("패치 성공:", response.data);
  } catch (err) {

      setError("데이터를 업데이트하는 중 오류가 발생했습니다.");
      console.error("Error updating data:", err);
  }
};

  const handleName = (e) => {
    setName(e.target.value)
    console.log(name);
    
  }

  const handleNumber = (value) => {
    setNumber(value);
    console.log(value); 
  }


  return (
    <PageContainer>
      <InfoHeader />
      <NameContainer>
        <ContentText>이름</ContentText>
        <NameInput placeholder="이름을 입력해주세요" value = {name} onChange = {handleName}/>
        <ContentText>학번</ContentText>
        <CustomSelect onChange={(value) => handleNumber(value)}>
          <Select.Option value="21" onClick= {handleNumber}>21학번</Select.Option>
          <Select.Option value="22" onClick= {handleNumber}>22학번</Select.Option>
          <Select.Option value="23" onClick= {handleNumber}>23학번</Select.Option>
          <Select.Option value="24" onClick= {handleNumber}>24학번</Select.Option>
        </CustomSelect>
      </NameContainer>
      <MajorContainer>
        <DropDownContainer>
          <ContentText>단과대</ContentText>
            <CustomSelect
              placeholder="단과대를 선택하세요"
              style={{ width: "300px" }}
              onChange={(value) => {
                // 선택된 단과대 객체를 찾음
                const selectedCollege = data.colleges.find(college => college.college_id === value);

                // 선택된 단과대의 ID만 저장
                setSelectedCollegeId(selectedCollege ? selectedCollege.college_id : null);

                // 선택된 단과대의 전공 목록을 업데이트
                setMajors(selectedCollege ? selectedCollege.majors : []);

                // 선택된 단과대 ID 출력
                console.log("선택된 단과대 ID:", selectedCollege ? selectedCollege.college_id : null);
              }}
            >
              {data && data.colleges && data.colleges.map((college) => (
                <Select.Option key={college.college_id} value={college.college_id}>
                  {college.college_name}
                </Select.Option>
              ))}
            </CustomSelect>
        </DropDownContainer>
        <DropDownContainer>
          <ContentText>본전공</ContentText>
          <CustomSelect
            placeholder="전공을 선택하세요"
            style={{ width: "300px" }}
            onChange={(value) => {
              setMajor(value); // 선택된 전공 ID를 상태에 저장
              console.log("선택된 전공 ID:", value); // 선택된 값 확인
            }}
          >
            {majors && majors.map((major) => (
              <Select.Option key={major.department_id} value={major.department_id}>
                {major.department_name}
              </Select.Option>
            ))}
          </CustomSelect>
        </DropDownContainer>
      </MajorContainer>
      <ChooseContainer>
        <ButtonTitle>이중전공 및 부전공</ButtonTitle>
        <ButtonContainer>
          <MajorButton
            isActive={activeButton === "이중전공"}
            onClick={() => HandleChoose("이중전공")}
          >
            이중전공
          </MajorButton>
          <MajorButton
            isActive={activeButton === "부전공"}
            onClick={() => HandleChoose("부전공")}
          >
            부전공
          </MajorButton>
          <MajorButton
            isActive={activeButton === "전공심화"}
            onClick={() => HandleChoose("전공심화")}
          >
            전공심화
          </MajorButton>
        </ButtonContainer>
        <ButtonContainer2>
          <MajorButton2
            isActive={activeButton === "전공심화+부전공"}
            onClick={() => HandleChoose("전공심화+부전공")}
          >
            전공심화+부전공
          </MajorButton2>
        </ButtonContainer2>
      </ChooseContainer>
      {choose !== "전공심화" && (
        <SecondmajorContainer>
          <DropDownContainer>
          <ContentText>
                {(() => {
                  if (choose === "전공심화+부전공") {
                    return "부전공";
                  }
                  return `${choose} 단과대`;
                })()}
          </ContentText>
            <CustomSelect
              placeholder="단과대를 선택하세요"
              style={{ width: "300px" }}
              onChange={(value) => {
                // 선택한 단과대 찾기
                const selectedCollege = data.colleges.find(college => college.college_id === value);

                // 해당 단과대 ID 저장
                setDoublecollege(selectedCollege ? selectedCollege.college_id : null);

                // 해당 단과대의 전공 목록 업데이트
                setMajors(selectedCollege ? selectedCollege.majors : []);

                // 선택된 단과대 출력
                console.log("선택된 double 단과대 ID:", selectedCollege ? selectedCollege.college_id : null);
              }}
            >
              {data && data.colleges && data.colleges.map((college) => (
                <Select.Option key={college.college_id} value={college.college_id}>
                  {college.college_name}
                </Select.Option>
              ))}
            </CustomSelect>
          </DropDownContainer>
          <DropDownContainer>
            <ContentText>전공</ContentText>
            <CustomSelect
              placeholder="전공을 선택하세요"
              style={{ width: "300px" }}
              onChange={(value) => {
                // 선택된 전공 ID 저장
                setDoublemajor(value);

                // 선택된 전공 출력
                console.log("선택된 double 전공 ID:", value);
              }}
            >
              {majors && majors.map((major) => (
                <Select.Option key={major.department_id} value={major.department_id}>
                  {major.department_name}
                </Select.Option>
              ))}
            </CustomSelect>
          </DropDownContainer>
        </SecondmajorContainer>
      )}
      <CautionText>
        학과정보를 입력하지 않으시면 이수과목을 입력할 수 없습니다.
      </CautionText>
      <NextButton onClick = {goToNextpage}>다음</NextButton>
    </PageContainer>
  );
}
