// OwlFamily.jsx
import React from 'react';
import styled from 'styled-components';

// 전체 페이지 스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 390px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -250px; /* 두 섹션의 경계선에 맞추기 위한 여백 */
  z-index: 1; /* 이미지가 위에 보이도록 설정 */
  margin-right: 50px;
`;

// 섹션 스타일
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.bgColor || '#FFFFFF'};
  height: ${(props) => props.height || 'auto'}; /* height 속성 적용 */
  position: relative; /* 자식 요소의 절대 위치를 위한 설정 */
`;

const Title = styled.h1`
  font-family: 'Rubik Mono One';
  font-size: 13px;
  color: #404756;
  margin-bottom: 40px; /* 여백 조정 */
`;

const Description = styled.p`
  font-size: 12px;
  font-family: 'Poor Story';
  color: #404756;
  text-align: center;
  margin: 10px 0;
`;

const OwlContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Owl = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #000;
    border-radius: 50%;
    top: 10px;
    left: 15px;
  }
`;



const Loading = () => {
  return (
    <Container>
      <Section bgColor="#EEEEEE" height="70vh">
        <Title>OWL FAMILY</Title>
        <Description>
          똑똑한 부엉이 친구들이 바보 감자를 도와
          <br />
          현명한 대학생활과 졸업을 도와준다.
        </Description>
      </Section>
      
      <Section bgColor="#7EB597" height="60vh">
      <Image src="/img/Potato.svg" alt="Request" />
        <OwlContainer>
          {/* 부엉이를 여기에 추가하세요 */}
        </OwlContainer>
      </Section>
    </Container>
  );
};

export default Loading;
