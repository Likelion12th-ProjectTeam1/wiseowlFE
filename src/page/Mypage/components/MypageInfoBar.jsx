import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 300px;
  font-size: 16px;
  font-family: Inter;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
const DummyDiv = styled.div`
  width: 10%;
`;
const LeftText = styled.p`
  width: 40%;
  padding-left: 40px;
  font-weight: 500;
  color: #737373;
  text-align: left;
  font-size: 13px;
  margin: 0;
`;

const RightText = styled.p`
  width: 55%;
  padding-left: 25px;
  font-weight: 600;
  color: #737373;
  text-align: left;
  font-size: 13px;
  margin: 0;
`;

const MypageInfoBar = ({ lefttext, righttext, isscore }) => {
  return (
    <Item>
      <LeftText>{lefttext}</LeftText>
      <DummyDiv></DummyDiv>

      {isscore ? (
        <RightText>{righttext}/4.5</RightText>
      ) : (
        <RightText>{righttext}</RightText>
      )}
    </Item>
  );
};

export default MypageInfoBar;
