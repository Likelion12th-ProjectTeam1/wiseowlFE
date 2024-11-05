import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LuMinusCircle } from "react-icons/lu";
import { Checkbox, Switch, Input, Select, Button } from "antd";

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 20px;
`;

const CustomSpace = styled.div`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;

const Title = styled.h1`
  font-family: Inter;
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 20px;
`;

const HorizontalBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopText = styled.p`
  font-family: Inter;
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const TopLeftBox = styled.div`
  width: 110px;
  height: 75px;
  margin-left: 18px;
`;

const TopRightBox = styled.div`
  width: 170px;
  height: 75px;
`;

const FirstCourse = styled.div`
  width: 110px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SecondCourse = styled.div`
  width: 170px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SwitchBox = styled.div`
  margin: 0;
  padding-top: 5px;
  display: flex;
  justify-content: right;
`;

const SwitchTitle = styled.p`
  font-family: Inter;
  color: #737373;
  font-size: 12px;
  margin-top: 3px;
  margin-right: 15px;
`;

const CustomSelect = styled(Select)`
  width: 130px !important;
  height: 30px !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
  border: none !important;
  border-radius: 0 !important;
  margin-left: 18px;
  .ant-select-selector {
    height: 30px !important;
    border: none !important;
    border-radius: 0 !important;
    color: #000 !important;
    display: flex;
    align-items: center;
  }
`;

const CourseTable = styled.div`
  margin-left: 20px;
  width: 320px;
  min-height: 250px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TableHeader = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  padding: 8px 0;
  font-weight: bold;
  background-color: #f5f6fb;
`;

const TableHeaderCell = styled.span`
  flex: ${(props) => props.flex || "1"};
  text-align: left;
  padding-left: 10px;
`;

const CourseRow = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const TableSpace = styled.div`
  height: ${(props) => props.height}px;
`;

const CourseName = styled.p`
  flex: 2;
  font-size: 14px;
  text-align: left;
`;

const AddButton = styled(Button)`
  width: 40%;
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #5d96e8;
`;

export default function EditCourse() {
  const navigate = useNavigate();

  const [onlyMajor, setOnlyMajor] = useState(false);
  const [courses, setCourses] = useState([
    { restudy: false, coursename: "정보보안" },
    { restudy: false, coursename: "미네르바 교양 글쓰기1" },
  ]);
  const [spaceHeight, setSpaceHeight] = useState(100);

  const handleSwitchChange = (checked) => {
    setOnlyMajor(checked);
    console.log(`switch to ${checked}`);
  };

  const handleCheckboxChange = (index) => {
    setCourses((prevCourses) =>
      prevCourses.map((course, i) =>
        i === index ? { ...course, restudy: !course.restudy } : course
      )
    );
  };

  const handleDelete = (index) => {
    setCourses((prevCourses) => prevCourses.filter((_, i) => i !== index));
  };

  const handleAddCourse = () => {
    navigate("/editcoursemodal");
  };

  useEffect(() => {
    if (courses.length >= 5) {
      setSpaceHeight(0);
    } else {
      setSpaceHeight(120 - 20 * courses.length);
    }
  }, [courses]);

  return (
    <Container>
      <Title>수강정보 수정</Title>

      <CustomSpace height="10px" />
      <HorizontalBox>
        <TopLeftBox>
          <TopText>본전공</TopText>
          <FirstCourse></FirstCourse>
        </TopLeftBox>
        <TopRightBox>
          <TopText>이중전공</TopText>
          <SecondCourse></SecondCourse>
        </TopRightBox>
      </HorizontalBox>
      <CustomSpace height="5px" />
      <HorizontalBox>
        <CustomSelect defaultValue="1학년 1학기" placeholder="">
          <Select.Option value="1학년 1학기">1학년 1학기</Select.Option>
          <Select.Option value="1학년 2학기">1학년 2학기</Select.Option>
          <Select.Option value="2학년 1학기">2학년 1학기</Select.Option>
          <Select.Option value="2학년 2학기">2학년 2학기</Select.Option>
          <Select.Option value="3학년 1학기">3학년 1학기</Select.Option>
          <Select.Option value="3학년 2학기">3학년 2학기</Select.Option>
          <Select.Option value="4학년 1학기">4학년 1학기</Select.Option>
          <Select.Option value="4학년 2학기">4학년 2학기</Select.Option>
        </CustomSelect>
        <SwitchBox>
          <SwitchTitle>전공만 보기</SwitchTitle>
          <Switch
            onChange={handleSwitchChange}
            style={{ marginRight: "17px" }}
          />
        </SwitchBox>
      </HorizontalBox>
      <CustomSpace height="30px" />
      <CourseTable>
        <TableHeader>
          <TableHeaderCell flex="1">재수강</TableHeaderCell>
          <TableHeaderCell flex="2">과목명</TableHeaderCell>
        </TableHeader>

        {courses.map((course, index) => (
          <CourseRow key={index}>
            <CustomSpace width="25px" />
            <Checkbox
              checked={course.restudy}
              onChange={() => handleCheckboxChange(index)}
              style={{ flex: "1" }}
            />
            <CourseName>{course.coursename}</CourseName>
            <LuMinusCircle
              onClick={() => handleDelete(index)}
              style={{
                width: "40px",
                cursor: "pointer",
                color: "#B1B0B0",
                marginLeft: "20px",
                paddingRight: "20px",
              }}
            />
          </CourseRow>
        ))}
        <TableSpace height={spaceHeight} />
        <AddButton type="primary" onClick={handleAddCourse}>
          과목추가
        </AddButton>
      </CourseTable>
    </Container>
  );
}
