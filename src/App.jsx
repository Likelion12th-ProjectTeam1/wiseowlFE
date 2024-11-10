import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/landing";
import Require from "./page/Require";
import Login from "./page/Login/Login";
import LoginModal from "./page/Login/LoginModal";
import Info from "./page/Info/Info";
import InfoTwo from "./page/Info/infotwo";
import Main from "./page/Main/Mainpage";
import DepthRequire from "./page/Depthrequire/Depthrequire";
import DepthRequire2 from "./page/Depthrequire/Depthrequire2";
import MobileMenu from "./Moblie";
import GlobalStyle from "./globalstyle";
import ShoppingModal from "./page/Shopping/ShopModal";
import Shopping from "./page/Shopping/Shopping";
import Buy from "./page/Shopping/Buy";
import Notice from "./page/Notice/Notice";
import NoticeModal from "./page/Notice/NoticeModal";
import Mypage from "./page/Mypage/Mypage";
import EditMypage from "./page/Editmypage/Editmypage";
import EditCourse from "./page/Editcourse/Editcourse";
import EditcourseModal from "./page/Editcourse/EditcourseModal";
import EditRequire from "./page/Editrequire/Editrequire";
import SubjectModal from "./page/Info/subjectmodal1";
import SubjectModal2 from "./page/Info/subjectmodal2";
import Navigatebar from "./component/Navigatebar";
import Request from './page/request.jsx/request';
import RequestAccept from './page/request.jsx/requestaccept';
import MainNotice from './page/Mypage/mainnotice';
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#000",
  },
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MobileMenu />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginmodal" element={<LoginModal />} />
          <Route path="/request" element={<Request />} />
          <Route path="/requestaccept" element={<RequestAccept />} />
          <Route path="/info" element={<Info />} />
          <Route path="/infotwo" element={<InfoTwo />} />
          <Route path="/subjectmodal" element={<SubjectModal/>} />
          <Route path="/subjectmodal2" element={<SubjectModal2/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/mainnotice" element={<MainNotice />} />
          <Route path="/require" element={<Require />} />
          <Route path="/depthrequire" element={<DepthRequire />} />
          <Route path="/depthrequire2" element={<DepthRequire2 />} />
          <Route path="/shoppingmodal" element={<ShoppingModal />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/noticemodal" element={<NoticeModal />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/editmypage" element={<EditMypage />} />
          <Route path="/editcourse" element={<EditCourse />} />
          <Route path="/editcoursemodal" element={<EditcourseModal />} />
          <Route path="/editrequire" element={<EditRequire />} />
        </Routes>
        <Navigatebar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
