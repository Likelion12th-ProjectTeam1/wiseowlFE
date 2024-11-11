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

const categories = [
  { category: "all", label: "전체" },
  { category: "donuts", label: "도넛" },
  { category: "coffee", label: "커피" },
  { category: "beverage", label: "음료" },
  { category: "ready-made", label: "냉동간편식" },
];

const products = [
  {
    product_category: "all",
    product_list: [
      {
        product_name: "아메리카노",
        product_price: 4500,
        product_img: americano,
      },
      { product_name: "카페라떼", product_price: 5500, product_img: americano },
    ],
  },
  {
    product_category: "donuts",
    product_list: [
      {
        product_name: "글레이즈드 도넛",
        product_price: 1800,
        product_img: americano,
      },
    ],
  },
  {
    product_category: "coffee",
    product_list: [
      {
        product_name: "아메리카노",
        product_price: 4500,
        product_img: americano,
      },
      { product_name: "카페라떼", product_price: 5500, product_img: americano },
    ],
  },
  {
    product_category: "beverage",
    product_list: [
      {
        product_name: "아메리카노",
        product_price: 4500,
        product_img: americano,
      },
    ],
  },
  {
    product_category: "ready-made",
    product_list: [
      {
        product_name: "아메리카노",
        product_price: 4500,
        product_img: americano,
      },
      { product_name: "카페라떼", product_price: 5500, product_img: americano },
    ],
  },
];

function MenuCategory() {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
