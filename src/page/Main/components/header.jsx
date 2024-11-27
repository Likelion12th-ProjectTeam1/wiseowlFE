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

const Title = styled.div`
  margin-top: 15px;
  margin-left: 50px;
  background-image: url("/img/owl.svg");
  background-repeat: no-repeat;
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
      <Title />
      <Notice size={30} onClick={goToMainNoticepage} />
    </HeaderContainer>
  );
}
