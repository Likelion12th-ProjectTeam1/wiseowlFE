import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosInstance from "../../auth/axiosInstance";
import { useNavigate ,useLocation } from "react-router-dom";

const Container = styled.div`
    width: 390px;
    height: 500px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const ModalHeader = styled.div`
    width : 100%;
    height :10%;
    display: flex;
`

const ModalBack = styled.h4`
    color: #A3A3A3;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: auto;
    margin-right: 30px;
    margin-top: 20px;
    cursor: pointer;
`
const BigContainer = styled.div`
    width: 40%;
    height: 500px;
    display: flex;
    flex-direction: column;
`;

const MajorContainer = styled.div`
    width: 60%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ChooseContainer = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
`;

const BarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
`;

const ClassContainer = styled.div`
    width: 80%;
    height: auto; /* 내용에 따라 높이 조절 */
    max-height: calc(100% - 100px); /* 부모 높이에서 여백 제한 */
    padding: 20px;
    margin-right: 50px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge에서 스크롤바 숨김 */
    }
`;

const Bar = styled.div`
    width: 30%;
    height: 5px;
    background-color: black;
`;

const MajorText = styled.h4`
    color: ${({ isActive }) => (isActive ? "black" : "#AFAFB1")};
    font-family: Inter;
    font-size: ${({ isActive }) => (isActive ? "15.4px" : "14px")};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 10px;
    margin-bottom: 1px;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        color: black;
        transform: scale(1.1);
    }
`;

const GeneralText = styled.h4`
    color: ${({ isActive }) => (isActive ? "black" : "#AFAFB1")};
    font-family: Inter;
    font-size: ${({ isActive }) => (isActive ? "15.4px" : "14px")};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        color: black;
        transform: scale(1.1);
    }
`;

const ClassText = styled.h4`
    color: ${({ isActive }) => (isActive ? "black" : "#AFAFB1")};
    font-family: Inter;
    font-size: ${({ isActive }) => (isActive ? "15.4px" : "14px")};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        color: black;
        transform: scale(1.1);
    }
`;

export default function SubjectModal() {
    const [activebigText, setActivebigText] = useState(null);
    const [activesmallText, setActivesmallText] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [subjectdata, setSubjectdata] = useState({ department: [] });
    const navigate = useNavigate();
    const location = useLocation();
    const selectedSemester = location?.state?.selectedSemester || "defaultSemester";
    const subjectyear = location?.state?.semester || "defaultsubjectyear";
    const subjectkey = location?.state?.subjectkey || "defaultsubjectkey";

    const handlebigClick = (textType) => {
        setActivebigText(textType);
        setActivesmallText(null); // 다른 옵션 선택 시 초기화
    };

    const handlesmallClick = (textType) => {
        setActivesmallText(textType);
        console.log("Selected Semester:", selectedSemester);
        console.log(textType);
        console.log("key" ,subjectkey);
        
        navigate("/subjectmodal2", { state: { selectedSemester ,textType, subjectyear, subjectkey } });
        
    };

    const handlebackClick = () => {
        navigate("/infotwo");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(
                    `/api/requirements/colleges/${selectedSemester}/division/`
                );
                setSubjectdata(response.data); // 데이터 저장
                console.log(response.data); // 데이터 출력
            } catch (err) {
                setError("데이터를 불러오는 중 오류가 발생했습니다.");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <ModalHeader>
                    <ModalBack onClick={handlebackClick}>돌아가기</ModalBack>
            </ModalHeader>
            <ModalContainer>
                <BigContainer>
                    <ChooseContainer>
                        <BarContainer>
                            <Bar />
                            <MajorText
                                isActive={activebigText === "major"}
                                onClick={() => handlebigClick("major")}
                            >
                                전공
                            </MajorText>
                        </BarContainer>
                        <GeneralText
                            isActive={activebigText === "general"}
                            onClick={() => handlebigClick("general")}
                        >
                            교양
                        </GeneralText>
                    </ChooseContainer>
                </BigContainer>
                <MajorContainer>
                    <ClassContainer>
                        {/* 전공 또는 교양 선택에 따라 department 또는 generalEducation 렌더링 */}
                        {activebigText === "major" &&
                            subjectdata.department.map((dept) => (
                                <ClassText
                                    key={dept.department_id}
                                    isActive={activesmallText === dept.department_name}
                                    onClick={() => handlesmallClick(dept.department_name)}
                                >
                                    {dept.department_name}
                                </ClassText>
                            ))}
                        {activebigText === "general" &&
                            subjectdata.general_education.map((gen) => (
                                <ClassText
                                    key={gen.gened_category_id}
                                    isActive={activesmallText === gen.gened_category_name}
                                    onClick={() => handlesmallClick(gen.gened_category_name)}
                                >
                                    {gen.gened_category_name}
                                </ClassText>
                            ))}
                    </ClassContainer>
                </MajorContainer>
            </ModalContainer>
        </Container>
    );
}
