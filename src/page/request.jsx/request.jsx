import React from 'react';
import styled from 'styled-components';
import DropDown3 from '../../component/DropDown3';
import DropDown4 from '../../component/DropDown4';
import DropDown5 from '../../component/DropDown5';

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: flex-start; 
  min-height: 100vh; 
  text-align: left; 
  padding-top: 50px; 
  padding-left: 50px; 
  width: 390px;
`;

const ImageWrapper = styled.div`
  width: 200px; 
  align-self: flex-end;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -30px;
`;

const HighlightedText = styled.p`
  font-size: 22px;
  font-weight: 100;
  color: #000000;
  margin-top: -60px;
  text-align: left; 
`;

const InstructionText = styled.p`
  font-size: 11px;
  font-weight: 300;
  margin-top: 20px;
  max-width: 600px;
  white-space: pre-line;
  color: #A3A3A3;
  text-align: left;
`;

const RequestText = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px; 
  color: #000000;
  text-align: left;
`;

const PText = styled.p`
  font-size: 11.5px;
  margin-bottom: 5px; 
  color: #000000;
`;

const MajorDText = styled.p`
  font-size: 11.5px;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #000000;
`;

const MajorText = styled.p`
  font-size: 11.5px;
  margin-top: 20px; 
  margin-bottom: 5px;
  color: #000000;
`;

const MajorWrapper = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 100%; 
  margin-top: 10px; 
  gap: 40px;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
  margin-top: 200px;
  margin-bottom: 20px; 
  margin-right: 100px;
`;

const SubmitButton = styled.button`
  background-color: #ECECEC;
  color: #959595;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13.4px;
  font-weight: bold;
  cursor: pointer;
  width: 258px;
  height: 40px;
  margin-left: -70px;
  
  &:hover {
    background-color: rgb(169, 168, 168);
  }

  &:active {
    background-color: #959595;
  }
`;

export default function Request() {
  // 버튼 클릭 시 수행할 작업 (예시)
  const handleSubmit = () => {
    alert("신청이 완료되었습니다!");
  };

  return (
    <Container>

      <ImageWrapper>
        <Image src="/img/request2.jpg" alt="Request" />
      </ImageWrapper>

      <HighlightedText>
        잠깐! <br />
        혹시 해당하는 학번이 없으신가요?
      </HighlightedText>

      <InstructionText>
        와이즈올은 원활한 서비스 제공을 위해 21학번
        <br />
        이전 학번은 요청을 통해 서비스 제공을 하고 있습니다.
      </InstructionText>

      <RequestText>
        원하시는 학번을 요청해주세요.
      </RequestText>

      <PText>학번</PText>
      <DropDown3 />

      <MajorWrapper>
        <div>
          <MajorDText>본전공 단과대</MajorDText>
          <DropDown4 />
        </div>
        <div>
          <MajorText>본전공</MajorText>
          <DropDown5 />
        </div>
      </MajorWrapper>

      <SubmitButtonWrapper>
        <SubmitButton onClick={handleSubmit}>
          신청 완료
        </SubmitButton>
      </SubmitButtonWrapper>
    </Container>
  );
}
