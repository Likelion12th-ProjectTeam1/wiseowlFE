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


const Mockdata = 
{
    "dashboard": {
        "name": "박주영",
        "major": "통계학과",
        "double_major": "컴퓨터공학부",
        "major_credit_completed": 0,
        "major_credit_required": 54,
        "major_requirements": [
            "졸업논문",
            "전공 필수 과목 이수"
        ],
        "double_credit_completed": 0,
        "double_credit_required": 42,
        "double_requirements": [
            "졸업논문",
            "TOPCIT",
            "전공 필수 과목 이수"
        ]
    },
    "building_list": [
        {
            "building_num": 0,
            "building_name": "백년관",
            "facilities_summary": {
                "total": 6,
                "restaurant_cafe": 1,
                "convenience_store": 1,
                "reading_room": 2,
                "computer_copier": 1,
                "etc": 1,
                "facility_set": [
                    {
                        "facility_category": "전체",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "3층",
                                "facility_desc": "편의점"
                            },
                            {
                                "facility_name": "라운지",
                                "facility_loc": "1층",
                                "facility_desc": "컴퓨터, 복사기"
                            },
                            {
                                "facility_name": "던킨",
                                "facility_loc": "1층",
                                "facility_desc": "카페"
                            },
                            {
                                "facility_name": "라운지",
                                "facility_loc": "1층",
                                "facility_desc": "라운지"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "3층",
                                "facility_desc": "열람실"
                            },
                            {
                                "facility_name": "스터디룸",
                                "facility_loc": "1층",
                                "facility_desc": "스터디룸"
                            }
                        ]
                    },
                    {
                        "facility_category": "카페/식당",
                        "facility_list": [
                            {
                                "facility_name": "던킨",
                                "facility_loc": "1층",
                                "facility_desc": "카페"
                            }
                        ]
                    },
                    {
                        "facility_category": "편의점",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "3층",
                                "facility_desc": "편의점"
                            }
                        ]
                    },
                    {
                        "facility_category": "열람실",
                        "facility_list": [
                            {
                                "facility_name": "라운지",
                                "facility_loc": "1층",
                                "facility_desc": "라운지"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "3층",
                                "facility_desc": "열람실"
                            }
                        ]
                    },
                    {
                        "facility_category": "컴퓨터/복사기",
                        "facility_list": [
                            {
                                "facility_name": "라운지",
                                "facility_loc": "1층",
                                "facility_desc": "컴퓨터, 복사기"
                            }
                        ]
                    },
                    {
                        "facility_category": "기타",
                        "facility_list": [
                            {
                                "facility_name": "스터디룸",
                                "facility_loc": "1층",
                                "facility_desc": "스터디룸"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "building_num": 1,
            "building_name": "어문관",
            "facilities_summary": {
                "total": 10,
                "restaurant_cafe": 4,
                "convenience_store": 1,
                "reading_room": 2,
                "computer_copier": 2,
                "etc": 1,
                "facility_set": [
                    {
                        "facility_category": "전체",
                        "facility_list": [
                            {
                                "facility_name": "애플빈",
                                "facility_loc": "1층",
                                "facility_desc": "카페/아이스크림"
                            },
                            {
                                "facility_name": "아리랑덮밥",
                                "facility_loc": "1층",
                                "facility_desc": "덮밥 전문점"
                            },
                            {
                                "facility_name": "우리은행 ATM",
                                "facility_loc": "1층",
                                "facility_desc": "은행 ATM"
                            },
                            {
                                "facility_name": "까르보네",
                                "facility_loc": "1층",
                                "facility_desc": "파스타 전문점"
                            },
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "1층",
                                "facility_desc": "편의점"
                            },
                            {
                                "facility_name": "외대 복사실",
                                "facility_loc": "2층",
                                "facility_desc": "인쇄/스캔/팩스"
                            },
                            {
                                "facility_name": "컴퓨터실",
                                "facility_loc": "4층",
                                "facility_desc": "컴퓨터"
                            },
                            {
                                "facility_name": "헬로밀",
                                "facility_loc": "1층",
                                "facility_desc": "토스트/샌드위치/핫도그/샐러드"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "1층",
                                "facility_desc": "열람실"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "4층",
                                "facility_desc": "열람실"
                            }
                        ]
                    },
                    {
                        "facility_category": "카페/식당",
                        "facility_list": [
                            {
                                "facility_name": "애플빈",
                                "facility_loc": "1층",
                                "facility_desc": "카페/아이스크림"
                            },
                            {
                                "facility_name": "아리랑덮밥",
                                "facility_loc": "1층",
                                "facility_desc": "덮밥 전문점"
                            },
                            {
                                "facility_name": "까르보네",
                                "facility_loc": "1층",
                                "facility_desc": "파스타 전문점"
                            },
                            {
                                "facility_name": "헬로밀",
                                "facility_loc": "1층",
                                "facility_desc": "토스트/샌드위치/핫도그/샐러드"
                            }
                        ]
                    },
                    {
                        "facility_category": "편의점",
                        "facility_list": [
                            {
                                "facility_name": "Coopsket",
                                "facility_loc": "1층",
                                "facility_desc": "편의점"
                            }
                        ]
                    },
                    {
                        "facility_category": "열람실",
                        "facility_list": [
                            {
                                "facility_name": "열람실",
                                "facility_loc": "1층",
                                "facility_desc": "열람실"
                            },
                            {
                                "facility_name": "열람실",
                                "facility_loc": "4층",
                                "facility_desc": "열람실"
                            }
                        ]
                    },
                    {
                        "facility_category": "컴퓨터/복사기",
                        "facility_list": [
                            {
                                "facility_name": "외대 복사실",
                                "facility_loc": "2층",
                                "facility_desc": "인쇄/스캔/팩스"
                            },
                            {
                                "facility_name": "컴퓨터실",
                                "facility_loc": "4층",
                                "facility_desc": "컴퓨터"
                            }
                        ]
                    },
                    {
                        "facility_category": "기타",
                        "facility_list": [
                            {
                                "facility_name": "우리은행 ATM",
                                "facility_loc": "1층",
                                "facility_desc": "은행 ATM"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "notice_list": [
        {
            "notice_department": "국제교류팀",
            "notice_title": "2024 CAMPUS Asia Plus 단기 유학 프로그램 in ASEAN 파견 학생 모집",
            "notice_date": "2024-11-15",
            "notice_link": "https://builder.hufs.ac.kr/user/indexSub.action?codyMenuSeq=135456840&siteId=oia3&menuType=T&uId=8&sortChar=A&menuFrame=left&linkUrl=7_1.html&mainFrame=right&dum=dum&boardId=133295660&page=1&command=view&boardSeq=192177851"
        },
        {
            "notice_department": "국제교류팀",
            "notice_title": "[국제교류팀] 2024학년도 하반기 3회차 기관토플 접수 안내",
            "notice_date": "2024-11-10",
            "notice_link": "https://builder.hufs.ac.kr/user/indexSub.action?codyMenuSeq=135456840&siteId=oia3&menuType=T&uId=8&sortChar=A&menuFrame=left&linkUrl=7_1.html&mainFrame=right&dum=dum&boardId=133295660&page=1&command=view&boardSeq=191957847"
        },
        {
            "notice_department": "FLEX 센터",
            "notice_title": "2024년 4회차 FLEX 시험 시간표 및 고사실 배치표(한국외대) 안내",
            "notice_date": "2024-10-23",
            "notice_link": "https://builder.hufs.ac.kr/user/indexSub.action?codyMenuSeq=84761504&siteId=flex2&menuType=T&uId=6&sortChar=A&linkUrl=4_1.html&mainFrame=right&dum=dum&boardId=84761437&page=1&command=view&boardSeq=191017853"
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
                    <Map Mockdata = {Mockdata.building_list}/>
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
            <Section><NoticeMain mockdata = {Mockdata.notice_list}/></Section>
        </MainContainer>
    );
}
