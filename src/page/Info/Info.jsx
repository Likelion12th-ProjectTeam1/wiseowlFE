import styled from "styled-components";
import InfoHeader from "./components/infoheader";
import DropDown from "../../component/DropDown";
import { useState } from "react";



const MiddleContainer = styled.div`
    width : 390px;
    height : 50px;
    display : flex;
    flex-direction: column;
    margin-bottom : 950px;
`

const MajorContainer =styled.div`
    width : 390px;
    height : 50px;
    display : flex;
    flex-direction: row;
    margin-top: 35px;
`

const SecondmajorContainer = styled.div`
    width : 390px;
    height : 50px;
    display : flex;
    flex-direction: row;
    position: absolute;
    top : 500px;
`

const DropDownContainer = styled.div`
    width : 150px;
    height : 50px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`

const DropdownText = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 14.486px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
`

const ButtonTitle = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 14.486px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
    margin-left : 45px;
`

const CautionText = styled.h5`
    color: #A3A3A3;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top : 620px;
`

const ChooseContainer = styled.div`
    width : 390px;
    height : 100px;
    display : flex;
    flex-direction: column;
    position : absolute;
    top : 380px;
`

const ButtonContainer = styled.div`
    width : 390px;
    height : 100px;
    display : flex;
    flex-direction: row;
`
const MajorButton = styled.div`
    width: 20%;
    height: 45%;
    border-radius: 16px;
    border: 1.811px solid ${props => props.isActive ? "#5D96E8" : "#D9D9D9"};
    display: flex;            
    align-items: center;      
    justify-content: center;   
    margin-left: 40px;
    margin-top: 10px;
    transition: border 0.3s;

    color: ${props => props.isActive ? "#5D96E8" : "#A09F9F"}; /* 텍스트 색 변경 */
    
    &:hover {
        border: 1.811px solid #5D96E8;
        color: #5D96E8;
    }
`;

const NextButton = styled.div`
    width : 150px;
    height : 50px;
    border-radius: 4px;
    background: #5D96E8;
    color : #FFF;
    position: absolute;
    top : 750px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function Info(){

    const [choose , setChoose] = useState("이중전공")

    const HandleChoose = (value) => {
        setChoose(value);
    };

    return(
        <div className="page-container">
            <InfoHeader />
            <MiddleContainer>
                <DropDownContainer>
                    <DropdownText>학번</DropdownText>
                    <DropDown />
                </DropDownContainer>
                <MajorContainer>
                    <DropDownContainer>
                        <DropdownText>본전공 단과대</DropdownText>
                        <DropDown />
                    </DropDownContainer>
                    <DropDownContainer>
                        <DropdownText>본전공</DropdownText>
                        <DropDown />
                    </DropDownContainer>
                </MajorContainer>
            </MiddleContainer>
            <ChooseContainer>
                <ButtonTitle>이중전공 및 부전공</ButtonTitle>
                <ButtonContainer>
                    <MajorButton isActive={choose === "이중전공"} onClick={() => HandleChoose("이중전공")}>
                        이중전공
                    </MajorButton>
                    <MajorButton isActive={choose === "부전공"} onClick={() => HandleChoose("부전공")}>
                        부전공
                    </MajorButton>
                    <MajorButton isActive={choose === "전공심화"} onClick={() => HandleChoose("전공심화")}>
                        전공심화
                    </MajorButton>
                </ButtonContainer>
            </ChooseContainer>
            {choose !== "전공심화" && (
                <SecondmajorContainer>
                    <DropDownContainer>
                        <DropdownText>{choose} 단과대</DropdownText>
                        <DropDown />
                    </DropDownContainer>
                    <DropDownContainer>
                        <DropdownText>{choose}</DropdownText>
                        <DropDown />
                    </DropDownContainer>
                </SecondmajorContainer>
            )}
            <CautionText>학과정보를 입력하지 않으시면 이수과목을 입력할 수 없습니다.</CautionText>
            <NextButton>다음</NextButton>
        </div>
    );
}