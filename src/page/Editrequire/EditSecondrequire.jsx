import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import CheckBar from "./components/CheckBar";
import axiosInstance from "../../auth/axiosInstance";
import { FaChevronLeft } from "react-icons/fa";

import Loading from "../../component/Loading";

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 70px;
`;

const CustomSpace = styled.div`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;

const HeaderHorizontalBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 25px;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 13px;
`;

const SemiTitle = styled.h1`
  font-family: Inter;
  font-size: 19px;
  font-weight: 600;
  margin-left: 25px;
  margin-bottom: 15px;
`;

const FirstHorizontalBox = styled.div`
  width: 270px;
  display: flex;
  align-items: end;
  margin-left: 25px;
  gap: 15px;
`;
const FirstCourseText = styled.p`
  font-family: Inter;
  font-size: 11px;
  color: #737373;
  margin-bottom: 5px;
`;

const FirstCourse = styled.div`
  min-width: 75px;
  height: 23px;
  border: 1.8px solid #5d96e8;
  border-radius: 4px;
  background-color: rgba(225, 237, 255, 0.67);
  font-family: Inter;
  font-weight: 600;
  font-size: 11px;
  color: #5d96e8;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;
`;

const TopSecondHorizontalBox = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-around;
  margin-left: 15px;
  margin-bottom: 10px;
`;
const BottomSecondHorizontalBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-bottom: 10px;
`;
const ForeignBtn = styled.button`
  width: ${(props) => props.width || "0px"};
  height: 31px;
  border: 1.8px solid ${(props) => props.bordercolor || "#D9D9D9"};
  border-radius: 16px;
  cursor: pointer;
  background-color: #fff;
  color: ${(props) => props.fontcolor || "#A09F9F"};
  font-weight: 600;
`;

const ThirdHorizontalBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 25px;
`;
const ScoreText = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
`;
const ScoreInput = styled.input`
  width: 110px;
  height: 30px;
  border: 0;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  &::placeholder {
    text-align: center;
    color: #c2c1c1;
  }
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;
const Completebtn = styled.button`
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.fontcolor || "#A09F9F"};
  border: 1.8px solid ${(props) => props.bordercolor || "#D9D9D9"};
  border-radius: 16px;
  background-color: #fff;
  margin-left: ${(props) => props.marginleft || "0px"};
`;
const CheckHorizontalBox = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 25px;
`;
const CheckText = styled.p`
  font-family: Inter;
  font-size: 19px;
  font-weight: 600;
  color: ${(props) => props.fontcolor || "#c1c1c1"};
  margin-left: 20px;
`;
const Unnecessary = styled.button`
  width: 160px;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: #c2c1c1;
  border: 1.8px solid #c2c1c1;
  border-radius: 15px;
  background-color: #fff;
  margin-left: 40px;
  pointer-events: none;
`;

const CheckBtn = styled.button`
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.fontcolor || "#A09F9F"};
  border: 1.8px solid ${(props) => props.bordercolor || "#D9D9D9"};
  border-radius: 16px;
  background-color: #fff;
  margin-left: ${(props) => props.marginleft || "0px"};
`;

const SortHorizontalBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 70px;
  margin-bottom: 40px;
`;

const AddCourse = styled.button`
  width: 130px;
  height: 36px;
  border: 0;
  border-radius: 4px;
  background-color: #d9d9d9;
  align-items: center;
  font-family: Inter;
  text-align: center;
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
const Savebtn = styled.button`
  width: 130px;
  height: 36px;
  border: 0;
  border-radius: 4px;
  background-color: #5d96e8;
  align-items: center;
  font-family: Inter;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

const CautionText = styled.div`
  font-family: Inter;
  color: #a3a3a3;
  font-size: 11px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;
  width: 350px;
`;

