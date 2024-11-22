import React, { useState } from "react";
import styled from "styled-components";
import InfoHeader2 from "./components/infoheader2";
import { LuMinusCircle } from "react-icons/lu";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const CautionText = styled.h5`
  color: #a3a3a3;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  margin-top: 70px;
  margin-right: 90px;
`;

const FormContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const FormArea = styled.div`
  width: 90%;
  max-height: 600px;
  display: flex;
  flex-direction: column;  // 폼들을 세로로 나열
  gap: 20px;
  align-items: center;
  overflow: auto;
  padding: 10px;
  transition: max-height 0.3s ease;
`;

const DropdownContainer = styled.div`
  width: 80%;
  height: 10%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const Form = styled.div`
  width: 100%;
  background: #fbfbfb;
  box-shadow: 0px 1px 2.1px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;  // 폼 크기 조절되지 않도록 설정
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #f5f6fb;
  color: #737373;
  align-items: center;
`;

const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const FormFooter = styled.div`
  width : 100%;
  height : 30px;
  display : flex;
  flex-direction: row;
  background: #f5f6fb;
  color: #737373;
  align-items: center;
`

const ClassText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-right: 25px;
  margin: 7px;
`;

const GradeText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-left: 50px;
`;

const FormText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left : 20px;
`

const FooterText = styled.h4`
  color: #5D96E8;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 20px;
` 

const AvgText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left : auto;
`

const TotalText = styled.h4`
  color: #ACA8A8;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right : 40px;
`

const AddClassButton = styled.div`
  width: 50%;
  min-height: 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
`;

const AddFormButton = styled.div`
  width: 60%;
  min-height: 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 100px;
`;

const EnterButton = styled.div`
  width: 80%;
  min-height: 40px;
  border-radius: 33px;
  border: 1px solid #5D96E8;
  background: #FFF;
  color : #5D96E8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;

const SemesterContainer = styled.div`
  width : 120px;
  height : 30px;
  padding : 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2.811px solid #E8E8E8;
  background: #FFF;
  margin-left: 15px;
`

const SemesterText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`

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

const GradeSelect = styled(Select)` // antd의 Select로 사용
  width: 70px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  margin-left: 18px;
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

export default function InfoTwo() {
    const [forms, setForms] = useState([<FormComponent key={0} semester="1학년 1학기" />]); // Initial semester for first form
    const [formsyear, setFormsyear] = useState([
      { key: 0, year: "1학년 1학기" },
      { key: 1, year: "1학년 2학기" },
      { key: 2, year: "2학년 1학기" },
      { key: 3, year: "2학년 2학기" },
      { key: 4, year: "3학년 1학기" },
      { key: 5, year: "3학년 2학기" },
      { key: 6, year: "4학년 1학기" },
      { key: 7, year: "4학년 2학기" },
    ]);
  
    const addForm = () => {
      const newKey = forms.length;
      setForms([...forms, <FormComponent key={newKey} semester={formsyear[newKey].year} />]); // Pass new semester year to FormComponent
    };
  
    return (
      <div className="page-container">
        <InfoHeader2 />
        <CautionText>미입력시 해당 학기는 미이수로 인정됩니다.</CautionText>
        <FormArea>
          {forms}
          <AddFormButton onClick={addForm}>학기 추가하기</AddFormButton>
          <EnterButton>시작하기</EnterButton>
        </FormArea>
      </div>
    );
  }

  const FormComponent = ({ semester }) => { // Accept semester as prop
    const [selectedSemester, setSelectedSemester] = useState(null);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([
      {
        id: 0,
        subject_name: "컴퓨터사고",
        grade: "",
        credits: "3",
        retry_yn: false,
      },
    ]);
  
    const addClass = () => {
      const newCourse = {
        id: courses.length,
        subject_name: "",
        grade: "",
        credits: "",
        retry_yn: false,
      };
      setCourses([...courses, newCourse]);
      console.log(selectedSemester);
      navigate("/subjectmodal", { state: { selectedSemester } });
    };
  
    const handleDelete = (id) => {
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
    };
  
    const handleCheckboxChange = (id) => {
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === id ? { ...course, retry_yn: !course.retry_yn } : course
        )
      );
    };
  
    const handleFieldChange = (id, field, value) => {
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === id ? { ...course, [field]: value } : course
        )
      );
    };
  
    return (
      <FormContainer>
        <DropdownContainer>
        <CustomSelect
        value={selectedSemester}
        onChange={(value) => setSelectedSemester(value)}
        placeholder="학기 선택"
        >
            {/* Hardcoded years for now */}
            <Select.Option value="2021 1학기">2021 1학기</Select.Option>
            <Select.Option value="2021 2학기">2021 2학기</Select.Option>
            <Select.Option value="2022 1학기">2022 1학기</Select.Option>
            <Select.Option value="2022 2학기">2022 2학기</Select.Option>
          </CustomSelect>
          <SemesterContainer>
            <SemesterText>{semester}</SemesterText> {/* Display the passed semester */}
          </SemesterContainer>
        </DropdownContainer>
        <Form>
          <FormHeader>
            <ClassText>재수강</ClassText>
            <ClassText>과목명</ClassText>
            <GradeText>성적</GradeText>
            <GradeText>학점</GradeText>
          </FormHeader>
          <FormBody>
            {courses.map((course) => (
              <ClassRow
                key={course.id}
                course={course}
                onFieldChange={handleFieldChange}
                onDelete={handleDelete}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
            <AddClassButton onClick={addClass}>수강과목 추가</AddClassButton>
          </FormBody>
          <FormFooter>
            <FooterText>학기평점</FooterText>
            <AvgText>4.2</AvgText>
            <TotalText>/4.5</TotalText>
          </FormFooter>
        </Form>
      </FormContainer>
    );
  };

  const ClassRow = ({ course, onFieldChange, onDelete, onCheckboxChange }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "10px",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        style={{ marginLeft: "15px" }}
        checked={course.retry_yn}
        onChange={() => onCheckboxChange(course.id)}
      />
      <FormText>{course.subject_name || "과목명"}</FormText>
      <GradeSelect
        value={course.grade} // bind the select value to course grade
        onChange={(value) => onFieldChange(course.id, "grade", value)} // update grade
        placeholder="성적 선택"
      >
        <Select.Option value="A+">A+</Select.Option>
        <Select.Option value="A">A</Select.Option>
        <Select.Option value="B+">B+</Select.Option>
        <Select.Option value="B">B</Select.Option>
        <Select.Option value="C+">C+</Select.Option>
        <Select.Option value="C">C</Select.Option>
        <Select.Option value="D+">D+</Select.Option>
        <Select.Option value="D">D</Select.Option>
        <Select.Option value="F">F</Select.Option>
      </GradeSelect>
      <FormText>{course.credits}</FormText>
      <LuMinusCircle
        onClick={() => onDelete(course.id)}
        style={{
          width: "40px",
          cursor: "pointer",
          color: "#B1B0B0",
          marginLeft: "20px",
          paddingRight: "20px",
        }}
      />
    </div>
  );