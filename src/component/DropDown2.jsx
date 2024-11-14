import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Button, Menu } from 'antd';
import styled from 'styled-components';

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

// Define the dropdown menu using the Menu component
const menu = (
  <Menu
    items={items}
    selectable
    defaultSelectedKeys={['3']}
    onClick={(e) => console.log('Selected:', e.key)} // example handler
  />
);

const DropBox = styled.div`
  display: flex;
  align-items: center;
`;

const DropDown2 = ({ size }) => {
  const [selectedItem, setSelectedItem] = useState('Selectable');

  const handleMenuClick = (e) => {
    const selectedLabel = items.find((item) => item.key === e.key).label;
    setSelectedItem(selectedLabel);
  };

  return (
    <Dropdown.Button
      overlay={menu} // pass menu directly as overlay
      icon={<DownOutlined />}
      size={size} // control size here
      onClick={() => console.log("Dropdown Button Clicked")}
    >
      {selectedItem}
    </Dropdown.Button>
  );
};

export default DropDown2;
