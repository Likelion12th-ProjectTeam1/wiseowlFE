import { useState } from "react";
import styled from "styled-components";
import MyPageLinks from "./components/mypagelinks";
import mypage_progile from "../../img/mypage_profile.png";
import MypageInfoBar from "./components/MypageInfoBar";
const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 20px;
`;
const CustomSpace = styled.div`
  height: ${(props) => props.height || "0px"};
`;
const Title = styled.h1`
  font-family: Inter;
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 20px;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Profile = styled.div`
  width: 270px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #5d96e8; /* Placeholder for avatar */
  margin-bottom: 10px;
`;

const STDName = styled.p`
  font-family: Inter;
  font-weight: 600;
  color: #000000;
  font-size: 20px;
`;
const STDNum = styled.div`
  //정가운데로 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 18px;
  border-radius: 7px;
  background-color: #00191f;
  font-family: Inter;
  font-size: 10px;
  color: #fff;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Mypage() {
  const [userName, setUserName] = useState("김민석");
  const [userScore, setUserScore] = useState("4.3");
  const [userFirstCourse, setuserFirstCourse] = useState("통계학과");
  const [userSecondCourse, setUserSecondCourse] = useState("AI 융합전공");

  return (
    <Container>
      <CustomSpace height="30px"></CustomSpace>
      <Title>마이페이지</Title>
      <ProfileContainer>
        <Profile>
          <CustomSpace height="40px"></CustomSpace>
          <ProfileImg src={mypage_progile} alt="user profile img" />
          <STDName>{userName}님</STDName>
          <STDNum>21학번</STDNum>
          <CustomSpace height="30px"></CustomSpace>
          <MypageInfoBar
            lefttext={"내 성적"}
            righttext={userScore}
          ></MypageInfoBar>
          <MypageInfoBar
            lefttext={"본전공"}
            righttext={userFirstCourse}
          ></MypageInfoBar>
          <MypageInfoBar
            lefttext={"이중/부전공"}
            righttext={userSecondCourse}
          ></MypageInfoBar>
        </Profile>
      </ProfileContainer>
      <CustomSpace height="50px"></CustomSpace>
      <LinkContainer>
        <MyPageLinks text={"회원정보 수정"} link="/editmypage" />
        <MyPageLinks text={"수강정보 수정"} link="/editcourse" />
        <MyPageLinks text={"졸업요건"} link="/editrequire" />
      </LinkContainer>
    </Container>
  );
}
