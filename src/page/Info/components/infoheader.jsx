import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
    width : 390px;
    height : 50px;
    display : flex;
    flex-direction: row;

`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    height : 100%;
`

const InfoTitle = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left : 40px;
    margin-top: 65px;
`

const JumpInfo = styled.h3`
    color: #A3A3A3;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 50px;
    margin-top: 25px;
`
const QuestionImg = styled.img`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 100px;
    margin-left: 10px;
`;
export default function InfoHeader(){
    const navigate = useNavigate();

    const goToRequestpage = () => {
        navigate("/request");
      };
    return(
        <HeaderContainer>
            <TitleContainer>
                <InfoTitle>학과정보를 <br/>입력해주세요</InfoTitle>
                <QuestionImg  src="/img/question.svg" alt="question"onClick={goToRequestpage}/>
            </TitleContainer>
        </HeaderContainer>
    );
}