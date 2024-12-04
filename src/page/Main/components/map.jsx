import styled from "styled-components";
import { useState, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ImageContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 32vh;
  overflow: hidden;
  position: relative;
`;

const MapImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/img/mainmap.svg");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
`;

const BuildingZero = styled.div`
  position: absolute;
  background-image: url("/img/building0.svg");
  left: 15px;
  bottom: 40px;
  width: 9vh;
  height: 9vh;
  background-size: cover;
  transform: scale(1.4);
  &:hover {
    transform: scale(1.5);
  }
`;

const BuildingOne = styled.div`
  position: absolute;
  background-image: url("/img/building1.svg");
  top: 30%;
  left: 70%;
  width: 9.5vh;
  height: 12vh;
  background-size: cover;
  transform: scale(1.4);
  &:hover {
    transform: scale(1.5);
  }
`;

const BuildingTwo = styled.div`
  position: absolute;
  background-image: url("/img/building2.svg");
  top: 2%;
  left: 48%;
  width: 15vh;
  height: 11vh;
  background-size: cover;
  transform: scale(0.9);
  &:hover {
    transform: scale(1.1);
  }
`;

const BuildingThree = styled.div`
  position: absolute;
  background-image: url("/img/building3.svg");
  top: 35px;
  left: -7%;
  width: 24vh;
  height: 12vh;
  background-size: cover;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
  }
`;

const BuildingFour = styled.div`
  position: absolute;
  background-image: url("/img/building4.svg");
  top: -10%;
  left: 70%;
  width: 15vh;
  height: 12vh;
  background-size: cover;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
  }
`;

const BuildingFive = styled.div`
  position: absolute;
  background-image: url("/img/building5.svg");
  top: 33%;
  left: 16%;
  width: 16vh;
  height: 12vh;
  background-size: cover;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
  }
`;

const BuildingSix = styled.div`
  position: absolute;
  background-image: url("/img/building6.svg");
  top: 43%;
  left: 45%;
  width: 15vh;
  height: 13vh;
  background-size: cover;
  transform: scale(1.1);
  &:hover {
    transform: scale(1.2);
  }
`;

const BuildingSeven = styled.div`
  position: absolute;
  background-image: url("/img/building7.svg");
  top: 65%;
  left: 23%;
  width: 15vh;
  height: 12vh;
  background-size: cover;
  transform: scale(1.1);
  &:hover {
    transform: scale(1.2);
  }
`;

const BuildingEight = styled.div`
  position: absolute;
  background-image: url("/img/building8.svg");
  top: 0%;
  left: 33%;
  width: 18vh;
  height: 20vh;
  background-size: cover;
  transform: scale(0.7);
  &:hover {
    transform: scale(0.8);
  }
`;

const TotalModal = styled.div`
  position: absolute;
  top: 4px;
  left: 60%;
  transform: translateX(-50%);
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 2px;
`;

const TitleText = styled.h2`
  width: 100px;
  color: #000;
  font-size: 12px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 60%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
`;

const ContentButton = styled.div`
  width: 124px; //기존 114에서 너비 수정
  height: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  background: #f9f9f9;
  padding-top: 7px;
  padding-bottom: 8px;
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 10px;
  border: 1px solid rgba(115, 115, 115, 0.3);
  gap: 5px;
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

const InfoTextBname = styled.h4`
  width: 60px;
  color: #a5a3a3;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const InfoText = styled.h4`
  color: #a5a3a3;
  font-family: Inter;
  font-size: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InfoContainer = styled.div`
  width: 60px;
  height: 7px; /* 원하는 너비 설정 */
  white-space: nowrap; /* 텍스트가 한 줄에만 표시되도록 설정 */
  overflow: hidden; /* 넘치는 텍스트는 보이지 않게 설정 */
  text-overflow: ellipsis; /* 넘치는 텍스트는 "..."으로 표시 */
  display: flex;
  gap: 2px;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const Line = styled.div`
  width: 0.6px;
  height: 100%;
  background-color: #d4d4d4;
  margin: 0 2px;
`;

const SelectTopContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  padding: 1px;
`;

const SelectBottomContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  padding: 1px;
`;


const SelectContainer = styled.div`
    width : 100%;
    height : 70%;
    display : flex;
    flex-direction: row;
    padding : 1px;
`


const FacilityContainer = styled.div`
    width: auto;
    height : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    margin-top: 2px;
    margin-right: 20px;
`

const FacilityText = styled.h4`
  font-family: Inter;
  font-size: 7px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4;")};
  transition: color 0.3s, background-color 0.3s;
`;

const FacilityCount = styled.div`
  width: 15px;
  height: 11px;
  display: flex;
  color: #fff;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: ${({ isButtonactive }) =>
    isButtonactive ? "#5D96E8" : "#D4D4D4;"};
  color: #fff;
  margin-left: 5px;
`;

const ChooseContianer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;



const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const CancleImg = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 110px;
  cursor: pointer;
`;

