import styled from "styled-components";
import { FaBell } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 390px;
  height: 50px;
  margin-top: 20px;
`;

const Title = styled.img`
  margin-top: 15px;
  margin-left: 30px;
  width: 150px;
  height: 30px;
`;

const Notice = styled(FaBell)`
  margin-left: auto;
  margin-right: 25px;
  margin-top: 5px;
  fill: #c2c1c1;
`;

export default function Header() {
  const navigate = useNavigate();

  const goToMainNoticepage = () => {
    navigate("/mainnotice");
  };

  return (
    <HeaderContainer>
      <Title src="/img/wiseowl.svg" alt="wiseowl"/>
      <Notice size={30} onClick={goToMainNoticepage} />
    </HeaderContainer>
  );
}
