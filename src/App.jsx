import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './page/landing';
import Require from './page/Require';
import Login from './page/Login/Login';
import LoginModal from './page/Login/LoginModal';
import Info from './page/Info/Info';
import InfoTwo from './page/Info/infotwo';
import Main from './page/Main/Mainpage';
import DepthRequire from './page/Depthrequire/Depthrequire';
import MobileMenu from './Moblie';
import GlobalStyle from './globalstyle';
import ShoppingModal from './page/Shopping/ShopModal';
import Shopping from './page/Shopping/Shopping';
import Buy from './page/Shopping/Buy';
import Notice from './page/Notice/Notice';
import NoticeModal from './page/Notice/NoticeModal';
import Mypage from './page/Mypage';
import EditMypage from './page/Editmypage/Editmypage';
import EditCourse from './page/Editcourse/Editcourse';
import EditcourseModal from './page/Editcourse/EditcourseModal';
import EditRequire from './page/Editrequire/Editrequire';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MobileMenu />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginmodal" element={<LoginModal />} />
        <Route path="/info" element={<Info />} />
        <Route path="/infotwo" element={<InfoTwo />} />
        <Route path="/main" element={<Main />} />
        <Route path="/require" element={<Require />} />
        <Route path="/depthrequire" element={<DepthRequire/>} />
        <Route path="/shoppingmodal" element={<ShoppingModal/>} />
        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/noticemodal" element={<NoticeModal/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/editmypage" element={<EditMypage/>} />
        <Route path="/editcourse" element={<EditCourse/>} />
        <Route path="/editcoursemodal" element={<EditcourseModal/>} />
        <Route path="/editrequire" element={<EditRequire/>} />
      </Routes>
    </Router>
  );
}

export default App;
