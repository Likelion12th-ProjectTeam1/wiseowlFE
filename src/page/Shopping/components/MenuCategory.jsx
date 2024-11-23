import React, { useState } from "react";
import styled from "styled-components";

import americano from "../../../img/menu/americano.png";

import MenuSelectBar from "./MenuSelectBar";

const MenuCategoryContainer = styled.div`
  min-width: 390px;
  height: 40px;
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨김 */

  /* Webkit 기반 브라우저에서 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryText = styled.button`
  min-width: 85px;
  height: 40px;
  background-color: #f5f6fb;
  border: 0;
  border-bottom: 3px solid ${(props) => props.bordercolor};
  color: ${(props) => (props.active ? "#113371" : "#737373")};
  font-weight: 500;
  cursor: pointer;
`;

function MenuCategory({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // API 데이터 구조 변환
  const transformedData = data.map((category) => ({
    product_category: category.product_category,
    product_list: category.product_list.map((product) => ({
      product_name: product.product_name,
      product_price: product.product_price,
      product_img: product.product_img,
    })),
  }));

  const products = transformedData;

  const getCategoryLabel = (category) => {
    switch (category) {
      case "ALL":
        return "전체";
      case "DONUT":
        return "도넛";
      case "COFFEE":
        return "커피";
      case "BEVERAGE":
        return "음료";
      case "FOOD":
        return "음식";
      case "SNACK & MORE":
        return "기타";
    }
  };

  const categories = products.map((category) => ({
    category: category.product_category,
    label: getCategoryLabel(category.product_category),
  }));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.find(
    (product) => product.product_category === selectedCategory
  )?.product_list;

  return (
    <>
      <MenuCategoryContainer>
        {categories.map((category) => (
          <CategoryText
            key={category.category}
            onClick={() => handleCategoryClick(category.category)}
            bordercolor={
              selectedCategory === category.category ? "#113371" : "transparent"
            }
            active={selectedCategory === category.category}
          >
            {category.label}
          </CategoryText>
        ))}
      </MenuCategoryContainer>
      <MenuSelectBar products={filteredProducts} />
    </>
  );
}

export default MenuCategory;
