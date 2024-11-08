import React, { useState } from "react";
import styled from "styled-components";
import InfoHeader2 from "./components/infoheader2";
import DropDown from "../../component/DropDown";

const CautionText = styled.h5`
  color: #a3a3a3;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  width: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; 
`;

const FormArea = styled.div`
  width: 90%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
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
  padding: 20px;
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #f5f6fb;
  color: #737373;
`;

const ClassText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-left: 40px;
  margin-top: 7px;
`;

const GradeText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-left: 100px;
  margin-top: 7px;
`;

const AddClassButton = styled.div`
  width: 50%;
  height: 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 60px;
`;

const AddFormButton = styled.div`
  width: 60%;
  height : 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;

const EnterButton = styled.div`
  width: 80%;
  height : 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`


export default function InfoTwo() {
  const [forms, setForms] = useState([<FormComponent key={0} />]);

  const addForm = () => {
    setForms([...forms, <FormComponent key={forms.length} />]);
  };

  return (
    <div className="page-container">
      <InfoHeader2 />
      <CautionText>미입력시 해당 학기는 미이수로 인정됩니다.</CautionText>
      {/* <CautionText>미입력시 해당 학기는 미이수로 인정됩니다.</CautionText>
      <FormArea>
        {forms}
      </FormArea>
      <AddFormButton onClick={addForm}>학기 추가하기</AddFormButton>
      <EnterButton>확인</EnterButton> */}
    </div>
  );
}

const FormComponent = () => {
  const [classes, setClasses] = useState([<ClassRow key={0} />]);

  const addClass = () => {
    setClasses([...classes, <ClassRow key={classes.length} />]);
  };

  return (
    <FormContainer>
      <DropdownContainer>
        <DropDown />
      </DropdownContainer>
      <Form>
        <FormHeader>
          <ClassText>과목명</ClassText>
          <GradeText>성적</GradeText>
        </FormHeader>
        {classes}
        <AddClassButton onClick={addClass}>수강과목추가</AddClassButton>
      </Form>
    </FormContainer>
  );
};

const ClassRow = () => (
  <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
    <input type="text" placeholder="과목명 입력" style={{ marginRight: '20px', width: '60%' }} />
    <input type="text" placeholder="성적 입력" style={{ width: '30%' }} />
  </div>
);
