import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import styled from 'styled-components';

const DropBox = styled.div`
  width: auto; /* 내용에 따라 유동적으로 크기 조정 */
  height: 30px;
  border-radius: 4px;
  border: 1.811px solid #D9D9D9;
  display: flex;
  align-items: center;
  padding: 0 8px; /* 텍스트와 아이콘 간의 패딩 */
  max-width: 120px; 
`;

const items = [
  {
    key: '1',
    label: 'Item 1dddddddddd',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];

const DropDown2 = () => {
  const [selectedItem, setSelectedItem] = useState('Selectable'); // 초기 값 설정

  const handleMenuClick = (e) => {
    const selectedLabel = items.find(item => item.key === e.key).label;
    setSelectedItem(selectedLabel); // 선택한 항목 업데이트
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick: handleMenuClick, // 선택 항목 클릭 핸들러
        defaultSelectedKeys: ['3'],
      }}
      dropdownRender={(menus) => (
        <div style={{ padding: '10px' }}>
          {menus}
        </div>
      )}
    >
      <DropBox>
        <Space>
          {selectedItem}
          <DownOutlined />
        </Space>
      </DropBox>
    </Dropdown>
  );
};

export default DropDown2;
