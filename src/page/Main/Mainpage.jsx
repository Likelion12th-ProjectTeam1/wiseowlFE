import styled from "styled-components";
import { useState } from "react";
import Header from "./components/header";
import Map from "./components/map";
import DashBoard from "./components/dashboard";
import NoticeMain from "./components/notices";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    padding: 10px;
`;

const Section = styled.div`
    margin-bottom: 20px; /* 각 섹션 사이의 간격을 설정 */
    
    &:last-child {
        margin-bottom: 0; /* 마지막 요소에는 간격을 주지 않음 */
    }
`;

const ButtonContainer = styled.div`
  width: 390px;
  height: 40px;
  padding: 5px;
`;

const MapButton = styled.div`
    width: 20%;
    height: 80%;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #FFF;
    color: ${({ isActive }) => (isActive ? "#5D96E8" : "#737373")};
    box-shadow: 0px 0px 2.9px 0px ${({ isActive }) => (isActive ? "#5D96E8" : "rgba(0, 0, 0, 0.19)")};
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #e0eaff;
        color: #5D96E8;
    }
`;

const ButtonText = styled.h4`
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: color 0.3s;
`;

const MapContainer = styled.div`
    position: relative; /* 모달을 Map 영역 내에서 절대 위치로 설정하기 위해 사용 */
`;

const TotalModal = styled.div`
    position: absolute;
    top: 20px; /* 원하는 위치에 맞게 조정 */
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 8px;
    background-color: #FFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 10;
`;

const TitleContainer = styled.div`
    width : 100%;
    height : 15%;
    padding : 2px;
`

const TitleText = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const SelectContainer = styled.div`
    width : 100%;
    height : 70%;
    display : flex;
    flex-direction: row;
    padding : 2px;
`

const Line = styled.div`
    width : 1px;
    height : 100%;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #D4D4D4;
`

const FacilityContainer = styled.div`
    width: 30%;
    height : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    margin-top: 5px;
`

const FacilityText = styled.h4`
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4;")};
    transition: color 0.3s, background-color 0.3s;
    margin-left : 2px;
`

const FacilityCount = styled.div`
    width : 50%;
    height : 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4;")};
    color: #FFF;
    margin-left: 1px;
    `


const ContentContainer = styled.div`
    width : 100%;
    height : 60%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const ContentButton = styled.div`
    width : 40%;
    height : 20%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 8px;
    background: #F9F9F9;
    padding : 5px;
    margin-top : 10px;
    border: 1px solid rgba(115, 115, 115, 0.30);
`

const InfoContainer = styled.div`
    width : 50%;
    height : 100%;
    margin-left: 15px;
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ContentText = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const InfoText = styled.h4`
    color: #A5A3A3;
    font-family: Inter;
    font-size: 6px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const facilityData = {
    total: 8,
    categories: [
        { category: "전체", count: 8 },
        { category: "카페/식당", count: 3 },
        { category: "편의점", count: 2 },
        { category: "열람실", count: 1 },
        { category: "컴퓨터/복사기", count: 2 },
        { category: "기타", count: 0 }
    ],
    facility_set: [
        {
            facility_category: "전체",
            facility_list: [
                { facility_name: "Coopsket", building_name: "백년관", facility_loc: "2층" },
                { facility_name: "열람실", building_name: "백년관", facility_loc: "3층" },
                // Add other items here...
            ]
        },
        {
            facility_category: "카페/식당",
            facility_list: [
                { facility_name: "던킨도넛", building_name: "백년관", facility_loc: "1층" },
                // Add other items here...
            ]
        }
        // Add other categories here...
    ]
};