const Map = ({ data }) => {
  const [activeBuilding, setActiveBuilding] = useState(null); // 현재 활성화된 건물의 인덱스를 관리
  const [facilityList, setFacilityList] = useState([]);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const handleBuildingClick = (buildingIndex) => {
    const selectedBuilding = data[buildingIndex];

    if (selectedBuilding && selectedBuilding.facilities_summary) {
      setActiveBuilding(buildingIndex); // 해당 건물을 클릭하면 그 건물만 모달이 열리도록
      console.log(selectedBuilding);
      console.log(selectedBuilding.facilities_summary);
      console.log(activeBuilding);

      const allFacilities =
        selectedBuilding.facilities_summary.facility_set.find(
          (category) => category.facility_category === "전체"
        );

      setFacilityList(allFacilities ? allFacilities.facility_list : []);
    } else {
      console.error(`인덱스 ${buildingIndex}에 대한 정보가 없습니다.`);
      setActiveBuilding(null); // 건물 정보가 없으면 모달을 닫음
    }
  };

  const handleMapClick = (e) => {
    if (mapRef.current && mapRef.current.contains(e.target)) {
      // setActiveBuilding(null);  // 맵 클릭 시 모든 모달을 닫음
    }
  };

  const handleModal = (e) => {
    setActiveBuilding(null);
  };

  const goToshopping = () => {
    navigate("/shopping");
  };

  const goToshoppingtwo = () => {
    navigate("/shoppingtwo");
  };

  return (
    <ImageContainer>
      <MapImage ref={mapRef} onClick={handleMapClick}>
        {/* 각 건물의 클릭 이벤트에서 인덱스를 사용 */}
        <BuildingZero onClick={() => handleBuildingClick(0)} />
        <BuildingOne onClick={() => handleBuildingClick(1)} />
        <BuildingTwo onClick={() => handleBuildingClick(2)} />
        <BuildingThree onClick={() => handleBuildingClick(3)} />
        <BuildingFour onClick={() => handleBuildingClick(4)} />
        <BuildingFive onClick={() => handleBuildingClick(5)} />
        <BuildingSix onClick={() => handleBuildingClick(6)} />
        <BuildingSeven onClick={() => handleBuildingClick(7)} />
        <BuildingEight onClick={() => handleBuildingClick(8)} />

        {/* 활성화된 건물에 대해서만 모달을 표시 */}
        {activeBuilding !== null && (
          <TotalModal>
            <TitleContainer>
              <HeaderContainer>
                <TitleText>
                  {data[activeBuilding]?.building_name || "건물 이름 없음"}
                </TitleText>
                <CancleImg
                  src="/img/cancle.svg"
                  alt="cancle"
                  onClick={handleModal}
                />
              </HeaderContainer>
              <ChooseContianer>
                {/* 첫 번째 줄: 전체, 식장/매점, 열람실 */}
                <SelectTopContainer>
                  {data[activeBuilding].facilities_summary.facility_set
                    .filter((category) =>
                      ["전체", "카페/식당", "열람실"].includes(
                        category.facility_category
                      )
                    )
                    .map((category, index) => (
                      <FacilityContainer
                        key={index}
                        onClick={() =>
                          setFacilityList(category.facility_list || [])
                        }
                      >
                        <FacilityText
                          isButtonactive={
                            facilityList === category.facility_list
                          }
                        >
                          {category.facility_category}
                        </FacilityText>
                        <FacilityCount
                          isButtonactive={
                            facilityList === category.facility_list
                          }
                        >
                          {category.facility_list.length}
                        </FacilityCount>
                      </FacilityContainer>
                    ))}
                </SelectTopContainer>

                {/* 두 번째 줄: 컴퓨터/복사기, 기타 */}
                <SelectBottomContainer>
                  {data[activeBuilding].facilities_summary.facility_set
                    .filter((category) =>
                      ["컴퓨터/복사기", "기타"].includes(
                        category.facility_category
                      )
                    )
                    .map((category, index) => (
                      <FacilityContainer
                        key={index}
                        onClick={() =>
                          setFacilityList(category.facility_list || [])
                        }
                      >
                        <FacilityText
                          isButtonactive={
                            facilityList === category.facility_list
                          }
                        >
                          {category.facility_category}
                        </FacilityText>
                        <FacilityCount
                          isButtonactive={
                            facilityList === category.facility_list
                          }
                        >
                          {category.facility_list.length}
                        </FacilityCount>
                      </FacilityContainer>
                    ))}
                </SelectBottomContainer>
              </ChooseContianer>
            </TitleContainer>
            <ContentContainer>
              {/* 시설 리스트 */}
              {facilityList.length > 0 ? (
                facilityList.map((facility, index) => (
                  <ContentButton
                    key={index}
                    onClick={() => {
                      // "던킨도넛"인 경우에만 handleGo 함수 호출
                      if (facility.facility_name === "던킨") {
                        goToshopping();
                      } else if (facility.facility_name === "그라찌에") {
                        console.log("그라찌에 버튼 클릭");
                        // "그라찌에"일 경우 goToshoppingtwo 함수 호출
                        goToshoppingtwo();
                      }
                    }}
                  >
                    <ContentText>{facility.facility_name}</ContentText>
                    <InfoContainer>
                      <InfoTextBname>{facility.building_name}</InfoTextBname>
                      <InfoText>{facility.facility_loc}</InfoText>
                      <Line />
                      <InfoText>{facility.facility_desc}</InfoText>
                    </InfoContainer>
                  </ContentButton>
                ))
              ) : (
                <p>해당 카테고리에 시설이 없습니다.</p>
              )}
            </ContentContainer>
          </TotalModal>
        )}
      </MapImage>
    </ImageContainer>
  );
};

export default Map;
