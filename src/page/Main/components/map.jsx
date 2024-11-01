// ImageBackground.js
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%; /* 화면에 맞춰 전체 너비 사용 */
  max-width: 390px; /* 최대 너비 제한 */
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
  overflow: auto;
`;

const BuildingZero = styled.div`
  position: absolute;
  background-image: url("/img/building0.png");
  top: 40%;
  left: 14%;
  width: 9vh;
  height: 9vh;
  background-size: cover;
  background-position: center;
  z-index: 10;
  &:hover {
    transform: scale(1.3);
  }
`;

const BuildingOne = styled.div`
  position: absolute;
  background-image: url("/img/building1.png");
  top: 18%;
  left: 72%;
  width: 9vh;
  height: 10vh;
  background-size: cover;
  background-position: center;
  z-index: 10;
  transform: scale(0.9);
  &:hover {
    transform: scale(1.3);
  }
`;

const BuildingTwo = styled.div`
  position: absolute;
  background-image: url("/img/building2.png");
  top: -3%;
  left: 51%;
  width: 10vh;
  height: 8vh;
  background-size: cover;
  background-position: center;
  z-index: 10;
  &:hover {
    transform: scale(1.3);
  }
`;

const BuildingThree = styled.div`
  position: absolute;
  background-image: url("/img/building3.png");
  top: 10%;
  left: 7%;
  width: 15vh;
  height: 8vh;
  background-size: cover;
  background-position: center;
  z-index: 10;
  &:hover {
    transform: scale(1.3);
  }
`;

const BuildingFour = styled.div`
  position: absolute;
  background-image: url("/img/building4.png");
  top: -25%;
  left: 63%;
  width: 15vh;
  height: 13vh;
  background-size: cover;
  background-position: center;
  z-index: 10;
  transform: scale(0.7);
  &:hover {
    transform: scale(1);
  }
`;

const Map = () => {
  return (
    <ImageContainer>
      <MapImage>
        <BuildingZero />
        <BuildingOne />
        <BuildingTwo />
        <BuildingThree />
        <BuildingFour />
      </MapImage>
    </ImageContainer>
  );
};

export default Map;
