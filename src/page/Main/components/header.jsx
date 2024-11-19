import styled from "styled-components";
import { FaBell } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* 수직 가운데 정렬 */
    width: 390px;
    height: 100px;
    margin-bottom: 20px;
`;

const Title = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  background-image: url("/img/wiseowl.png");
  background-repeat: no-repeat;
  width: 150px;
  height: 30px;
`;

const Notice = styled(FaBell)`
  margin-left: auto;
  margin-right: 15px;
  margin-top: 5px;
  fill: #C2C1C1;

`;

export default function Header() {


  const navigate = useNavigate();

  const goToMainNoticepage = () => {
    navigate("/mainnotice");
};


    return (
        <HeaderContainer>
            <Title />
            <Notice size={30} onClick={goToMainNoticepage}/> 
        </HeaderContainer>
    );
}
