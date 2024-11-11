import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 145px;
  height: 200px;
`;
const ImgContainer = styled.img`
  width: 145px;
  height: 150px;
`;

const TextContainer = styled.div`
  width: 135px;
  height: 15px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 5px;
`;
const MenuName = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 11px;
  color: #000000;
`;
const MenuCost = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 11px;
  color: #000000;
`;
function MenuCard({ where, menuname, menucost }) {
  return (
    <Container>
      <ImgContainer src={where} />
      <TextContainer>
        <MenuName>{menuname}</MenuName>
        <MenuCost>{menucost}</MenuCost>
      </TextContainer>
    </Container>
  );
}
export default MenuCard;
