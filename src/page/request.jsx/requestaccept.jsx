import React from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트 생성
const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: flex-start; /* 세로로 위쪽 정렬 */
  align-items: center; /* 가로 가운데 정렬 */
  height: 100vh; /* 화면 전체 높이 */
  text-align: center; /* 텍스트 가운데 정렬 */
  padding-top: 150px; /* 위쪽에 약간의 여백 추가 */
  width: 390px;
`;


const Image = styled.img`
  max-width: 100%; /* 이미지가 너무 크지 않게 제한 */
  height: auto;
  
`;

const Title = styled.h1`
  margin-top: 20px; /* 제목과 이미지 사이 간격 */
  font-size: 22px;
  font-weight: 300;
`;

const Text = styled.p`
  margin-top: 10px; /* 텍스트와 제목 사이 간격 */
  font-size: 9px;
  line-height: 1.5;
  max-width: 600px; /* 텍스트 길이를 제한하여 너무 길어지지 않게 */
  color: #5D96E8;
  
`;

export default function RequestAccept() {
  return (
    <Container>
      <Image src="/img/request.jpg" alt="Request" />
      <Title>요청완료</Title>
      <Text>
        해당 학과 학번 추가 이후에 알림과 메일을 통해 <br />
        완료되었음음을 알려드리겠습니다
      </Text>
    </Container>
  );
}
