import styled from "styled-components";
import { FaBell } from "react-icons/fa6";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    width: 390px;
    height: 100px;
    margin-bottom: 20px;
`;

const Title = styled.div`
  position: absolute;
  margin-top: 15px;
  margin-left: 10px;
  background-image: url("/img/wiseowl.png");
  width: 9.1%;
  height: 3.9%;
`;

const Notice = styled(FaBell)`
  margin-left: auto;
  margin-right: 15px;
  margin-top: 5px;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Title />
            <Notice size={30} /> 
        </HeaderContainer>
    );
}
