import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 390px;
    height: 500px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
`;

const ModalBack = styled.h4`
    color: #A3A3A3;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    margin-left: auto;
    margin-right: 30px;
    margin-top: 20px;
`;

const Bar = styled.div`
    width: 30%;
    height: 5px;
    background-color: black;
`;

const BarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

const BigContainer = styled.div`
    width: 30%;
    height: 500px;
    display: flex;
    flex-direction: column;
`;

const BigText = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
`;

const MajorContainer = styled.div`
    width: 70%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ClassContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const ClassButton = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    background: #dde1f3;
    border-radius: 7px;
    padding: 10px;
    margin-left: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.2s ease, border 0.2s ease;

    /* active 상태에 따라 스타일 지정 */
    border: ${({ isActive }) => (isActive ? "1px solid #5D96E8" : "none")};

    &:hover {
        border: 1px solid #5D96E8;
        transform: scale(1.1);
    }
`;

const ClassTitle = styled.h3`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
`;

const InfoName = styled.h4`
    color: #AFAFB1;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
`;

const InfoText = styled.h4`
    color: #AFAFB1;
    font-family: Inter;
    font-size: 11px;
    font-weight: 500;
    margin-left: 20px;
    margin-top: 3px;
`;

const DayText = styled.h4`
    color: #AFAFB1;
    font-family: Inter;
    font-size: 11px;
    font-weight: 500;
    margin-top: 5px;
`;


const mockData = {
  subject_department: [
    {
      department_id: 1,
      department_name: "통계학과",
      courses: [
        {
          subject_department_id: 1,
          subject_department_name: "통계학개론",
          subject_department_professor: "최대우",
          subject_department_credit: 3,
          subject_department_date: "수56 금4",
          subject_department_rmn: "0304",
        },
        {
          subject_department_id: 2,
          subject_department_name: "고급통계학",
          subject_department_professor: "이수연",
          subject_department_credit: 4,
          subject_department_date: "화34 목56",
          subject_department_rmn: "1020",
        },
        {
          subject_department_id: 3,
          subject_department_name: "데이터 분석 개론",
          subject_department_professor: "박영민",
          subject_department_credit: 3,
          subject_department_date: "월12 수34",
          subject_department_rmn: "0405",
        },
      ],
    },
  ],
};

export default function SubjectModal2() {
    const department = mockData.subject_department[0];
    const [activeButton, setActiveButton] = useState(null);

    return (
        <Container>
        <ModalHeader>
            <ModalBack>건너뛰기</ModalBack>
        </ModalHeader>
        <ModalContainer>
            <BigContainer>
            <BarContainer>
                <Bar />
                <BigText>{department.department_name}</BigText>
            </BarContainer>
            </BigContainer>
            <MajorContainer>
            <ClassContainer>
                {department.courses.map((course) => (
                <ClassButton key={course.subject_department_id}
                isActive={activeButton === course.subject_department_id}
                onClick={() => setActiveButton(course.subject_department_id)}>
                    <ClassTitle>{course.subject_department_name}</ClassTitle>
                    <InfoContainer>
                    <InfoName>{course.subject_department_professor}</InfoName>
                    <InfoText>{`전공 ${course.subject_department_credit}학점`}</InfoText>
                    </InfoContainer>
                    <DayText>
                    {course.subject_department_date} ({course.subject_department_rmn})
                    </DayText>
                </ClassButton>
                ))}
            </ClassContainer>
            </MajorContainer>
        </ModalContainer>
        </Container>
    );
}
