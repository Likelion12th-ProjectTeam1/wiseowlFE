import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { LuMinusCircle } from "react-icons/lu";
import { Switch, Select, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../auth/axiosInstance";

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
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 20px;
`;

const HorizontalBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
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

const FirstCourse = styled.div`
  width: 110px;
  height: 30px;
  font-size: 15px;
  color: #737373;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SecondCourse = styled.div`
  width: 170px;
  height: 30px;
  font-size: 15px;
  color: #737373;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const FormArea = styled.div`
  width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column; // 폼들을 세로로 나열
  gap: 20px;
  align-items: center;
  padding: 10px;
  transition: max-height 0.3s ease;
`;

const DropdownContainer = styled.div`
  width: 80%;
  height: 10%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const Form = styled.div`
  width: 100%;
  background: #fbfbfb;
  box-shadow: 0px 1px 2.1px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0; // 폼 크기 조절되지 않도록 설정
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #f5f6fb;
  color: #737373;
  align-items: center;
`;

const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormFooter = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  background: #f5f6fb;
  color: #737373;
  align-items: center;
`;

const ClassText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-right: 25px;
  margin: 7px;
`;

const GradeText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-left: 50px;
`;

const FormText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 20px;
`;

const FooterText = styled.h4`
  color: #5d96e8;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 20px;
`;

const AvgText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
`;

const TotalText = styled.h4`
  color: #aca8a8;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 40px;
`;

const AddClassButton = styled.div`
  width: 50%;
  min-height: 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
`;

const AddFormButton = styled.div`
  width: 60%;
  min-height: 40px;
  border-radius: 4px;
  background: #5d96e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const EnterButton = styled.div`
  width: 80%;
  min-height: 40px;
  border-radius: 33px;
  border: 1px solid #5d96e8;
  background: #fff;
  color: #5d96e8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;

const SemesterContainer = styled.div`
  width: 120px;
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2.811px solid #e8e8e8;
  background: #fff;
  margin-left: 15px;
`;

const SemesterText = styled.h4`
  color: #737373;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CustomSelect = styled(Select)`
  // antd의 Select로 사용
  width: 120px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  .ant-select-selector {
    height: 30px !important;
    border-radius: 4px !important;
    border: 2.811px solid #e8e8e8 !important;
    background: #fff !important;
    color: #000 !important;
    display: flex;
    align-items: center;
  }
`;

const GradeSelect = styled(Select)`
  // antd의 Select로 사용
  width: 70px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  margin-left: 18px;
  .ant-select-selector {
    height: 30px !important;
    border-radius: 4px !important;
    border: 2.811px solid #e8e8e8 !important;
    background: #fff !important;
    color: #000 !important;
    display: fleximport App from "./../../App";
    align-items: center;
  }
`;

const CautionText = styled.h5`
  color: #a3a3a3;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  margin-top: 70px;
  margin-right: 90px;
`;

export default function EditCourse() {
  const [forms, setForms] = useState(() => {
    // 로컬 스토리지에서 데이터 초기화
    const savedForms = localStorage.getItem("forms");
    return savedForms
      ? JSON.parse(savedForms)
      : [{ key: 1, year: "1학년 1학기" }];
  });
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState([]); // API 응답 데이터 저장
  const [subjectkey, setSubjectkey] = useState(1);
  const location = useLocation(); // useLocation 훅 사용하여 경로 추적

  const [usermajor, setUsermajor] = useState();
  const [usergubun, setUsergubun] = useState();
  const [usersecondmajor, setUsersecondmajor] = useState();

  const [majorcourses, setMajorcourses] = useState([]);
  const [onlymajor, setOnlyMajor] = useState(false);
  console.log(majorcourses);
  const fetchData = async () => {
    // setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/api/notices/mypage/course-edit/"
      );
      console.log("Fetched courses:", response.data.course);
      console.log(response.data);
      setResponseData(response.data.course || []); // API 응답 저장
      setCourses(response.data.course || []); // courses 업데이트
      setUsermajor(response.data.major);
      setUsergubun(response.data.profile_gubun);
      setUsersecondmajor(response.data.second_major);
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
      console.error("Error fetching data:", err);
    } finally {
      // setLoading(false);
    }
  };

  // 전공만 보기 데이터
  const fetchMajorData = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/notices/mypage/course-edit/only-major/"
      );
      // 응답 처리
      // console.log("Response Data:", response.data);
      setMajorcourses(response.data.course || []); // 전공 데이터 업데이트
    } catch (error) {
      // 에러 처리
      console.error("Error fetching data:", error.response || error);
      setError("전공 데이터를 불러오는 중 오류가 발생했습니다.");
    }
  };

  // 페이지 마운트 시 데이터를 fetch
  useEffect(() => {
    setLoading(true);
    fetchData();
    fetchMajorData();
    setOnlyMajor(false);
    setLoading(false);
  }, [location.pathname]);

  useEffect(() => {
    setLoading(true);
    console.log("전공만 보기 상태", onlymajor);
    setLoading(false);
  }, [onlymajor]);

  // 로컬 스토리지에 forms 상태 저장
  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  }, [forms]);

  const getSubjectKey = (year) => {
    const yearSemesterMap = {
      "1학년 1학기": 1,
      "1학년 2학기": 2,
      "2학년 1학기": 3,
      "2학년 2학기": 4,
      "3학년 1학기": 5,
      "3학년 2학기": 6,
      "4학년 1학기": 7,
      "4학년 2학기": 8,
    };
    setSubjectkey(yearSemesterMap[year] || 0); // Default to 0 if no match
  };

  const addForm = () => {
    const newKey = forms.length + 1;
    const newYear = `${Math.ceil(newKey / 2)}학년 ${
      newKey % 2 === 1 ? "1" : "2"
    }학기`;
    const subjectKey = getSubjectKey(newYear);
    setForms([...forms, { key: newKey, year: newYear, subjectkey }]);
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  //전공만 보기 상태 변경
  const handleSwitchChange = (checked) => {
    setOnlyMajor(checked);
  };

  return (
    <Container>
      <Title>수강정보 수정</Title>
      <CustomSpace height="10px" />
      <HorizontalBox>
        <TopLeftBox>
          <TopText>본전공</TopText>
          <FirstCourse>{usermajor}</FirstCourse>
        </TopLeftBox>
        <TopRightBox>
          <TopText>{usergubun}</TopText>
          {usergubun !== "전공심화" && (
            <SecondCourse>{usersecondmajor}</SecondCourse>
          )}
        </TopRightBox>
      </HorizontalBox>
      <SwitchBox>
        <SwitchTitle>전공만 보기</SwitchTitle>
        <Switch onChange={handleSwitchChange} style={{ marginRight: "17px" }} />
      </SwitchBox>
      <CustomSpace height="5px" />
      <FormArea>
        {onlymajor
          ? majorcourses.map((majorCourse, index) => (
              <FormComponent
                key={index}
                semester={majorCourse.completed_year}
                subjectKey={majorCourse.school_year}
                data={majorCourse} //전공만 보기
                onlymajor={onlymajor}
              />
            ))
          : forms.map((form, index) => (
              <FormComponent
                key={form.key}
                semester={form.year}
                subjectKey={subjectkey}
                data={courses[index]}
                onlymajor={onlymajor}
              />
            ))}
        <AddFormButton onClick={addForm}>학기 추가하기</AddFormButton>
        <EnterButton>수정완료</EnterButton>
      </FormArea>
    </Container>
  );
}

const FormComponent = ({ semester, subjectKey, data, onlymajor }) => {
  const [selectedSemester, setSelectedSemester] = useState(
    data?.complete_year || null
  );
  const [courses, setCourses] = useState(data ? data.course_subject : []);
  const [averageGrade, setAverageGrade] = useState(0); // 평균 학점 상태 추가
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const forms = [
    { key: 1, year: "1학년 1학기" },
    { key: 2, year: "1학년 2학기", subjectkey: 1 },
    { key: 3, year: "2학년 1학기", subjectkey: 2 },
    { key: 4, year: "2학년 2학기", subjectkey: 1 },
    { key: 5, year: "3학년 1학기", subjectkey: 4 },
    { key: 6, year: "3학년 2학기", subjectkey: 5 },
    { key: 7, year: "4학년 1학기", subjectkey: 6 },
  ];

  // majorcourses의 school_year를 forms의 year로 매핑
  const getSemesterText = (schoolYear) => {
    const matchedForm = forms.find((form) => form.key === schoolYear);
    return matchedForm ? matchedForm.year : "학기 정보 없음";
  };

  // data가 업데이트될 때 상태 초기화
  useEffect(() => {
    if (data) {
      if (onlymajor) {
        setSelectedSemester(data.completed_year || null);
      } else {
        setSelectedSemester(data.complete_year || null);
      }

      setCourses(data.course_subject || []);
    }
  }, [data, onlymajor]);

  // 학점 변환 함수
  const gradeToPoint = (grade) => {
    const gradeMap = {
      "A+": 4.5,
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
      F: 0.0,
    };
    return gradeMap[grade] || 0.0;
  };

  // 평균 계산 함수
  const calculateAverageGrade = (courses) => {
    if (courses.length === 0) return 0;
    const totalPoints = courses.reduce((sum, course) => {
      const points = gradeToPoint(course.grade) * (course.credit || 0);
      return sum + points;
    }, 0);
    const totalCredits = courses.reduce(
      (sum, course) => sum + (course.credit || 0),
      0
    );
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(1) : 0;
  };

  // courses 변경 시 평균 업데이트
  useEffect(() => {
    setAverageGrade(calculateAverageGrade(courses));
  }, [courses]);

  const handleUpdate = (updateFn) => {
    setIsUpdating(true);
    updateFn();
    setTimeout(() => setIsUpdating(false), 500); // 100ms 후 로딩 상태 해제
  };

  
  const addClass = () => {
    const newCourse = {
      subject_name: "",
      grade: "",
      credits: "",
      retry_yn: false,
    };
    handleUpdate(() => setCourses([...courses, newCourse]));
    navigate("/editcoursemodal1", {
      state: { selectedSemester, semester, subjectKey },
    });
  };
  const DeleteData = async (course) => {
    try {
      const requestBody = {
        complete_year: selectedSemester,
        school_year: subjectKey,
        subject_name: course.subject_name,
        subject_code: course.subject_code,
      };
      console.log(requestBody);
      

      await axiosInstance.delete("/api/notices/mypage/course-edit/", { data: requestBody });
      handleUpdate(() => {
        setCourses((prevCourses) =>
          prevCourses.filter((c) => c.subject_name !== course.subject_name)
        );
      });
    } catch (err) {
      setError("데이터를 삭제하는 중 오류가 발생했습니다.");
      console.error("Error deleting data:", err);
    }
  };

  const handleDelete = (index) => {
    const courseToDelete = courses[index];
    DeleteData(courseToDelete);
  };

  const handleCheckboxChange = (index) => {
    const updatedCourses = courses.map((course, i) =>
      i === index ? { ...course, retry_yn: !course.retry_yn } : course
    );
  
    handleUpdate(() => setCourses(updatedCourses));
  
    // FixData 호출을 상태가 업데이트된 이후로 지연
    setTimeout(() => {
      const courseToUpdate = updatedCourses[index];
      console.log("Updated Course:", courseToUpdate);
      FixData(courseToUpdate);
    }, 0); // 상태가 업데이트된 후 다음 이벤트 루프로 이동
  };

  const FixData = async (course) => {
  try {
    setLoading(true);
    const requestBody = {
      "complete_year": selectedSemester, 
      "school_year": subjectKey, 
      "subject_name": course.subject_name,
      "grade": course.grade,
      "retry_yn": course.retry_yn,
      "subject_code": course.subject_code,
    };
    
    console.log("PATCH 요청:", requestBody);

    const response = await axiosInstance.patch(
      `/api/notices/mypage/course-edit/`, 
      requestBody
    );

    console.log("응답 데이터:", response.data);
    // 필요시 응답 데이터 처리
  } catch (err) {
    console.error("데이터 업데이트 중 오류:", err);
  } finally {
    setLoading(false);
  }
};



const handleFieldChange = (index, field, value) => {
  const updatedCourses = courses.map((course, i) =>
    i === index ? { ...course, [field]: value } : course
  );

  // 상태 업데이트
  setCourses(updatedCourses);

  // FixData 호출 시 즉시 최신 데이터 전달
  FixData(updatedCourses[index]);
};

  return (
    <FormContainer>
      <DropdownContainer>
        <CustomSelect
          value={selectedSemester || undefined} // 선택된 값이 없으면 placeholder가 나타나도록 설정
          onChange={(value) => setSelectedSemester(value)}
          placeholder="학기 선택" // 값이 없을 경우에 나타날 텍스트
        >
          <Select.Option value="2021 1학기">2021 1학기</Select.Option>
          <Select.Option value="2021 2학기">2021 2학기</Select.Option>
          <Select.Option value="2022 1학기">2022 1학기</Select.Option>
          <Select.Option value="2022 2학기">2022 2학기</Select.Option>
          <Select.Option value="2023 1학기">2023 1학기</Select.Option>
          <Select.Option value="2023 2학기">2023 2학기</Select.Option>
          <Select.Option value="2024 1학기">2024 1학기</Select.Option>
          <Select.Option value="2024 2학기">2024 2학기</Select.Option>
          <Select.Option value="2025 1학기">2025 1학기</Select.Option>
          <Select.Option value="2025 2학기">2025 2학기</Select.Option>
        </CustomSelect>
        <SemesterContainer>
          <SemesterText>
            {onlymajor ? getSemesterText(data.school_year) : semester}
          </SemesterText>
        </SemesterContainer>
      </DropdownContainer>
      <Form>
        <FormHeader>
          <ClassText>재수강</ClassText>
          <ClassText>과목명</ClassText>
          <GradeText>성적</GradeText>
          <GradeText>학점</GradeText>
        </FormHeader>
        <FormBody>
          {isUpdating ? (
            <CautionText>로딩 중...</CautionText>
          ) : courses.length === 0 ? (
            <CautionText>이 학기에는 수강과목이 없습니다.</CautionText>
          ) : (
            courses.map((course, index) => (
              <ClassRow
                key={index}
                course={course}
                index={index}
                onFieldChange={handleFieldChange}
                onDelete={handleDelete}
                onCheckboxChange={handleCheckboxChange}
              />
            ))
          )}
          <AddClassButton onClick={addClass}>수강과목 추가</AddClassButton>
        </FormBody>
        <FormFooter>
          <FooterText>학기평점</FooterText>
          <AvgText>{averageGrade}</AvgText> {/* 평균 학점 표시 */}
          <TotalText>/4.5</TotalText>
        </FormFooter>
      </Form>
    </FormContainer>
  );
};

const ClassRow = ({
  course,
  index,
  onFieldChange,
  onDelete,
  onCheckboxChange,
}) => {
  // 각 course에 대한 기본값 처리
  const subjectName = course.subject_name || "과목명 없음";
  const grade = course.grade || "성적 없음";
  const credit = course.credit || "학점 없음";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "10px",
        alignItems: "center",
        justifyContent: "space-between", // 각 요소가 균등하게 배치되도록
        width: "100%", // 고정된 넓이
        minHeight: "40px", // 고정된 높이
        padding: "5px 10px", // 좌우 여백 추가
        boxSizing: "border-box", // padding 포함하여 크기 계산
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
          flexShrink: 0, // 크기 고정
        }}
        checked={course.retry_yn || false}
        onChange={() => onCheckboxChange(index)}
      />

      {/* 과목명 */}
      <FormText
        style={{
          flexBasis: "40%", // 고정된 비율로 넓이 설정
          whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
          overflow: "hidden", // 넘치는 텍스트 숨기기
          textOverflow: "ellipsis", // 넘치는 텍스트에 '...' 추가
          textAlign: "left",
        }}
      >
        {subjectName}
      </FormText>

      {/* 성적 선택 */}
      <GradeSelect
        value={grade}
        onChange={(value) => onFieldChange(index, "grade", value)}
        placeholder="성적 선택"
        style={{
          flexBasis: "20%", // 고정된 비율로 넓이 설정
          marginLeft: "10px",
        }}
      >
        <Select.Option value="A+">A+</Select.Option>
        <Select.Option value="A">A</Select.Option>
        <Select.Option value="B+">B+</Select.Option>
        <Select.Option value="B">B</Select.Option>
        <Select.Option value="C+">C+</Select.Option>
        <Select.Option value="C">C</Select.Option>
        <Select.Option value="D+">D+</Select.Option>
        <Select.Option value="D">D</Select.Option>
        <Select.Option value="F">F</Select.Option>
      </GradeSelect>

      {/* 학점 */}
      <FormText
        style={{
          flexBasis: "10%", // 고정된 비율로 넓이 설정
          textAlign: "center", // 텍스트 가운데 정렬
        }}
      >
        {credit}
      </FormText>

      {/* 삭제 버튼 */}
      <LuMinusCircle
        onClick={() => onDelete(index)}
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer",
          color: "#B1B0B0",
          flexShrink: 0, // 크기 고정
        }}
      />
    </div>
  );
};
