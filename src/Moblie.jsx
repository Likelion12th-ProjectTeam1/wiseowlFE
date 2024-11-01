
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MobileButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  height: 45px;
  color: white;
  background-color: #007bff;
  margin: 8px 0;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    background-color:#F9F9F9;
    font-size: 14px;
    height: 40px;
  }
`;

function MobileMenu() {
  return (
    <div className="page-container">
      <MobileButton to="/landing">Landingpage</MobileButton>
      <MobileButton to="/require">Requirepage</MobileButton>
      <MobileButton to="/login">Loginpage</MobileButton>
      <MobileButton to="/loginmodal">Loginmodal</MobileButton>
      <MobileButton to="/info">Infopage</MobileButton>
      <MobileButton to="/main">Mainpage</MobileButton>
      <MobileButton to="/depthrequire">Depthrequirepage</MobileButton>
      <MobileButton to="/shoppingmodal">ShoppingModal</MobileButton>
      <MobileButton to="/shopping">Shoppingpage</MobileButton>
      <MobileButton to="/buy">buypage</MobileButton>
      <MobileButton to="/notice">noticepage</MobileButton>
      <MobileButton to="/noticemodal">noticemodal</MobileButton>
      <MobileButton to="/mypage">mypage</MobileButton>
      <MobileButton to="/editmypage">editmypage</MobileButton>
      <MobileButton to="/editcourse">editcourse</MobileButton>
      <MobileButton to="/editcoursemodal">editcoursemodal</MobileButton>
      <MobileButton to="/editrequire">editrequire</MobileButton>
    </div>
  );
}

export default MobileMenu;
