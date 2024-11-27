import Landing from './page/Landing';
import Require from './page/Require';
import Login from './page/Login/Login';
import LoginModal from './page/Login/LoginModal';
import Info from './page/Info/Info';
import InfoTwo from './page/Info/infotwo';
import DepthRequire from './page/Depthrequire/Depthrequire';
import ShoppingModal from './page/Shopping/ShopModal';
import Shopping from './page/Shopping/Shopping';
import Buy from './page/Shopping/Buy';
import Notice from './page/Notice/Notice';
import NoticeModal from './page/Notice/NoticeModal';
import Mypage from './page/Mypage/Mypage';
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
import Main from './page/Main/Mainpage';
import GoogleLoginRedirection from "./page/Login/GoogleLoginRedirection";
import EditSecondRequire from './page/Editrequire/EditSecondrequire';

const routes = [
  {
    path: '/', // 상대 경로
    element: <Login />,
    name: '로그인페이지',
  }
  ,
  {
    path: 'landing', // 상대 경로
    element: <Landing />,
    name: '랜딩페이지',
  },
  {
    path: 'require', // 상대 경로
    element: <Require />,
    name: '졸업요건 페이지',
  },
  {
    path: 'googleLogin',
    element: <GoogleLoginRedirection />,
    name: '로그인 모달',
  },
  {
    path: 'agree',
    element: <LoginModal />,
    name: '로그인 모달',
  },
  {
    path: 'info',
    element: <Info />,
    name: '정보입력 페이지',
  },
  {
    path: 'infotwo',
    element: <InfoTwo />,
    name: '정보입력 (추가)',
  },
  {
    path: 'depthrequire',
    element: <DepthRequire />,
    name: '상세요건 페이지',
  },
  {
    path: 'shoppingmodal',
    element: <ShoppingModal />,
    name: '쇼핑 모달',
  },
  {
    path: 'shopping',
    element: <Shopping />,
    name: '쇼핑 페이지',
  },
  {
    path: 'buy',
    element: <Buy />,
    name: '구매 페이지',
  },
  {
    path: 'notice',
    element: <Notice />,
    name: '공지 페이지',
  },
  {
    path: 'Main',
    element: <Main />,
    name: '공지 페이지',
  },
  {
    path: 'noticemodal',
    element: <NoticeModal />,
    name: '공지 모달',
  },
  {
    path: 'mypage',
    element: <Mypage />,
    name: '내정보 페이지',
  },
  {
    path: 'editmypage',
    element: <EditMypage />,
    name: '내정보 수정 페이지',
  },
  {
    path: 'editcoursepage',
    element: <EditCourse />,
    name: '졸업요건 수정 페이지',
  },
  {
    path: 'editcoursemodal2',
    element: <EditcourseModal2 />,
    name: '졸업요건 수정 모달',
  },
  {
    path: 'editrequire',
    element: <EditRequire />,
    name: '졸업요건 수정',
  },
  {
    path: 'subjectmodal',
    element: <SubjectModal />,
    name: '이수 과목 입력 모달',
  },
  {
    path: 'subjectmodal2',
    element: <SubjectModal2 />,
    name: '이수 과목 입력 모달 2',
  },
  {
    path: 'request',
    element: <Request />,
    name: '요청 페이지',
  },
  {
    path: 'requestaccept',
    element: <RequestAccept />,
    name: '요청 수락',
  },
  {
    path: 'mainnotice',
    element: <MainNotice />,
    name: '메인 공지',
  },
  {
    path: 'editcoursemodal1',
    element: <EditcourseModal1 />,
    name: '졸업 요건 수정 모달 1',
  },
  {
    path: 'editsecondrequire',
    element: <EditSecondRequire/>,
    name: '이중전공 졸업요건수정',
  }
];

export default routes;
