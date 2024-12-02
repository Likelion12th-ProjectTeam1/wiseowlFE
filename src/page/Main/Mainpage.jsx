import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Map from "./components/map";
import DashBoard from "./components/dashboard";
import NoticeMain from "./components/notices";
import axiosInstance from "../../auth/axiosInstance";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/Loading";

const MainContainer = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  margin-bottom: 100px;
`;

const Section = styled.div`
  margin-bottom: 20px; /* 각 섹션 사이의 간격을 설정 */

  &:last-child {
    margin-bottom: 0; /* 마지막 요소에는 간격을 주지 않음 */
  }
`;

const Section2 = styled.div`
  margin-bottom: -5px; /* 각 섹션 사이의 간격을 설정 */

  &:last-child {
    margin-bottom: 0; /* 마지막 요소에는 간격을 주지 않음 */
  }
`;

const Section3 = styled.div`
  margin-bottom: 31px; /* 각 섹션 사이의 간격을 설정 */

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
  width: 80px;
  height: 21px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  text-align: center;
  font-family: Inter;
  font-size: 8px;
  font-weight: 500;
  transition: color 0.3s;
  padding-left: 2px;
  background: #fff;
  color: ${({ isActive }) => (isActive ? "#5D96E8" : "#737373")};
  box-shadow: 0px 0px 2.9px 0px
    ${({ isActive }) => (isActive ? "#5D96E8" : "rgba(0, 0, 0, 0.19)")};
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #e0eaff;
    color: #5d96e8;
  }
`;

const ButtonText = styled.h4`
  text-align: center;
  font-family: Inter;
  font-size: 8px;
  font-weight: 500;
  transition: color 0.3s;
  padding-left: 2px;
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
  padding: 18px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 15%;
  padding: 2px;
`;

const TitleText = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SelectContainer = styled.div`
  width: 320px;
  height: 70%;
  display: flex;
  flex-direction: row;
  padding-right: 2px;
`;

const Line = styled.div`
  width: 0.4px;
  height: 4px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #d4d4d4;
`;

const FacilityContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  margin-top: 5px;
`;

const FacilityText = styled.h4`
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4;")};
  transition: color 0.3s, background-color 0.3s;
`;

const FacilityText2 = styled.h4`
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2; /* 줄 간격 설정 */
  color: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4")};
  transition: color 0.3s, background-color 0.3s;

  width: max-content; /* 글자 크기에 따라 자동 너비 조정 */
  max-width: 30px; /* 글자 3개 정도의 너비에 해당 */
  word-break: break-word; /* 단어를 강제로 줄바꿈 */
  white-space: normal; /* 줄바꿈 허용 */
  text-align: center; /* 가운데 정렬 */
`;


const FacilityCount = styled.div`
  width: 15px;
  height: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: ${({ isButtonactive }) =>
    isButtonactive ? "#5D96E8" : "#D4D4D4;"};
  color: #fff;
  margin-left: 1px;
`;

const ContentContainer = styled.div`
  width: 327px;
  height: 261px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
`;
const Content1 = styled.div`
  width: 150px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Content2 = styled.div`
  width: 150px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ContentButton = styled.div`
  width: 114px;
  height: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  background: #f9f9f9;
  padding-top: 7px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right : 7px;
  margin-top: 10px;
  border: 1px solid rgba(115, 115, 115, 0.3);
  gap: 10px;
`;

