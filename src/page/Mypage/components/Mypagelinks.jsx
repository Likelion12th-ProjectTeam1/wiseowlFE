import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
const LinkItem = styled.div`
  width: 300px;
  font-size: 16px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-size: 17px;
  color: #010101;
`;

const MyPageLinks = ({ text, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <LinkItem onClick={handleClick}>
      <Text>{text}</Text>
      <GoChevronRight />
    </LinkItem>
  );
};

export default MyPageLinks;
