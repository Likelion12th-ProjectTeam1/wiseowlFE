import styled from "styled-components";
import { useState } from "react";
import { Select } from "antd";

const Container = styled.div`
    width : 390px;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    width : 100%;
    height : 100px;
`

const HeaderTitle = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 21.188px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top : 40px;
    margin-left : 40px;
`

const PasswordContainer = styled.div`
    width : 100%;
    height : 280px;
`
const ContainerHeader = styled.div`
    width : 100%;
    height : 10%;
    display : flex;
    flex-direction: column;
`

const ContainerTitle = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 14.782px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left : 40px;
`
const Line = styled.div`
    width : 100%;
    background: #ECEEEF;
    height : 3px;
`

const SpecialLine = styled.div`
    width : 25%;
    height :3px;
    background: #5D96E8;
    margin-left: 35px;
`
const PasswordText = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 14.782px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 40px;
    margin-top : 15px;
`

const InputBox = styled.input`
    width: 70%;
    height: 70px;
    border: 0.146px solid #737373;
    background: #FFF;
    box-sizing: border-box; /* 패딩과 보더 포함 */
    padding: 10px; /* 내부 여백 */
    margin-left: 40px;
    margin-top: 10px;
    border-radius: 3.696px;
    line-height: normal; /* 라인 높이 설정 */
    -webkit-appearance: none; /* 브라우저 기본 스타일 제거 */
    -moz-appearance: none;
    appearance: none;

    &::placeholder {
        color: #B0B0B0;
        font-size: 12px;
        font-family: Inter;
    }
`;

const ButtonContainer = styled.div`
    width : 100%;
    height : 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PasswordButton = styled.div`
    width : 50%;
    height : 30px;
    border-radius: 30px;
    background: #5D96E8;
    display : flex;
    align-items: center;
    justify-content: center;
    color : #FFF;
    margin-top: 70px;
`

const MajorContainer = styled.div`
    width : 100%;
    height : 300px;
`
const CollegeSelect = styled(Select)` // antd의 Select로 사용
  width: 120px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  margin-left: 40px;
  .ant-select-selector {
    height: 30px !important;
    border-radius: 4px !important;
    border: 2.811px solid #E8E8E8 !important;
    background: #FFF !important;
    color: #000 !important;
    display: flex;
    align-items: center;
  }
`;

const MajorText = styled.h4`
    color: #000;
    font-family: Inter;
    font-size: 14.782px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 50px;
`
const SelectHeader = styled.div`
    width: 100%;
    height : 20px;
    margin-top: 20px;
    display : flex;
    font-size: row;
`

const SelectContainer = styled.div`
    width : 100%;   
    height : 30%;
    display: flex;
    flex-direction: column;
`

const ChooseContainer =styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction: row;
    margin-top: 10px;
`

const MajorButton = styled.div`
    width : 50%;
    height : 30px;
    border-radius: 30px;
    background: #5D96E8;
    display : flex;
    align-items: center;
    justify-content: center;
    color : #FFF;
    margin-top: 90px;
`

const GubunContainer = styled.div`
    width : 100%;
    height : 300px;
`

const MiddleContainer = styled.div`
    width : 100%;
    height : 20%;
    display : flex;
    align-items: center;
    justify-content: center;
`

const LowContainer = styled.div`
    width : 100%;
    height : 40%;
`

const GubunSelect = styled(Select)` // antd의 Select로 사용
  width: 120px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  .ant-select-selector {
    height: 30px !important;
    border-radius: 4px !important;
    border: 2.811px solid #E8E8E8 !important;
    background: #FFF !important;
    color: #000 !important;
    display: flex;
    align-items: center;
  }
`;


const GubunButton = styled.div`
    width : 50%;
    height : 30px;
    border-radius: 30px;
    background: #5D96E8;
    display : flex;
    align-items: center;
    justify-content: center;
    color : #FFF;
    margin-bottom: 50px;
`
export default function EditMypage(){

    const [oldpassword, setOldpassword] = useState();
    const [newpassword, setNewpassword] = useState();
    const [gubun, setGubun] = useState("");

    const handleGubunChange = (value) => {
        setGubun(value);
    };

    const mockpassword = {
        "old_password": {oldpassword},
        "new_password": {newpassword}
    };



    return(
        <div className="page-container">
                <Header>
                    <HeaderTitle>회원정보 수정</HeaderTitle>
                </Header>
                <PasswordContainer>
                    <ContainerHeader>
                        <ContainerTitle>비밀번호변경</ContainerTitle>
                        <Line>
                            <SpecialLine />
                        </Line>
                        <PasswordText>현재 비밀번호</PasswordText>
                        <InputBox placeholder="현재 비밀번호를 입력해주세요" value = {oldpassword}></InputBox>
                        <PasswordText>변경할 비밀번호</PasswordText>
                        <InputBox placeholder="새 비밀번호를 입력해주세요" value = {newpassword}></InputBox>
                        <ButtonContainer>
                            <PasswordButton>비밀번호 변경하기</PasswordButton>
                        </ButtonContainer>
                    </ContainerHeader>
                </PasswordContainer>
                <MajorContainer>
                    <ContainerTitle>전공 변경</ContainerTitle>
                    <Line>
                        <SpecialLine />
                    </Line>
                    <SelectContainer>
                        <SelectHeader>
                            <MajorText>본전공 단과대</MajorText>
                            <MajorText>본전공</MajorText>
                        </SelectHeader>
                        <ChooseContainer>
                            <CollegeSelect></CollegeSelect>
                            <CollegeSelect></CollegeSelect>
                        </ChooseContainer>
                        <SelectHeader>
                            <MajorText>이중전공 단과대</MajorText>
                            <MajorText>이중전공</MajorText>
                        </SelectHeader>
                        <ChooseContainer>
                            <CollegeSelect></CollegeSelect>
                            <CollegeSelect></CollegeSelect>
                        </ChooseContainer>
                    </SelectContainer>
                    <ButtonContainer>
                        <MajorButton>수정완료</MajorButton>
                    </ButtonContainer>
                </MajorContainer>
                <GubunContainer>
                    <ContainerTitle>구분 변경</ContainerTitle>
                    <Line>
                        <SpecialLine />
                    </Line>
                    <MiddleContainer>
                        <GubunSelect value={gubun} onChange={handleGubunChange} placeholder="구분 선택">
                            <Select.Option value="이중전공">이중전공</Select.Option>
                            <Select.Option value="부전공">부전공</Select.Option>
                            <Select.Option value="전공심화">전공심화</Select.Option>
                        </GubunSelect>
                    </MiddleContainer>
                    {gubun !== "전공심화" && (
                    <LowContainer>
                        <SelectHeader>
                            <MajorText>{gubun} 단과대</MajorText>
                            <MajorText>{gubun}</MajorText>
                        </SelectHeader>
                        <ChooseContainer>
                            <CollegeSelect></CollegeSelect>
                            <CollegeSelect></CollegeSelect>
                        </ChooseContainer>
                    </LowContainer>)}
                    <ButtonContainer>
                        <GubunButton>구분 변경하기</GubunButton>
                    </ButtonContainer>
                </GubunContainer>
        </div>
    );
}
