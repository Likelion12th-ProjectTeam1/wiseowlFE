import styled from "styled-components";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

// 드롭다운 컨테이너 스타일
const DropDownContainer = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 5px 10px; /* 텍스트와 테두리 사이에 여백을 추가 */
  border-radius: 4px;
  border: 1.811px solid #D9D9D9;
  display: inline-block;
  position: relative;
  width: 140px; 
  font-size: 11.5px;
  color: #A09F9F;
  min-width: 73px; /* 최소 너비를 설정하여 너무 좁아지지 않도록 */
  text-align: center; /* 텍스트를 가운데 정렬 */
  height: 39px;
  line-height: 20px; /* 텍스트 높이에 맞게 줄 간격을 설정 */
  display: flex;
  justify-content: center; /* 텍스트 가로 정렬 */
  align-items: center; /* 텍스트 세로 정렬 */
  padding-top: 8px; /* 패딩을 통해 높이를 조정 */
  padding-bottom: 8px; /* 패딩을 통해 높이를 조정 */
  box-sizing: border-box; /* 패딩이 포함된 전체 크기 계산 */

`;

const SelectedItem = styled.div`
  overflow: hidden; /* 넘치는 내용 숨기기 */
  white-space: nowrap; /* 줄 바꿈 방지 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
  width: 100%; /* 너비를 100%로 설정 */
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
  font-weight: 500;
  line-height: normal;
  max-height: 200px; /* 최대 높이를 설정하여 그 이상일 경우 스크롤이 생기도록 */
  overflow-y: auto; /* 세로로 스크롤이 생기도록 설정 */
  font-family: Inter;
  font-weight: 600;
`;

const DropDownItem = styled.li`
  padding: 8px 12px;
  font-size: 11.5px; /* 글자 크기 설정 */
  overflow: hidden; /* 넘치는 내용 숨기기 */
  white-space: nowrap; /* 줄 바꿈 방지 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const IconWrapper = styled.span`
  margin-left: 5px; /* 텍스트와 아이콘 사이 간격 조정 */
  display: inline-flex;
  align-items: center;
`;

export default function DropDown4({ colleges, selectedCollege, setSelectedCollege }) {
  const [view, setView] = useState(false);

  const handleItemClick = (item) => {
    setSelectedCollege(item);
    setView(false);
    console.log('선택된 단과대:', item); // 선택된 단과대 로그
  };

  return (
    <DropDownContainer onClick={() => setView(!view)}>
      <SelectedItem>{selectedCollege || "단과대를 선택하세요"} </SelectedItem>
      <IconWrapper>{view ? <FaChevronUp /> : <FaChevronDown />}</IconWrapper>
      {view && (
        <DropDownContent>
          {colleges.map(college => (
            <DropDownItem key={college.college_id} onClick={() => handleItemClick(college.college_name)}>
              {college.college_name}
            </DropDownItem>
          ))}
        </DropDownContent>
      )}
    </DropDownContainer>
  );
}
