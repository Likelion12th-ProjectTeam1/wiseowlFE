import Landing from './page/landing';
import Require from './page/Require';
import Login from './page/Login/Login';
import LoginModal from './page/Login/LoginModal';
import Info from './page/Info';
import InfoTwo from './page/Info/infotwo';
import Main from './page/Main/Mainpage';
import DepthRequire from './page/Depthrequire/Depthrequire';
import ShoppingModal from './page/Shopping/ShopModal';
import Shopping from './page/Shopping/Shopping';
import Buy from './page/Shopping/Buy';
import Notice from './page/Notice/Notice';
import NoticeModal from './page/Notice/NoticeModal';
import Mypage from './page/Mypage';
import EditMypage from './page/Editmypage/Editmypage';
import EditCourse from './page/Editcourse/Editcourse';
import EditcourseModal2 from './page/Editcourse/EditcourseModal2';
import EditRequire from './page/Editrequire/Editrequire';
import SubjectModal from './page/Info/subjectmodal1';
import SubjectModal2 from './page/Info/subjectmodal2';
import Request from './page/request.jsx/request';
import RequestAccept from './page/request.jsx/requestaccept';
import MainNotice from './page/Mypage/mainnotice';
import EditcourseModal1 from './page/Editcourse/EditcourseModal1';
const routes = [
  {
    path: '/landing',
    exact: true,
    element: <Landing />,
    name: '랜딩페이지'
  },
  {
    path: '/require',
    exact: true,
    element: <Require />,
    name: '졸업요건 페이지'
  },
  {
    path: '/login',
    exact: true,
    element: <Login />,
    name: '로그인 페이지'
  },
  {
    path: '/loginmodal',
    exact: true,
    element: <LoginModal />,
    name: '로그인 모달'
  },
  {
    path: '/info',
    exact: true,
    element: <Info />,
    name: '정보입력페이지'
  },
  {
    path: '/Main',
    exact: true,
    element: <Main />,
    name: '메인페이지'
  },
  {
    path: '/depthrequire',
    exact: true,
    element: <DepthRequire />,
    name: '상세요건페이지'
  },
  {
    path: '/shoppingmodal',
    exact: true,
    element: <ShoppingModal />,
    name: '쇼핑모달'
  },
  {
    path: '/shopping',
    exact: true,
    element: <Shopping />,
    name: '쇼핑페이지'
  },
  {
    path: '/buy',
    exact: true,
    element: <Buy />,
    name: '구매페이지'
  },
  {
    path: '/notice',
    exact: true,
    element: <Notice />,
    name: '공지페이지'
  },
  {
    path: '/noticemodal',
    exact: true,
    element: <NoticeModal />,
    name: '공지모달'
  },
  {
    path: '/mypage',
    exact: true,
    element: <Mypage />,
    name: '내정보 페이지'
  },
  {
    path: '/editmypage',
    exact: true,
    element: <EditMypage />,
    name: '내정보 수정페이지'
  },
  {
    path: '/editcoursepage',
    exact: true,
    element: <EditCourse />,
    name: '졸업요건수정페이지'
  },
  {
    path: '/editcoursemodal2',
    exact: true,
    element: <EditcourseModal2 />,
    name: '졸업요건수정모달'
  },
  {
    path: '/editrequire',
    exact: true,
    element: <EditRequire />,
    name: '졸업요건수정모달'
  },
  {
    path: '/infotwo',
    exact: true,
    element: <InfoTwo />,
    name: '이수과목입력'
  },
  {
    path: '/subjectmodal',
    exact: true,
    element: <SubjectModal />,
    name: '이수과목입력'
  },
  {
    path: '/subjectmodal2',
    exact: true,
    element: <SubjectModal2 />,
    name: '이수과목입력'
  },
  {
    path: '/request',
    exact: true,
    element: <Request />,
    name: '이수과목입력'
  },
  {
    path: '/requestaccept',
    exact: true,
    element: <RequestAccept/>,
    name: '이수과목입력'
  },
  {
    path: '/mainnotice',
    exact: true,
    element: <MainNotice />,
    name: '이수과목입력'
  },
  {
    path: '/editcoursemodal1',
    exact: true,
    element: <EditcourseModal1 />,
    name: '이수과목입력모딸'
  }];

export default routes;
