import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import MenuCard from "./components/MenuCard";

import americano from "../../img/menu/americano.png";
import latte from "../../img/menu/latte.png";
import donut from "../../img/menu/donut.png";

import MenuCategory from "./components/MenuCategory";

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  margin-bottom: 70px;
`;

const CustomSpace = styled.div`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;

const HeaderHorizontalBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 25px;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 30px;
`;
const NameText = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 22px;
  color: #000000;
  margin-top: -3px;
`;
const ShopLocation = styled.div`
  width: 82px;
  height: 24px;
  border: 1.8px solid #5d96e8;
  border-radius: 16px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  color: #5d96e8;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 1px;
`;
const TopBox = styled.div``;
const Recommenttext = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
  margin-left: 45px;
`;
const MenuCardContainer = styled.div`
  min-width: 390px;
  height: 200px;
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  gap: 10px;
`;
const BottomBox = styled.div``;
export default function Shopping() {
  return (
    <Container>
      <HeaderHorizontalBox>
        <FaChevronLeft size="22px" />
        <NameText>던킨도너츠</NameText>
        <ShopLocation>백년관 1층</ShopLocation>
      </HeaderHorizontalBox>
      <TopBox>
        <Recommenttext>이런 상품은 어떠신가요?</Recommenttext>
        <MenuCardContainer>
          <MenuCard
            where={americano}
            menuname={"아메리카노"}
            menucost={"4,500원"}
          />
          <MenuCard where={latte} menuname={"카페라떼"} menucost={"5,500원"} />
          <MenuCard
            where={donut}
            menuname={"올리브츄이스티"}
            menucost={"1,900원"}
          />
        </MenuCardContainer>
      </TopBox>
      <BottomBox>
        <MenuCategory></MenuCategory>
      </BottomBox>
    </Container>
  );
}
