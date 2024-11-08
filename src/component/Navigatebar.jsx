import styled, { ThemeProvider } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import TabShape from "./TabShape";

import Main_btn from "../img/Home_btn.png";
import Require_btn from "../img/Require_btn.png";
import Middle_btn from "../img/Middle_btn.png";
import Notice_btn from "../img/Notice_btn.png";
import Mypage_btn from "../img/Mypage_btn.png";

import Off_Home_btn from "../img/Off_Home_btn.png";
import Off_Require_btn from "../img/Off_Require_btn.png";
import Off_mypage_btn from "../img/Off_mypage_btn.png";
import Off_Notice_btn from "../img/Off_Notice_btn.png";

const theme = {
  colors: {
    primary: "rgba(0, 0, 0, 0.0)",
  },
};

const Container = styled.div`
  width: 390px;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1000;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Img1 = styled.img.attrs({ src: Main_btn })`
  position: absolute;
  top: -35px;
  left: 5px;
  width: 72px;
  height: 53px;
  cursor: pointer;
`;

const Img2 = styled.img.attrs({ src: Require_btn })`
  position: absolute;
  top: -35px;
  left: 85px;
  width: 72px;
  height: 53px;
  cursor: pointer;
`;

const Img3 = styled.img.attrs({ src: Notice_btn })`
  position: absolute;
  top: -35px;
  left: 230px;
  width: 72px;
  height: 53px;
  cursor: pointer;
`;

const Img4 = styled.img.attrs({ src: Mypage_btn })`
  position: absolute;
  top: -35px;
  left: 305px;
  width: 72px;
  height: 53px;
  cursor: pointer;
`;

const OffImg1 = styled.img.attrs({ src: Off_Home_btn })`
  position: absolute;
  top: -30px;
  left: 28px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const OffImg2 = styled.img.attrs({ src: Off_Require_btn })`
  position: absolute;
  top: -30px;
  left: 109px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const OffImg3 = styled.img.attrs({ src: Off_mypage_btn })`
  position: absolute;
  top: -30px;
  left: 328px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const OffImg4 = styled.img.attrs({ src: Off_Notice_btn })`
  position: absolute;
  top: -30px;
  left: 252px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const MiddleImg = styled.img.attrs({ src: Middle_btn })`
  position: absolute;
  top: -75px;
  left: 165.5px;
  width: 55px;
  height: 55px;
  cursor: pointer;
`;

function Navigatebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Background>
          <TabShape />
        </Background>
        <ImagesContainer>
          {location.pathname === "/main" ? (
            <>
              <Img1 alt="main" onClick={() => handleNavigation("/main")} />
              <OffImg2
                alt="require"
                onClick={() => handleNavigation("/require")}
              />
              <MiddleImg alt="Middle" />
              <OffImg4
                alt="notice"
                onClick={() => handleNavigation("/notice")}
              />
              <OffImg3
                alt="mypage"
                onClick={() => handleNavigation("/mypage")}
              />
            </>
          ) : location.pathname === "/require" ? (
            <>
              <OffImg1 alt="main" onClick={() => handleNavigation("/main")} />
              <Img2
                alt="require"
                onClick={() => handleNavigation("/require")}
              />
              <MiddleImg alt="Middle" />
              <OffImg4
                alt="notice"
                onClick={() => handleNavigation("/notice")}
              />
              <OffImg3
                alt="mypage"
                onClick={() => handleNavigation("/mypage")}
              />
            </>
          ) : location.pathname === "/notice" ? (
            <>
              <OffImg1 alt="main" onClick={() => handleNavigation("/main")} />
              <OffImg2
                alt="require"
                onClick={() => handleNavigation("/require")}
              />
              <MiddleImg alt="Middle" />
              <Img3 alt="notice" onClick={() => handleNavigation("/notice")} />
              <OffImg3
                alt="mypage"
                onClick={() => handleNavigation("/mypage")}
              />
            </>
          ) : location.pathname === "/mypage" ? (
            <>
              <OffImg1 alt="main" onClick={() => handleNavigation("/main")} />
              <OffImg2
                alt="require"
                onClick={() => handleNavigation("/require")}
              />
              <MiddleImg alt="Middle" />
              <OffImg4
                alt="notice"
                onClick={() => handleNavigation("/notice")}
              />
              <Img4 alt="mypage" onClick={() => handleNavigation("/mypage")} />
            </>
          ) : (
            <>
              <OffImg1 alt="main" onClick={() => handleNavigation("/main")} />
              <OffImg2
                alt="require"
                onClick={() => handleNavigation("/require")}
              />
              <MiddleImg alt="Middle" />
              <OffImg4
                alt="notice"
                onClick={() => handleNavigation("/notice")}
              />
              <OffImg3
                alt="mypage"
                onClick={() => handleNavigation("/mypage")}
              />
            </>
          )}
        </ImagesContainer>
      </Container>
    </ThemeProvider>
  );
}

export default Navigatebar;
