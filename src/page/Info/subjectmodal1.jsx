import React, { useState } from "react";
import styled from "styled-components";

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
    height: 100%;
    padding: 20px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    const department = [
        { department_id: 1, department_name: "AI데이터융합" },
        { department_id: 2, department_name: "국제금융학과" },
        { department_id: 3, department_name: "Global Business & Technology학부" },
    ];

    const generalEducation = [
        { gened_category_id: 1, gen_category_name: "대학영어" },
        { gened_category_id: 2, gen_category_name: "미네르바인문" },
        { gened_category_id: 3, gen_category_name: "RC영어" },
        { gened_category_id: 4, gen_category_name: "소프트웨어기초" },
        { gened_category_id: 5, gen_category_name: "언어와 문학" },
    ];

    const handlebigClick = (textType) => {
        setActivebigText(textType);
        setActivesmallText(null); // 다른 옵션 선택 시 초기화
    };

    const handlesmallClick = (textType) => {
        setActivesmallText(textType);
    };

    return (
        <Container>
            <ModalHeader>
                    <ModalBack>돌아가기</ModalBack>
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
                            department.map((dept) => (
                                <ClassText
                                    key={dept.department_id}
                                    isActive={activesmallText === dept.department_name}
                                    onClick={() => handlesmallClick(dept.department_name)}
                                >
                                    {dept.department_name}
                                </ClassText>
                            ))}
                        {activebigText === "general" &&
                            generalEducation.map((gen) => (
                                <ClassText
                                    key={gen.gened_category_id}
                                    isActive={activesmallText === gen.gen_category_name}
                                    onClick={() => handlesmallClick(gen.gen_category_name)}
                                >
                                    {gen.gen_category_name}
                                </ClassText>
                            ))}
                    </ClassContainer>
                </MajorContainer>
            </ModalContainer>
        </Container>
    );
}
