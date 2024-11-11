import { useState, useEffect } from "react";
import styled from "styled-components";

import { Button } from "antd";

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

const Title = styled.h1`
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  margin-left: 15px;
  margin-bottom: 15px;
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
  width: 75px;
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
  margin-bottom: 70px;
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
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;

const CautionText = styled.p`
  font-family: Inter;
  color: #a3a3a3;
  font-size: 11px;
  font-weight: 500;
  margin-left: 25px;
  margin-bottom: 10px;
`;

const TheLine = styled.hr`
  height: 0.1px;
  margin: 40px;
  border: 1px solid #a3a3a3;
`;

const RightBox = styled.div`
  width: 50%;
  height: 23px;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 23px;
`;
export default function EditRequire() {
  const [foreignbtn, setForeignbtn] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [iscomplete, setIscomplete] = useState(false);
  const [necessary, setNecessary] = useState(true);
  const [firstcheck, setFirstcheck] = useState(true);
  const [secondcheck, setSecondcheck] = useState(false);
  const [thirdcheck, setThirdcheck] = useState(false);
  const [forthcheck, setForthcheck] = useState(false);

  //이중전공 또는 부전공 선택시
  const [addcourse, setAddcourse] = useState(false);

  function changeforeignbtn(key) {
    let statelist = [false, false, false, false, false];
    statelist[key] = true;
    setForeignbtn(statelist);
  }
  function switchCompletebtn() {
    setIscomplete(!iscomplete);
  }
  function switchFirstCheck(state) {
    setFirstcheck(state);
  }
  function switchSecondCheck(state) {
    setSecondcheck(state);
  }
  function switchThirdCheck(state) {
    setThirdcheck(state);
  }
  function switchForthCheck(state) {
    setForthcheck(state);
  }

  function changeaddcourse() {
    setAddcourse(!addcourse);
  }

  return (
    <Container>
      <Title>졸업요건 수정</Title>
      <FirstHorizontalBox>
        <FirstCourseText>본전공</FirstCourseText>
        <FirstCourse>통계학과</FirstCourse>
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
        <ScoreInput placeholder="점수입력"></ScoreInput>
        <Completebtn
          onClick={switchCompletebtn}
          fontcolor={iscomplete ? "#5d96e8" : "rgba(255,65,100,0.53)"}
          bordercolor={iscomplete ? "#5d96e8" : "rgba(255,65,100,0.48)"}
        >
          {iscomplete ? "완료" : "미완료"}
        </Completebtn>
      </ThirdHorizontalBox>
      <CustomSpace height="35px" />
      <CheckHorizontalBox>
        <CheckText fontcolor={necessary ? "#000" : "#c1c1c1"}>
          졸업논문 인증
        </CheckText>
        {necessary ? (
          <>
            <CheckBtn
              fontcolor={firstcheck ? "#5d96e8" : "#C2C1C1"}
              bordercolor={firstcheck ? "#5d96e8" : "#D9D9D9"}
              marginleft="50px"
              onClick={() => switchFirstCheck(true)}
            >
              완료
            </CheckBtn>
            <CheckBtn
              fontcolor={firstcheck ? "#C2C1C1" : "rgba(255,65,100,0.53)"}
              bordercolor={firstcheck ? "#D9D9D9" : "rgba(255,65,100,0.48)"}
              marginleft="10px"
              onClick={() => switchFirstCheck(false)}
            >
              미완료
            </CheckBtn>
          </>
        ) : (
          <Unnecessary>불필요</Unnecessary>
        )}
      </CheckHorizontalBox>
      <CheckHorizontalBox>
        <CheckText fontcolor="#000">졸업시험 인증</CheckText>
        <CheckBtn
          fontcolor={secondcheck ? "#5d96e8" : "#C2C1C1"}
          bordercolor={secondcheck ? "#5d96e8" : "#D9D9D9"}
          marginleft="50px"
          onClick={() => switchSecondCheck(true)}
        >
          완료
        </CheckBtn>
        <CheckBtn
          fontcolor={secondcheck ? "#C2C1C1" : "rgba(255,65,100,0.53)"}
          bordercolor={secondcheck ? "#D9D9D9" : "rgba(255,65,100,0.48)"}
          marginleft="10px"
          onClick={() => switchSecondCheck(false)}
        >
          미완료
        </CheckBtn>
      </CheckHorizontalBox>
      <CheckHorizontalBox>
        <CheckText fontcolor="#000">졸업프로젝트 인증</CheckText>
        <CheckBtn
          fontcolor={thirdcheck ? "#5d96e8" : "#C2C1C1"}
          bordercolor={thirdcheck ? "#5d96e8" : "#D9D9D9"}
          marginleft="12px"
          onClick={() => switchThirdCheck(true)}
        >
          완료
        </CheckBtn>
        <CheckBtn
          fontcolor={thirdcheck ? "#C2C1C1" : "rgba(255,65,100,0.53)"}
          bordercolor={thirdcheck ? "#D9D9D9" : "rgba(255,65,100,0.48)"}
          marginleft="10px"
          onClick={() => switchThirdCheck(false)}
        >
          미완료
        </CheckBtn>
      </CheckHorizontalBox>
      <CheckHorizontalBox>
        <CheckText fontcolor="#000">자격증 인증</CheckText>
        <CheckBtn
          fontcolor={forthcheck ? "#5d96e8" : "#C2C1C1"}
          bordercolor={forthcheck ? "#5d96e8" : "#D9D9D9"}
          marginleft="70px"
          onClick={() => switchForthCheck(true)}
        >
          완료
        </CheckBtn>
        <CheckBtn
          fontcolor={forthcheck ? "#C2C1C1" : "rgba(255,65,100,0.53)"}
          bordercolor={forthcheck ? "#D9D9D9" : "rgba(255,65,100,0.48)"}
          marginleft="10px"
          onClick={() => switchForthCheck(false)}
        >
          미완료
        </CheckBtn>
      </CheckHorizontalBox>
      {addcourse ? (
        <>
          <br />
          <TheLine />
          <FirstHorizontalBox>
            <FirstCourseText>본전공</FirstCourseText>
            <FirstCourse>통계학과</FirstCourse>
          </FirstHorizontalBox>
        </>
      ) : (
        ""
      )}
      <SortHorizontalBox>
        <AddCourse onClick={changeaddcourse}>이중전공</AddCourse>
        <Savebtn>수정완료</Savebtn>
      </SortHorizontalBox>
      <CautionText>미 임력시 해당 학기는 미이수로 인정됩니다.</CautionText>
    </Container>
  );
}
/**API 연동시해야할 것 : CheckHorizontalBox 내에 있는것들을 하나의 컴포넌트로 만들기
 *
 * 컴포넌트 prop 내용 : check text 내용, margin-left 내용
 * 그외 : state는 1개씩 하면 될거고..
 * 가능하다면, 외국어인증 ~ 자격증 인증까지를 하나의 컴포넌트로 만들고,
 * 졸업논문, 졸업시험, ..., 자격증 인증을 하나의 컴포넌트로 만들어서 재활용하기
 */
