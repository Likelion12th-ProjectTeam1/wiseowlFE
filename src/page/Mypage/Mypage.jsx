import { useEffect, useState } from "react";
import styled from "styled-components";
import MyPageLinks from "./components/Mypagelinks";
import mypage_progile from "../../img/mypage_profile.png";
import MypageInfoBar from "./components/MypageInfoBar";
import axiosInstance from "../../auth/axiosInstance";


const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 80px;
  background: linear-gradient(to bottom, white 61%, #f9f9f9 61%);
`;
const CustomSpace = styled.div`
  height: ${(props) => props.height || "0px"};
`;
const Title = styled.h1`
  font-family: Inter;
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 30px;
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
  box-shadow: 0px 1px 3.8px 0.25px rgba(0, 0, 0, 0.25);
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #5d96e8;
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //api 연동
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/notices/mypage/");
        setData(response.data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <CustomSpace height="30px"></CustomSpace>
      <Title>마이페이지</Title>
      {loading ? (
        <Title>데이터 로딩중...</Title>
      ) : (
        <ProfileContainer>
          <Profile>
            <CustomSpace height="40px"></CustomSpace>
            <ProfileImg src={mypage_progile} alt="user profile img" />
            <STDName>{data.profile_name}님</STDName>
            <STDNum>{data.profile_student_number}학번</STDNum>
            <CustomSpace height="30px"></CustomSpace>
            <MypageInfoBar
              lefttext={"내 성적"}
              righttext={data.profile_grade}
              isscore={true}
            ></MypageInfoBar>
            <MypageInfoBar
              lefttext={"본전공"}
              righttext={data.major}
              isscore={false}
            ></MypageInfoBar>
            <MypageInfoBar
              lefttext={"이중/부전공"}
              righttext={data.double_major}
              isscore={false}
            ></MypageInfoBar>
          </Profile>
        </ProfileContainer>
      )}
      <CustomSpace height="50px"></CustomSpace>
      <LinkContainer>
        <MyPageLinks text={"회원정보 수정"} link="/editmypage" />
        <MyPageLinks text={"수강정보 수정"} link="/editcoursepage" />
        <MyPageLinks text={"졸업요건"} link="/editrequire" />
      </LinkContainer>
    </Container>
  );
}
