import styled from "styled-components";
import { useState, useRef } from "react";

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
  width: 9vh;
  height: 10vh;
  background-size: cover;
  transform: scale(0.9);
  &:hover {
    transform: scale(1.3);
  }
`;

const TotalModal = styled.div`
  position: absolute;
  top: 60px;
  left: 60%;
  transform: translateX(-50%);
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  background-color: #FFF;
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ContentButton = styled.div`
  width: 40%;
  height: 20%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #F9F9F9;
  padding: 5px;
  margin-top: 10px;
  border: 1px solid rgba(115, 115, 115, 0.30);
`;

const ContentText = styled.h4`
  color: #000;
  font-size: 8px;
  font-weight: 600;
`;

const Map = ({ Mockdata }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [facilityList, setFacilityList] = useState([]);
  const mapRef = useRef(null);

  const handleBuildingClick = (buildingNum) => {
    // Mockdata에서 buildingNum을 키로 접근
    const selectedBuilding = Mockdata[buildingNum];

    if (selectedBuilding && selectedBuilding.facilities_summary) {
        setIsModalOpen(true);
        setSelectedCategory("전체");

        // "전체" 카테고리를 찾고, 시설 목록을 설정
        const allFacilities = selectedBuilding.facilities_summary.facility_set.find(
            (category) => category.facility_category === "전체"
        );

        setFacilityList(allFacilities ? allFacilities.facility_list : []);
    } else {
        console.error(`건물 번호 ${buildingNum}에 대한 정보가 없습니다.`);
        setIsModalOpen(false);
    }
};

  const handleMapClick = (e) => {
    if (mapRef.current && mapRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  return (
    <ImageContainer>
      <MapImage ref={mapRef} onClick={handleMapClick}>
        <BuildingZero onClick={() => handleBuildingClick(0)} />
        <BuildingOne onClick={() => handleBuildingClick(1)} />
        {isModalOpen && (
          <TotalModal onClick={(e) => e.stopPropagation()}>
            <TitleContainer>
              <TitleText>교내 편의시설</TitleText>
            </TitleContainer>
            <ContentContainer>
              {facilityList.length > 0 ? (
                facilityList.map((facility, index) => (
                  <ContentButton key={index}>
                    <ContentText>{facility.facility_name} - {facility.facility_loc}</ContentText>
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
