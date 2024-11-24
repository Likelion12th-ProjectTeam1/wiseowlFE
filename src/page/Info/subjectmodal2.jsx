import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../auth/axiosInstance";

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
  color: #a3a3a3;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
  margin-right: 30px;
  margin-top: 20px;
  cursor: pointer;
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
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-top : 15px;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge에서 스크롤바 숨김 */
    }
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
  border: ${({ isActive }) => (isActive ? "1px solid #5D96E8" : "none")};
  &:hover {
    border: 1px solid #5d96e8;
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
  color: #afafb1;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
`;

const InfoText = styled.h4`
  color: #afafb1;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 3px;
`;

const DayText = styled.h4`
  color: #afafb1;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
`;
export default function SubjectModal2() {
  const navigate = useNavigate();
  const location = useLocation();
  const [subjectdata , setSubjectdata] = useState({});
  const selectedSemester = location?.state?.selectedSemester || "defaultSemester";
  const subjectyear = location?.state?.subjectyear || "defaultsubjectyear";
  const onevalue = location?.state?.textType || "defaulttextType";  
  const subjectkey = location?.state?.subjectkey || "defaultsubjectkey";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ subject_department: [], subject_generation: [] });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/requirements/colleges/${selectedSemester}/subjects/`
        );
        setData(response.data); // 데이터를 state에 저장
        console.log(response.data); // 가져온 데이터 출력
        console.log(subjectkey);
        
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSemester]);

  const fetchsubjectData = async ({subjectid}) => {
    try {

        const requestBody = {
              "school_year": subjectkey
        }

        const response = await axiosInstance.post(
            `/api/requirements/colleges/${subjectid}/department/subjects/add/`,
            requestBody
        );


        setSubjectdata(response.data); // 데이터 저장
        console.log(response.data); // 데이터 출력
    } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching data:", err);
        console.log(subjectkey);
        
    } finally {
        setLoading(false);
    }
};

  // `onevalue`에 해당하는 데이터를 `subject_department` 또는 `subject_generation`에서 찾음
  const department = data.subject_department.find(
    (dept) => dept.department_name === onevalue
  );

  const generation = data.subject_generation.find(
    (gen) => gen.gened_category_name === onevalue
  );

  // 현재 데이터 타입 결정
  const currentData = department || generation;
  const isDepartment = !!department;

  const handleback = () => {
    navigate("/infotwo");
}

const handlesubject = (subjectid) => {
  navigate("/infotwo", { state: { subjectid } });
  fetchsubjectData({subjectid});
  console.log(subjectid);
};

  return (
    <Container>
      <ModalHeader>
        <ModalBack onClick={handleback}>돌아가기</ModalBack>
      </ModalHeader>
      <ModalContainer>
        <BigContainer>
          <BarContainer>
            <Bar />
            <BigText>
              {currentData
                ? isDepartment
                  ? currentData.department_name
                  : currentData.gened_category_name
                : "카테고리를 찾을 수 없음"}
            </BigText>
          </BarContainer>
        </BigContainer>
        <MajorContainer>
          <ClassContainer>
            {currentData && currentData.courses ? (
              currentData.courses.map((course) => (
                <ClassButton key={course.subject_department_id || course.subject_gened_id} 
                onClick={() => handlesubject(course.subject_department_id || course.subject_gened_id)}>
                  <ClassTitle>
                    {course.subject_department_name || course.subject_gened_name}
                  </ClassTitle>
                  <InfoContainer>
                    <InfoName>
                      {course.subject_department_professor || course.subject_gened_professor}
                    </InfoName>
                    <InfoText>
                      {`전공 ${course.subject_department_credit || course.subject_gened_credit}학점`}
                    </InfoText>
                  </InfoContainer>
                  <DayText>
                    {course.subject_department_room_date || course.subject_gened_room_date}{" "}
                  </DayText>
                </ClassButton>
              ))
            ) : (
              <p>이 카테고리에 수업이 없습니다.</p>
            )}
          </ClassContainer>
        </MajorContainer>
      </ModalContainer>
    </Container>
  );
}