const InfoContainer = styled.div`
  width: 60px;
  height: 7px; /* 원하는 너비 설정 */
  white-space: nowrap; /* 텍스트가 한 줄에만 표시되도록 설정 */
  overflow: hidden; /* 넘치는 텍스트는 보이지 않게 설정 */
  text-overflow: ellipsis; /* 넘치는 텍스트는 "..."으로 표시 */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const ContentText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  
`;
const InfoText = styled.h4`
  color: #a5a3a3;
  font-family: Inter;
  font-size: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;



// Styled components
// (Include your styled components code here as it is)

export default function Main() {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [facilityList, setFacilityList] = useState([]);
  const [data, setData] = useState(null); // 서버에서 받아온 데이터를 저장할 state
  const [fulldata, setFulldata] = useState(null);
  const [error, setError] = useState(null); // 에러 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/main/");
        const responsemodal = await axiosInstance.get(
          "/api/facilities/facility_moeum/"
        );
        setData(response.data); // 성공 시 받은 데이터 저장
        setFulldata(responsemodal.data);
        console.log(response.data); // 받은 데이터 출력 (이제 응답 데이터를 정상적으로 확인 가능)
        console.log(fulldata);

        setLoading(false); // 데이터가 로드되면 로딩 상태 false로 설정
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다."); // 에러 처리
        setLoading(false);
        console.error("Error fetching data:", err); // 에러 로그 출력
      }
    };

    fetchData(); // 함수 호출
  }, []); // token이 변경될 때마다 실행

  if (loading) {
    return <div><Loading /></div>; // 데이터가 로드되기 전에는 로딩 화면을 보여줌
  }

  if (error) {
    return <div>{error}</div>; // 에러가 발생한 경우 에러 메시지 출력
  }

  const handleButtonClick = () => {
    // fetchFullData();
    setIsActive(!isActive);
    setIsModalOpen(!isModalOpen);
    setSelectedCategory("전체");
    setFacilityList(
      fulldata.facility_set.find((item) => item.facility_category === "전체")
        .facility_list
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const selectedFacilityData = fulldata.facility_set.find(
      (item) => item.facility_category === category
    );
    setFacilityList(
      selectedFacilityData ? selectedFacilityData.facility_list : []
    );
  };

  const goToshopping = () => {
    navigate("/shopping");
};

const goToshoppingtwo = () => {
  navigate("/shoppingtwo");
};

  const halfIndex = Math.ceil(facilityList.length / 2); // 리스트를 반으로 나누는 인덱스
  const firstHalf = facilityList.slice(0, halfIndex); // 첫 번째 절반
  const secondHalf = facilityList.slice(halfIndex); // 두 번째 절반

  return (
    <MainContainer>
      <Section>
        <Header />
      </Section>
      <Section2>
        <DashBoard data={data.dashboard} />
      </Section2>
      <ButtonContainer>
        <MapButton isActive={isActive} onClick={handleButtonClick}>
          <ButtonText>편의시설 모아보기</ButtonText>
        </MapButton>
      </ButtonContainer>
      <Section3>
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
                      {category.facility_category === "컴퓨터/복사기" ? (
                        <FacilityText2
                          isButtonactive={selectedCategory === category.facility_category}
                        >
                          {category.facility_category}
                        </FacilityText2>
                      ) : (
                        <FacilityText
                          isButtonactive={selectedCategory === category.facility_category}
                        >
                          {category.facility_category}
                        </FacilityText>
                      )}
                      <FacilityCount
                        isButtonactive={selectedCategory === category.facility_category}
                      >
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
                        <ContentButton
                        key={index}
                        onClick={() => {
                          // "던킨도넛"인 경우에만 handleGo 함수 호출
                          if (facility.facility_name === "던킨") {
                            goToshopping();
                          }else if (facility.facility_name === "그라찌에") {
                            console.log("그라찌에 버튼 클릭");
                            // "그라찌에"일 경우 goToshoppingtwo 함수 호출
                            goToshoppingtwo();}
                        }}
                      >
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
                        <ContentButton
                        key={index}
                        onClick={() => {
                          // "던킨도넛"인 경우에만 handleGo 함수 호출
                          if (facility.facility_name === "던킨") {
                            goToshopping();
                          }else if (facility.facility_name === "그라찌에") {
                            console.log("그라찌에 버튼 클릭");
                            // "그라찌에"일 경우 goToshoppingtwo 함수 호출
                            goToshoppingtwo();}
                        }}
                      >
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
      </Section3>
      <Section>
        <NoticeMain data={data.notice_list} />
      </Section>
    </MainContainer>
  );
}
