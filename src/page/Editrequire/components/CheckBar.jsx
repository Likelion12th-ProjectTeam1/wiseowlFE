import { useState } from "react";
import styled from "styled-components";

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
  width: 150px;
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
  margin-left: ${(props) => props.unnecessarymarginleft || "0px"};
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

function CheckBar({
  text,
  marginleft,
  necessary,
  unnecessarymarginleft,
  check,
  setCheck,
}) {
  //   const [necessary, setNecessary] = useState(true);
  return (
    <CheckHorizontalBox>
      <CheckText fontcolor={necessary ? "#000" : "#c1c1c1"}>{text}</CheckText>
      {necessary ? (
        <>
          <CheckBtn
            fontcolor={check ? "#5d96e8" : "#C2C1C1"}
            bordercolor={check ? "#5d96e8" : "#D9D9D9"}
            marginleft={marginleft}
            onClick={() => setCheck(true)}
          >
            완료
          </CheckBtn>
          <CheckBtn
            fontcolor={check ? "#C2C1C1" : "rgba(255,65,100,0.53)"}
            bordercolor={check ? "#D9D9D9" : "rgba(255,65,100,0.48)"}
            marginleft="10px"
            onClick={() => setCheck(false)}
          >
            미완료
          </CheckBtn>
        </>
      ) : (
        <Unnecessary unnecessarymarginleft={unnecessarymarginleft}>
          불필요
        </Unnecessary>
      )}
    </CheckHorizontalBox>
  );
}

export default CheckBar;
