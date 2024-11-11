import styled from "styled-components";

import cart from "../../../img/Cart.png";

const MenuSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductImage = styled.img`
  width: 145px;
  height: 150px;
`;

const TextBox = styled.div`
  width: 35%;
  height: 30%;
`;

const ProductName = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 13px;
  color: #000000;
`;

const ProductPrice = styled.div`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
`;

const Addbtn = styled.button`
  width: 33px;
  height: 33px;
  background-image: url(${cart});
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  border: 1.18px solid rgba(0, 0, 0, 0.26);
  border-radius: 5.66px;
  cursor: pointer;
`;

function MenuSelectBar({ products }) {
  return (
    <MenuSelectContainer>
      {products.map((product, index) => (
        <ProductItem key={index}>
          <ProductImage src={product.product_img} alt={product.product_name} />
          <TextBox>
            <ProductName>{product.product_name}</ProductName>
            <ProductPrice>
              {product.product_price.toLocaleString()}원
            </ProductPrice>
          </TextBox>
          <Addbtn />
        </ProductItem>
      ))}
    </MenuSelectContainer>
  );
}

export default MenuSelectBar;