const Mockdata = {
    "dashboard" : {
				  "name": "감자",
			    "major": "통계학과",
			    "double_major": "AI융합전공",
			    "major_credit_completed": 34,
			    "major_credit_required": 54,
			    "major_requirements": ["어학시험", "졸업시험", "논문"],
			    "double_credit_completed": 28,
			    "double_credit_required": 42,
			    "double_requirements": ["졸업 프로젝트", "졸업시험"]
    },
    "builing_list": [
        {
            "building_num": 0,
            "builiding_name": "백년관",
            "facilities_summary": {
                "total": 4,
                "restaurant_cafe": 1,
                "convenience_store": 1,
                "reading_room": 1,
                "computer_copier": 1,
                "etc": 0,
                "facility_set": [
                    {
                        "facility_category": "전체",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "2층"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "3층"
                            },
                            {
                                "facility_name": "던킨도넛",
                                "facility_loc": "1층"
                            },
                            {
                                "facility_name": "복사기",
                                "facility_loc": "1층"
                            }
                        ]
                    },
                    {
                        "facility_category": "카페/식당",
                        "facility_list": [
                            {
                                "facility_name": "던킨도넛",
                                "facility_loc": "1층"
                            }
                        ]
                    },
                    {
                        "facility_category": "편의점",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "2층"
                            }
                        ]
                    },
                    {
                        "facility_category": "열람실",
                        "facility_list": [
                            {
                                "facility_name": "열람실",
                                "facility_loc": "3층"
                            }
                        ]
                    },
                    {
                        "facility_category": "컴퓨터/복사기",
                        "facility_list": [
                            {
                                "facility_name": "복사기",
                                "facility_loc": "1층"
                            },
                            {
                                "facility_name": "복사기",
                                "facility_loc": "3층"
                            }
                        ]
                    },
                    {
                        "facility_category": "기타",
                        "facility_list": []
                    }
                ]
            }
        },
        {
            "building_num": 1,
            "builiding_name": "어문관",
            "facilities_sumary": {
                "total": 2,
                "restaurant_cafe": 0,
                "convenience store": 1,
                "reading_room": 1,
                "computer_copier": 0,
                "etc": 0,
                "facility_set": [
                    {
                        "facility_category": "전체",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "2층"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "3층"
                            }
                        ]
                    },
                    {
                        "facility_category": "카페/식당",
                        "facility_list": []
                    },
                    {
                        "facility_category": "편의점",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "2층"
                            }
                        ]
                    },
                    {
                        "facility_category": "열람실",
                        "facility_list": [
                            {
                                "facility_name": "열람실",
                                "facility_loc": "3층"
                            }
                        ]
                    },
                    {
                        "facility_category": "컴퓨터/복사기",
                        "facility_list": []
                    },
                    {
                        "facility_category": "기타",
                        "facility_list": []
                    }
                ]
            }
        },
        {
            "building_num": 2,
            "builiding_name": "교양관",
            "facilities_sumary": {
                "total": 1,
                "restaurant_cafe": 0,
                "convenience store": 1,
                "reading_room": 0,
                "computer_copier": 0,
                "etc": 0,
                "facility_set": [
                    {
                        "facility_category": "전체",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "1층"
                            }
                        ]
                    },
                    {
                        "facility_category": "카페/식당",
                        "facility_list": []
                    },
                    {
                        "facility_category": "편의점",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "1층"
                            }
                        ]
                    },
                    {
                        "facility_category": "열람실",
                        "facility_list": []
                    },
                    {
                        "facility_category": "컴퓨터/복사기",
                        "facility_list": []
                    },
                    {
                        "facility_category": "기타",
                        "facility_list": []
                    }
                ]
            }
        },
        {
            "building_num": 3,
            "builiding_name": "자연과학관",
            "facilities_sumary": {
                "total": 0,
                "restaurant_cafe": 0,
                "convenience store": 0,
                "reading_room": 0,
                "computer_copier": 0,
                "etc": 0,
                "facility_set": [
                    {
                        "facility_category": "전체",
                        "facility_list": []
                    },
                    {
                        "facility_category": "카페/식당",
                        "facility_list": []
                    },
                    {
                        "facility_category": "편의점",
                        "facility_list": []
                    },
                    {
                        "facility_category": "열람실",
                        "facility_list": []
                    },
                    {
                        "facility_category": "컴퓨터/복사기",
                        "facility_list": []
                    },
                    {
                        "facility_category": "기타",
                        "facility_list": []
                    }
                ]
            }
        }
    ],
    "notice_list": [
        {
            "notice_department": "AI 교육원",
            "notice_title": "[SW중심대학]제6회 HUFS Code Festival 모집 공고",
            "notice_date": "2024-10-15",
            "notice_link": "https://~~"
        },
        {
            "notice_department": "통계학과",
            "notice_title": "[SW중심대학]제6회 HUFS Code Festival 모집 공고",
            "notice_date": "2024-10-15",
            "notice_link": "https://~~"
        },
        {
            "notice_department": "AI 교육원",
            "notice_title": "[SW중심대학]제6회 HUFS Code Festival 모집 공고",
            "notice_date": "2024-10-15",
            "notice_link": "https://~~"
        }
    ]
};


// Styled components
// (Include your styled components code here as it is)

export default function Main() {
    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [facilityList, setFacilityList] = useState([]);

    const handleButtonClick = () => {
        setIsActive(!isActive);
        setIsModalOpen(!isModalOpen);
        setSelectedCategory("전체");
        setFacilityList(
            facilityData.facility_set.find((item) => item.facility_category === "전체").facility_list
        );
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        const selectedFacilityData = facilityData.facility_set.find(
            (item) => item.facility_category === category
        );
        setFacilityList(selectedFacilityData ? selectedFacilityData.facility_list : []);
    };

    return (
        <MainContainer>
            <Section><Header /></Section>
            <Section><DashBoard mockdata = {Mockdata.dashboard}/></Section>
            <ButtonContainer>
                <MapButton isActive={isActive} onClick={handleButtonClick}>
                    <ButtonText>편의시설 모아보기</ButtonText>
                </MapButton>
            </ButtonContainer>
            <Section>
                <MapContainer>
                    <Map Mockdata = {Mockdata}/>
                    {isModalOpen && (
                        <TotalModal>
                            <TitleContainer>
                                <TitleText>교내 편의시설</TitleText>
                                <SelectContainer>
                                    {facilityData.categories.map((category, index) => (
                                        <FacilityContainer
                                            key={index}
                                            onClick={() => handleCategoryClick(category.category)}
                                        >
                                            <FacilityText isButtonactive={selectedCategory === category.category}>
                                                {category.category}
                                            </FacilityText>
                                            <FacilityCount isButtonactive={selectedCategory === category.category}>
                                                {category.count}
                                            </FacilityCount>
                                        </FacilityContainer>
                                    ))}
                                </SelectContainer>
                            </TitleContainer>
                            <ContentContainer>
                                {facilityList.length > 0 ? (
                                    facilityList.map((facility, index) => (
                                        <ContentButton key={index}>
                                            <ContentText>{facility.facility_name}</ContentText>
                                            <InfoContainer>
                                                <InfoText>{facility.building_name}</InfoText>
                                                <Line />
                                                <InfoText>{facility.facility_loc}</InfoText>
                                            </InfoContainer>
                                        </ContentButton>
                                    ))
                                ) : (
                                    <p>해당 카테고리에 시설이 없습니다.</p>
                                )}
                            </ContentContainer>
                        </TotalModal>
                    )}
                </MapContainer>
            </Section>
            <Section><NoticeMain /></Section>
        </MainContainer>
    );
}
