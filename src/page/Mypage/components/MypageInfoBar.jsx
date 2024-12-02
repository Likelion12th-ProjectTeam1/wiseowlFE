import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 290px;
  font-size: 16px;
  font-family: Inter;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
const DummyDiv = styled.div`
  width: 23px;
`;
const LeftText = styled.p`
  width: 120px;
  padding-left: 40px;
  font-weight: 500;
  color: #737373;
  text-align: left;
  font-size: 13px;
  margin: 0;
`;

const RightText = styled.p`
  width: 125px;
  padding-left: 25px;
  font-weight: 600;
  color: #737373;
  text-align: left;
  font-size: 12px;
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
