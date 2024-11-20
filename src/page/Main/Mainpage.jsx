import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Map from "./components/map";
import DashBoard from "./components/dashboard";
import NoticeMain from "./components/notices";
import axios from "axios";

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
    width : 0.5px;
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
    flex-direction: row;
    margin-top: 10px;
    overflow-y: auto;
`
const Content1 = styled.div`
    width : 50%;
    height : 60%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
const Content2 = styled.div`
    width : 50%;
    height : 60%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`


const ContentButton = styled.div`
    width : 120px;
    height : 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 8px;
    background: #F9F9F9;
    padding : 4px;
    margin-top : 10px;
    border: 1px solid rgba(115, 115, 115, 0.30);
    gap : 10px;
`

const InfoContainer = styled.div`
    width : 60px;
    height : 100%;
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
    white-space: nowrap; 
`
const InfoText = styled.h4`
    color: #A5A3A3;
    font-family: Inter;
    font-size: 6px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`


// Styled components
// (Include your styled components code here as it is)

export default function Main() {
    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [facilityList, setFacilityList] = useState([]);
    const [data, setData] = useState(null);  // 서버에서 받아온 데이터를 저장할 state
    const [fulldata , setFulldata] = useState(null);
    const [error, setError] = useState(null); // 에러 상태
    const [token , setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NDM1NTU2LCJpYXQiOjE3MzE4NDM1NTYsImp0aSI6ImQ5NWRlNGUyZWQ4ZTRkZmZiMmU2OThmMTM4NjFjZGU0IiwidXNlcl9pZCI6NX0.Uq1roWDY74apsMgfLzJYY46GENHUd0Zd3PET_piePDw")
    const [loading, setLoading] = useState(true);  // 로딩 상태 추가

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://43.201.90.146:8000/api/main/', {
              headers: {
                Authorization: `Bearer ${token}`, // Bearer 방식으로 토큰 설정
              },
            });
            const responsemodal = await axios.get('http://43.201.90.146:8000/api/facilities/facility_moeum/', {
                headers: {
                  Authorization: `Bearer ${token}`, // Bearer 방식으로 토큰 설정
                },
            });
            setFulldata(responsemodal.data);
            setData(response.data);  // 성공 시 받은 데이터 저장
            console.log(response.data);  // 받은 데이터 출력 (이제 응답 데이터를 정상적으로 확인 가능)
            console.log(fulldata);
            
            setLoading(false);  // 데이터가 로드되면 로딩 상태 false로 설정
          } catch (err) {
            setError('데이터를 불러오는 중 오류가 발생했습니다.');  // 에러 처리
            setLoading(false);  
            console.error('Error fetching data:', err);  // 에러 로그 출력
          }
        };
    
        fetchData();  // 함수 호출
      }, [token]);  // token이 변경될 때마다 실행
    
      if (loading) {
        return <div>Loading...</div>;  // 데이터가 로드되기 전에는 로딩 화면을 보여줌
      }
    
      if (error) {
        return <div>{error}</div>;  // 에러가 발생한 경우 에러 메시지 출력
      }

    // const fetchFullData = async () => {
    //     try {
    //       const response = await axios.get('http://43.201.90.146:8000/api/facilities/facility_moeum/', {
    //         headers: {
    //           Authorization: `Bearer ${token}`, // Bearer 방식으로 토큰 설정
    //         },
    //       });
    //       setFulldata(response.data);  // 성공 시 받은 데이터 저장
    //       console.log(fulldata);
    
    //     } catch (err) {
    //       setError('데이터를 불러오는 중 오류가 발생했습니다.');  // 에러 처리
    //       console.error('Error fetching data:', err);  // 에러 로그 출력
    //     }
    //   };


    const handleButtonClick = () => {
        // fetchFullData();
        setIsActive(!isActive);
        setIsModalOpen(!isModalOpen);
        setSelectedCategory("전체");
        setFacilityList(
            fulldata.facility_set.find((item) => item.facility_category === "전체").facility_list
        );
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        const selectedFacilityData = fulldata.facility_set.find(
            (item) => item.facility_category === category
        );
        setFacilityList(selectedFacilityData ? selectedFacilityData.facility_list : []);
    };

    const halfIndex = Math.ceil(facilityList.length / 2); // 리스트를 반으로 나누는 인덱스
    const firstHalf = facilityList.slice(0, halfIndex);  // 첫 번째 절반
    const secondHalf = facilityList.slice(halfIndex);   // 두 번째 절반

return (
    <MainContainer>
        <Section><Header /></Section>
        <Section><DashBoard data={data.dashboard} /></Section>
        <ButtonContainer>
            <MapButton isActive={isActive} onClick={handleButtonClick}>
                <ButtonText>편의시설 모아보기</ButtonText>
            </MapButton>
        </ButtonContainer>
        <Section>
            <MapContainer>
                <Map data={data.building_list} />
                {isModalOpen && (
                    <TotalModal>
                        <TitleContainer>
                            <TitleText>교내 편의시설</TitleText>
                            <SelectContainer>
                                {fulldata.facility_set.map((category, index) => (
                                    <FacilityContainer
                                        key={index}
                                        onClick={() => handleCategoryClick(category.facility_category)}
                                    >
                                        <FacilityText isButtonactive={selectedCategory === category.facility_category}>
                                            {category.facility_category}
                                        </FacilityText>
                                        <FacilityCount isButtonactive={selectedCategory === category.facility_category}>
                                            {category.facility_list.length}
                                        </FacilityCount>
                                    </FacilityContainer>
                                ))}
                            </SelectContainer>
                        </TitleContainer>
                        <ContentContainer>
                            {facilityList.length > 0 ? (
                                <>
                                    <Content1>
                                        {firstHalf.map((facility, index) => (
                                            <ContentButton key={index}>
                                                <ContentText>{facility.facility_name}</ContentText>
                                                <InfoContainer>
                                                    <InfoText>{facility.building_name}</InfoText>
                                                    <Line />
                                                    <InfoText>{facility.facility_loc}</InfoText>
                                                </InfoContainer>
                                            </ContentButton>
                                        ))}
                                    </Content1>
                                    <Content2>
                                        {secondHalf.map((facility, index) => (
                                            <ContentButton key={index}>
                                                <ContentText>{facility.facility_name}</ContentText>
                                                <InfoContainer>
                                                    <InfoText>{facility.building_name}</InfoText>
                                                    <Line />
                                                    <InfoText>{facility.facility_loc}</InfoText>
                                                </InfoContainer>
                                            </ContentButton>
                                        ))}
                                    </Content2>
                                </>
                            ) : (
                                <p>해당 카테고리에 시설이 없습니다.</p>
                            )}
                        </ContentContainer>
                    </TotalModal>
                )}
            </MapContainer>
        </Section>
        <Section><NoticeMain data={data.notice_list} /></Section>
    </MainContainer>
);
}