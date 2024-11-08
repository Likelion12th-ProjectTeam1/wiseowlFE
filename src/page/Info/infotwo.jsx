import React, { useState } from "react";
import styled from "styled-components";
import InfoHeader2 from "./components/infoheader2";
import DropDown2 from "../../component/DropDown2";

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
  width: 40%;
  height: 10%;
  margin-bottom: 20px;
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
  padding: 10px;
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
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;

export default function InfoTwo() {
  const [forms, setForms] = useState([<FormComponent key={0} />]);

  const addForm = () => {
    setForms([...forms, <FormComponent key={forms.length} />]);
  };

  return (
    <div className="page-container">
      <InfoHeader2 />
      <CautionText>미입력시 해당 학기는 미이수로 인정됩니다.</CautionText>
      <FormArea>
        {forms}
        <AddFormButton onClick={addForm}>학기 추가하기</AddFormButton>
        <EnterButton>WiseOwl 시작하기</EnterButton>
      </FormArea>
    </div>
  );
}

const FormComponent = () => {
  const [classes, setClasses] = useState([{ id: 0, name: '', grade: '', credits: '' }]);
  const mockdata = {
    "subject_department_id": 4,
    "subject_department_name": "통계학개론",  // 여기에서 과목명이 "통계학개론"
    "subject_department_professor": "최대우",
    "subject_department_credit": 3,
    "subject_department_date": "수56 금4",
    "subject_department_rmn": "0304"
  };

  const addClass = () => {
    setClasses([...classes, { id: classes.length, name: '', grade: '', credits: '' }]);
  };

  return (
    <FormContainer>
      <DropdownContainer>
        <DropDown2 />
      </DropdownContainer>
      <Form>
        <FormHeader>
          <ClassText>재수강</ClassText>
          <ClassText>과목명</ClassText>
          <GradeText>성적</GradeText>
          <GradeText>학점</GradeText>
        </FormHeader>
        <FormBody>
          {classes.map((subject, index) => (
            <ClassRow
              key={index}
              subject={subject}
              mockdata={mockdata}
              onChange={(field, value) =>
                setClasses((prevClasses) =>
                  prevClasses.map((s, idx) =>
                    idx === index ? { ...s, [field]: value } : s
                  )
                )
              }
            />
          ))}
          <AddClassButton onClick={addClass}>수강과목추가</AddClassButton>
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

const ClassRow = ({ subject, onChange, mockdata }) => (
  <div style={{ display: "flex", flexDirection: "row", marginTop: "10px", alignItems: "center" }}>
    <input
      type="checkbox"
      style={{ marginLeft: "15px" }}
    />
    <FormText>{mockdata.subject_department_name}</FormText>
    <input
      type="text"
      placeholder="성적 입력"
      value={subject.grade}
      onChange={(e) => onChange("grade", e.target.value)}
      style={{ width: "20%", marginLeft: "30px",marginRight: "15px" }}
    />
    <FormText>{mockdata.subject_department_credit}</FormText>
  </div>
);
