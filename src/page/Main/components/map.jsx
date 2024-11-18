import styled from "styled-components";
import { useState, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

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
  background-image: url("/img/mainmap.png");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
`;

const BuildingZero = styled.div`
  position: absolute;
  background-image: url("/img/building0.png");
  top: 40%;
  left: 14%;
  width: 9vh;
  height: 9vh;
  background-size: cover;
  &:hover {
    transform: scale(1.3);
  }
`;

const BuildingOne = styled.div`
  position: absolute;
  background-image: url("/img/building1.png");
  top: 18%;
  left: 71%;
  width: 9.5vh;
  height: 12vh;
  background-size: cover;
  transform: scale(0.9);
  &:hover {
    transform: scale(1.1);
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
  color: #000;
  font-size: 12px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ContentButton = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #f9f9f9;
  padding: 4px;
  margin-top: 10px;
  border: 1px solid rgba(115, 115, 115, 0.3);
`;

const ContentText = styled.h4`
  color: #000;
  font-size: 5px;
  font-weight: 600;
`;

const InfoText = styled.h4`
    color: #A5A3A3;
    font-family: Inter;
    font-size: 4px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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

const Line = styled.div`
    width : 0.5px;
    height : 100%;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #D4D4D4;
`

const SelectContainer = styled.div`
    width : 100%;
    height : 70%;
    display : flex;
    flex-direction: row;
    padding : 1px;
`
const FacilityContainer = styled.div`
    width: 30%;
    height : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    margin-top: 2px;
`

const FacilityText = styled.h4`
    font-family: Inter;
    font-size: 7px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4;")};
    transition: color 0.3s, background-color 0.3s;
    margin-left : 1px;
`

const FacilityCount = styled.div`
    width : 30%;
    height : 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background: ${({ isButtonactive }) => (isButtonactive ? "#5D96E8" : "#D4D4D4;")};
    color: #FFF;
    margin-left: 1px;
    font-size: 10px;
    `

const ChooseContianer = styled.div`
  width : 100%;
  height : 50%;
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  width : 100%;
  height : 30%;
  display: flex;
  flex-direction: row;
`

const Cancle = styled(IoMdCloseCircleOutline)`
  margin-left : auto;
  margin-right: 10px;
`

const Map = ({ Mockdata }) => {
  const [activeBuilding, setActiveBuilding] = useState(null);  // 현재 활성화된 건물의 인덱스를 관리
  const [facilityList, setFacilityList] = useState([]);
  const mapRef = useRef(null);

  const handleBuildingClick = (buildingIndex) => {
    const selectedBuilding = Mockdata[buildingIndex];

    if (selectedBuilding && selectedBuilding.facilities_summary) {
      setActiveBuilding(buildingIndex);  // 해당 건물을 클릭하면 그 건물만 모달이 열리도록
      console.log(selectedBuilding);
      console.log(selectedBuilding.facilities_summary);
      console.log(activeBuilding);
      

      const allFacilities = selectedBuilding.facilities_summary.facility_set.find(
        (category) => category.facility_category === "전체"
      );

      setFacilityList(allFacilities ? allFacilities.facility_list : []);
    } else {
      console.error(`인덱스 ${buildingIndex}에 대한 정보가 없습니다.`);
      setActiveBuilding(null);  // 건물 정보가 없으면 모달을 닫음
    }
  };

  const handleMapClick = (e) => {
    if (mapRef.current && mapRef.current.contains(e.target)) {
      // setActiveBuilding(null);  // 맵 클릭 시 모든 모달을 닫음
    }
  };

  const handleModal = (e) => {
    setActiveBuilding(null);
  }

  return (
    <ImageContainer>
      <MapImage ref={mapRef} onClick={handleMapClick}>
        {/* 각 건물의 클릭 이벤트에서 인덱스를 사용 */}
        <BuildingZero onClick={() => handleBuildingClick(0)} />
        <BuildingOne onClick={() => handleBuildingClick(1)} />
  
        {/* 활성화된 건물에 대해서만 모달을 표시 */}
        {activeBuilding !== null && (
          <TotalModal>
            <TitleContainer>
              <HeaderContainer>
                <TitleText>{Mockdata[activeBuilding]?.building_name || "건물 이름 없음"}</TitleText>
                <Cancle onClick={handleModal}/>
              </HeaderContainer>
              <ChooseContianer>
                {/* 첫 번째 줄: 전체, 식장/매점, 열람실 */}
                <SelectContainer>
                  {Mockdata[activeBuilding].facilities_summary.facility_set
                    .filter((category) =>
                      ["전체", "카페/식당", "열람실"].includes(category.facility_category)
                    )
                    .map((category, index) => (
                      <FacilityContainer
                        key={index}
                        onClick={() =>
                          setFacilityList(category.facility_list || [])
                        }
                      >
                        <FacilityText
                          isButtonactive={facilityList === category.facility_list}
                        >
                          {category.facility_category}
                        </FacilityText>
                        <FacilityCount
                          isButtonactive={facilityList === category.facility_list}
                        >
                          {category.facility_list.length}
                        </FacilityCount>
                      </FacilityContainer>
                    ))}
                </SelectContainer>

                {/* 두 번째 줄: 컴퓨터/복사기, 기타 */}
                <SelectContainer>
                  {Mockdata[activeBuilding].facilities_summary.facility_set
                    .filter((category) =>
                      ["컴퓨터/복사기", "기타"].includes(category.facility_category)
                    )
                    .map((category, index) => (
                      <FacilityContainer
                        key={index}
                        onClick={() =>
                          setFacilityList(category.facility_list || [])
                        }
                      >
                        <FacilityText
                          isButtonactive={facilityList === category.facility_list}
                        >
                          {category.facility_category}
                        </FacilityText>
                        <FacilityCount
                          isButtonactive={facilityList === category.facility_list}
                        >
                          {category.facility_list.length}
                        </FacilityCount>
                      </FacilityContainer>
                    ))}
                </SelectContainer>
              </ChooseContianer> 
            </TitleContainer>
            <ContentContainer>
              {/* 시설 리스트 */}
              {facilityList.length > 0 ? (
                facilityList.map((facility, index) => (
                  <ContentButton key={index}>
                    <ContentText>{facility.facility_name}</ContentText>
                    <InfoContainer>
                      <InfoText>{facility.building_name}</InfoText>
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
  );};
  
  export default Map;