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
  margin-bottom: 25px;
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
  width: 69px;
  height: 24px;
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
  cursor: pointer;
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

const CautionText = styled.p`
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

export default function EditRequire() {
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
  const [firstcheck, setFirstcheck] = useState(true);
  const [secondcheck, setSecondcheck] = useState(false);
  const [thirdcheck, setThirdcheck] = useState(false);
  const [forthcheck, setForthcheck] = useState(false);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setScore(event.target.value);
  };

  const handleClick = () => {
    navigate("/editsecondrequire");
  };
  const Goback = () => {
    navigate("/mypage");
  };

  function changeforeignbtn(key) {
    let statelist = [false, false, false, false, false];
    statelist[key] = true;
    setForeignbtn(statelist);
    console.log(foreignbtn);
  }
  function switchCompletebtn() {
    setIscomplete(!iscomplete);
  }
  //api 연동
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/notices/mypage/본전공/require-edit/"
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

  // 데이터 로드 후 처리
  useEffect(() => {
    console.log(data);
    if (!data) return;

    // 외국어 인증 처리
    switch (data[5].for_language_name) {
      case "Flex":
        setForeignbtn([true, false, false, false, false]);
        break;
      case "Flex 스피킹":
        setForeignbtn([false, true, false, false, false]);
        break;
      case "TOEIC":
        setForeignbtn([false, false, true, false, false]);
        break;
      case "TOEIC 스피킹":
        setForeignbtn([false, false, false, true, false]);
        break;
      case "OPIC":
        setForeignbtn([false, false, false, false, true]);
        break;
      default:
        console.log("무언가의 오류"); //null 값이 들어올 시
        setForeignbtn([false, false, false, false, false]);
        break;
    }

    // 점수 설정 및 외국어 완료 여부
    setScore(data[6].for_language_score);
    if (data[7].for_language == "완료") {
      setIscomplete(true);
    } else {
      setIscomplete(false);
    }

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
  }, [data]);

  // api 통신 (patch)
  const completeChange = async () => {
    // 외국어
    let for_language = iscomplete ? "완료" : "미완료";
    let for_language_score = Number(foreignscore);

    let for_language_name;
    const foreignbtnString = JSON.stringify(foreignbtn);

    if (
      foreignbtnString === JSON.stringify([true, false, false, false, false])
    ) {
      for_language_name = "Flex";
    } else if (
      foreignbtnString === JSON.stringify([false, true, false, false, false])
    ) {
      for_language_name = "Flex 스피킹";
    } else if (
      foreignbtnString === JSON.stringify([false, false, true, false, false])
    ) {
      for_language_name = "TOEIC";
    } else if (
      foreignbtnString === JSON.stringify([false, false, false, true, false])
    ) {
      for_language_name = "TOEIC 스피킹";
    } else if (
      foreignbtnString === JSON.stringify([false, false, false, false, true])
    ) {
      for_language_name = "OPIC";
    }

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
      "for_language_name : ",
      for_language_name,
      "\nfor_language : ",
      for_language,
      "\n for_language_score : ",
      for_language_score,
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
      for_language: for_language,
      for_language_name: for_language_name,
      for_language_score: for_language_score,
    };
    console.log("patch_data", patch_data);
    try {
      const response = await axiosInstance.patch(
        "/api/notices/mypage/본전공/require-edit/",
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
            <FirstCourseText>본전공</FirstCourseText>
            <FirstCourse>{data[0].major}</FirstCourse>
          </FirstHorizontalBox>
          <CustomSpace height="15px" />
          <SemiTitle>외국어 인증</SemiTitle>
          <TopSecondHorizontalBox>
            <ForeignBtn
              width="74px"
              bordercolor={foreignbtn[0] ? "#5D96E8" : "#D9D9D9"}
              onClick={() => changeforeignbtn(0)}
              fontcolor={foreignbtn[0] ? "#5D96E8" : "#D9D9D9"}
            >
              Flex
            </ForeignBtn>
            <ForeignBtn
              width="114px"
              bordercolor={foreignbtn[1] ? "#5D96E8" : "#D9D9D9"}
              onClick={() => changeforeignbtn(1)}
              fontcolor={foreignbtn[1] ? "#5D96E8" : "#D9D9D9"}
            >
              FLEX 스피킹
            </ForeignBtn>
            <ForeignBtn
              width="91px"
              bordercolor={foreignbtn[2] ? "#5D96E8" : "#D9D9D9"}
              onClick={() => changeforeignbtn(2)}
              fontcolor={foreignbtn[2] ? "#5D96E8" : "#D9D9D9"}
            >
              TOEIC
            </ForeignBtn>
          </TopSecondHorizontalBox>
          <BottomSecondHorizontalBox>
            <ForeignBtn
              width="126px"
              bordercolor={foreignbtn[3] ? "#5D96E8" : "#D9D9D9"}
              onClick={() => changeforeignbtn(3)}
              fontcolor={foreignbtn[3] ? "#5D96E8" : "#D9D9D9"}
            >
              TOEIC 스피킹
            </ForeignBtn>
            <ForeignBtn
              width="84px"
              bordercolor={foreignbtn[4] ? "#5D96E8" : "#D9D9D9"}
              onClick={() => changeforeignbtn(4)}
              fontcolor={foreignbtn[4] ? "#5D96E8" : "#D9D9D9"}
            >
              OPIC
            </ForeignBtn>
          </BottomSecondHorizontalBox>
          <CustomSpace height="25px" />
          <ThirdHorizontalBox>
            <ScoreText>성적입력</ScoreText>
            <ScoreInput
              placeholder={
                data[6].for_language_score
                  ? data[6].for_language_score
                  : "점수입력"
              }
              value={foreignscore ?? ""}
              onChange={handleChange}
            />

            <Completebtn
              onClick={switchCompletebtn}
              fontcolor={iscomplete ? "#5d96e8" : "rgba(255,65,100,0.53)"}
              bordercolor={iscomplete ? "#5d96e8" : "rgba(255,65,100,0.48)"}
            >
              {iscomplete ? "완료" : "미완료"}
            </Completebtn>
          </ThirdHorizontalBox>
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
            <AddCourse onClick={handleClick}>이중전공</AddCourse>
            <Savebtn onClick={completeChange}>수정완료</Savebtn>
          </SortHorizontalBox>
        </>
      )}
      <CautionText>미 입력시 해당 학기는 미이수로 인정됩니다.</CautionText>
    </Container>
  );
}