export default function EditSecondRequire() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [foreignbtn, setForeignbtn] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [foreignscore, setScore] = useState();
  const [iscomplete, setIscomplete] = useState(false);

  const [necessary, setNecessary] = useState([false, true, true, true]);
  const [firstcheck, setFirstcheck] = useState(false);
  const [secondcheck, setSecondcheck] = useState(false);
  const [thirdcheck, setThirdcheck] = useState(false);
  const [forthcheck, setForthcheck] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/editrequire");
  };
  const Goback = () => {
    navigate("/mypage");
  };

  //api 연동
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/notices/mypage/이중전공/require-edit/"
        );
        setData(response.data.main);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        console.log("오류남!!!");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("이중전공", data);
  // 데이터 로드 후 처리
  useEffect(() => {
    console.log(data);
    if (!data) return;

    // 졸업 논문 ~ 자격증 인증 상태 설정
    const basenecessary = [
      data[1].grad_research !== "불필요",
      data[2].grad_exam !== "불필요",
      data[3].grad_pro !== "불필요",
      data[4].grad_certificate !== "불필요",
    ];
    setNecessary(basenecessary);

    setFirstcheck(
      data[1].grad_research !== "불필요" && data[1].grad_research === "완료"
    );
    setSecondcheck(
      data[2].grad_exam !== "불필요" && data[2].grad_exam === "완료"
    );
    setThirdcheck(data[3].grad_pro !== "불필요" && data[3].grad_pro === "완료");
    setForthcheck(
      data[4].grad_certificate !== "불필요" &&
        data[4].grad_certificate === "완료"
    );
    console.log("적용 완료", firstcheck, secondcheck, thirdcheck, forthcheck);
  }, [data]);

  // api 통신 (patch)
  const completeChange = async () => {
    // 졸업 평가 내용 관련
    let grad_research = necessary[0]
      ? firstcheck
        ? "완료"
        : "미완료"
      : "불필요";

    let grad_exam = necessary[1] ? (secondcheck ? "완료" : "미완료") : "불필요";

    let grad_pro = necessary[2] ? (thirdcheck ? "완료" : "미완료") : "불필요";

    let grad_certificate = necessary[3]
      ? forthcheck
        ? "완료"
        : "미완료"
      : "불필요";

    console.log(
      "졸업 논문, 졸업시험, 졸업프로젝트, 자격증 : ",
      grad_research,
      grad_exam,
      grad_pro,
      grad_certificate
    );

    let patch_data = {
      grad_research: grad_research,
      grad_exam: grad_exam,
      grad_pro: grad_pro,
      grad_certificate: grad_certificate,
    };
    console.log("patch_data", patch_data);
    try {
      const response = await axiosInstance.patch(
        "/api/notices/mypage/이중전공/require-edit/",
        patch_data
      );
      console.log(response);
      alert("정상처리완료");
    } catch (err) {
      console.error("Error fetching data:", err.response);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderHorizontalBox>
            <FaChevronLeft size="22px" onClick={Goback} />
            <Title>졸업요건 수정</Title>
          </HeaderHorizontalBox>
          <FirstHorizontalBox>
            <FirstCourseText>이중전공</FirstCourseText>
            <FirstCourse>{data[0].major}</FirstCourse>
          </FirstHorizontalBox>
          <CustomSpace height="15px" />

          <CustomSpace height="35px" />
          <CheckBar
            text={"졸업논문 인증"}
            marginleft={"50px"}
            necessary={necessary[0]}
            unnecessarymarginleft={"50px"}
            check={firstcheck}
            setCheck={setFirstcheck}
          />
          <CheckBar
            text={"졸업시험 인증"}
            marginleft={"50px"}
            necessary={necessary[1]}
            unnecessarymarginleft={"50px"}
            check={secondcheck}
            setCheck={setSecondcheck}
          />
          <CheckBar
            text={"졸업프로젝트 인증"}
            marginleft={"12px"}
            necessary={necessary[2]}
            unnecessarymarginleft={"12px"}
            check={thirdcheck}
            setCheck={setThirdcheck}
          />
          <CheckBar
            text={"자격증 인증"}
            marginleft={"70px"}
            necessary={necessary[3]}
            unnecessarymarginleft={"68px"}
            check={forthcheck}
            setCheck={setForthcheck}
          />
          <SortHorizontalBox>
            <AddCourse onClick={handleClick}>본전공</AddCourse>
            <Savebtn onClick={completeChange}>수정완료</Savebtn>
          </SortHorizontalBox>
        </>
      )}
      <CautionText>미 입력시 해당 학기는 미이수로 인정됩니다.</CautionText>
    </Container>
  );
}
