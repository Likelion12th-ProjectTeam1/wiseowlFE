import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import axiosInstance from "../../auth/axiosInstance";
import { FaChevronLeft } from "react-icons/fa";

import MenuCard from "./components/MenuCard";

import americano from "../../img/menu/americano.png";
import latte from "../../img/menu/latte.png";
import donut from "../../img/menu/donut.png";

import MenuCategory from "./components/MenuCategory";
import Notice from "./../Notice/Notice";

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
  overflow-y: hidden;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  gap: 10px;
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨김 */

  /* Webkit 기반 브라우저에서 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BottomBox = styled.div``;
export default function Shopping() {
  const facility_num = "0dk";
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/products/${facility_num}/`
        );
        setdata(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [facility_num]);

  return (
    <Container>
      {loading ? (
        <p>로딩 중...</p>
      ) : data ? (
        <>
          <HeaderHorizontalBox>
            <FaChevronLeft size="22px" />
            <NameText>던킨도너츠</NameText>
            <ShopLocation>
              {data.builidng_name} {data.facility_loc}
            </ShopLocation>
          </HeaderHorizontalBox>
          <TopBox>
            <Recommenttext>이런 상품은 어떠신가요?</Recommenttext>
            <MenuCardContainer>
              {data.products_recommended.map((product) => (
                <MenuCard
                  key={product.product_id}
                  where={product.product_img}
                  menuname={product.product_name}
                  menucost={`${product.product_price.toLocaleString()}원`}
                />
              ))}
            </MenuCardContainer>
          </TopBox>
          <BottomBox>
            <MenuCategory data={data.products} />
          </BottomBox>
        </>
      ) : (
        <p>데이터를 불러오지 못했습니다.</p>
      )}
    </Container>
  );
}
