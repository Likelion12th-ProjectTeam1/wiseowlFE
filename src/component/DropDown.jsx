import styled from "styled-components";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const DropDownContainer = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  border: 1.811px solid #D9D9D9;
  display: inline-block;
  position: relative;
`;

const DropDownContent = styled.div`
  position: absolute;
  top: 100%; 
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 5px 0;
  color: #737373;
  font-family: Inter;
  font-size: 14.782px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DropDownItem = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const IconWrapper = styled.span`
  margin-left: 5px; /* 텍스트와 아이콘 사이 간격 조정 */
  display: inline-flex;
  align-items: center;
`;

export default function DropDown() {
  const [view, setView] = useState(false);
  const [major, setMajor] = useState("통계학과");

  const BoxContent = () => (
    <>
      <DropDownItem onClick={() => handleItemClick("통계학과")}>통계학과</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("컴퓨터과학과")}>컴퓨터과학과</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("경영학과")}>경영학과</DropDownItem>
    </>
  );

  const handleItemClick = (item) => {
    setMajor(item);
    setView(false);
  };

  return (
    <DropDownContainer onClick={() => setView(!view)}>
      {major} 
      <IconWrapper>{view ? <FaChevronUp /> : <FaChevronDown />}</IconWrapper>
      {view && (
        <DropDownContent>
          <BoxContent />
        </DropDownContent>
      )}
    </DropDownContainer>
  );
}
