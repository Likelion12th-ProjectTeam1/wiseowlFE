import styled from "styled-components";
import { useState, useEffect } from "react";
import { Select } from "antd";
import axiosInstance from "../../auth/axiosInstance";
<FaChevronLeft size="22px" onClick={handleClick} />

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height : 1200px;
  width : 390px;
`;

const Container = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
`;

const HeaderTitle = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 21.188px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 40px;
  margin-left: 40px;
`;

const PasswordContainer = styled.div`
  width: 100%;
  height: 280px;
`;
const ContainerHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
`;

const ContainerTitle = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 14.782px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 40px;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const Line = styled.div`
  width: 100%;
  background: #eceeef;
  height: 3px;
`;

const SpecialLine = styled.div`
  width: 110px;
  height: 3px;
  background: #5d96e8;
  margin-left: 30px;
`;
const PasswordText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 14.782px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 40px;
  margin-top: 15px;
`;

const InputBox = styled.input`
  width: 70%;
  height: 70px;
  border: 0.146px solid #737373;
  background: #fff;
  box-sizing: border-box; /* 패딩과 보더 포함 */
  padding: 10px; /* 내부 여백 */
  margin-left: 40px;
  margin-top: 10px;
  border-radius: 3.696px;
  line-height: normal; /* 라인 높이 설정 */
  -webkit-appearance: none; /* 브라우저 기본 스타일 제거 */
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: #b0b0b0;
    font-size: 12px;
    font-family: Inter;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PasswordButton = styled.div`
  width: 50%;
  height: 30px;
  border-radius: 30px;
  background: #5d96e8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 70px;
`;

const MajorContainer = styled.div`
  width: 100%;
  height: 300px;
`;
const CollegeSelect = styled(Select)`
  // antd의 Select로 사용
  width: 120px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 0 !important;
  margin-left: 40px;
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

const MajorText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 14.782px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 50px;
`;
const SelectHeader = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  display: flex;
  font-size: row;
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

const ChooseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const MajorButton = styled.div`
  width: 50%;
  height: 30px;
  border-radius: 30px;
  background: #5d96e8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 90px;
`;

const GubunContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const MiddleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LowContainer = styled.div`
  width: 100%;
  height: 40%;
`;

const GubunSelect = styled(Select)`
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

const GubunButton = styled.div`
  width: 50%;
  height: 30px;
  border-radius: 30px;
  background: #5d96e8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 50px;
`;
export default function EditMypage() {
  const [oldpassword, setOldpassword] = useState();
  const [newpassword, setNewpassword] = useState();
  const [gubun, setGubun] = useState("");
  const [data, setData] = useState(null);
  const [prevgubun, setPrevgubun] = useState(null);
  const [prevdata, setPrevdata] = useState(null);
  const [error, setError] = useState(null);
  const [colleges, setColleges] = useState([]); // 전체 단과대 데이터
  const [selectedCollege, setSelectedCollege] = useState(null); // 선택된 단과대 ID를 저장
  const [selectedCollegeData, setSelectedCollegeData] = useState(null); // 선택된 단과대 데이터를 저장
  const [majors, setMajors] = useState([]); // 선택된 단과대의 학과 데이터
  const [major, setMajor] = useState("");
  const [doublecollege, setDoublecollege] = useState(null);
  const [doublemajor, setDoublemajor] = useState("");
  const [changecollege, setChangeCollege] = useState(null);
  const [changemajor, setChangemajor] = useState(null);
  const [changedoublemajors,setChangeDoubleMajors] = useState(null);
  const [prevcollege , setPrevcollege] = useState(null);
  const [prevmajor , setPrevmajor] = useState(null);
  const [prevdoublecollege , setPrevdoublecollege] = useState(null);
  const [prevdoublemajor , setPrevdoublemajor] = useState(null);
  

  const handleGubunChange = (value) => {
    if (value === "전공심화 + 부전공") {
      setGubun("전공심화 + 부전공"); // 데이터 처리용으로는 부전공으로 설정
    } else {
      setGubun(value);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/requirements/colleges/`);
        setData(response.data); // 데이터 저장
        console.log(response.data); // 데이터 출력
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching data:", err);
      }
    };

    const fetchPrevData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/notices/mypage/myinfo-edit/`
        );
        setPrevdata(response.data); // 데이터 저장
        console.log("사용자 데이터" ,response.data); // 데이터 출력
        if (response.data) {
          setPrevcollege(response.data.college);
          setPrevmajor(response.data.major);
          setPrevdoublecollege(response.data.double_college);
          setPrevdoublemajor(response.data.double_major);
        }
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
    fetchPrevData();
  }, []);

  const PostData = async () => {
    try {
      const requestBody = {
        college: selectedCollege || prevcollege, // 변경되지 않았으면 기존 값
        major: major || prevmajor, // 변경되지 않았으면 기존 값
        profile_gubn: gubun,
        second_college: doublecollege || prevdoublecollege, // 변경되지 않았으면 기존 값
        second_major: doublemajor || prevdoublemajor, // 변경되지 않았으면 기존 값
      };

      console.log("패치 성공:", requestBody);

      // PATCH 요청 보내기
      const response = await axiosInstance.patch(
        "/api/notices/mypage/myinfo-edit/major/",
        requestBody
      );
      console.log("패치 성공:", response.data);
      alert("수정완료")
    } catch (err) {
      setError("데이터를 업데이트하는 중 오류가 발생했습니다.");
      console.error("Error updating data:", err);
    }
  };

  const PatchData = async () => {
    try {
      const password = {
        old_password: oldpassword,
        new_password: newpassword,
      };

      console.log("패치 성공:", password);

      // PATCH 요청 보내기
      const response = await axiosInstance.patch(
        "/api/account/edit/password",
        password
      );

      console.log("패치 성공:", response.data);
    } catch (err) {
      setError("데이터를 업데이트하는 중 오류가 발생했습니다.");
      console.error("Error updating data:", err);
    }
  };

  const PatchGubun = async () => {
    try {
      const gubundata = {
        profile_gubun: gubun,
        changed_college: changecollege,
        changed_major: changemajor,
      };
      console.log("데이터 확인:", gubundata);

      // PATCH 요청 보내기
      const response = await axiosInstance.patch(
        "/api/notices/mypage/myinfo-edit/double-to-minor/",
        gubundata
      );
      alert("수정완료")
      console.log("패치 성공:", response.data);
    } catch (err) {
      setError("데이터를 업데이트하는 중 오류가 발생했습니다.");
      console.error("Error updating data:", err);
    }
  };
  

  return (
    <PageContainer>
      <Header>
        <HeaderTitle>회원정보 수정</HeaderTitle>
      </Header>
      <PasswordContainer>
        <ContainerHeader>
          <ContainerTitle>비밀번호변경</ContainerTitle>
          <Line>
            <SpecialLine />
          </Line>
          <PasswordText>현재 비밀번호</PasswordText>
          <InputBox
            placeholder="현재 비밀번호를 입력해주세요"
            value={oldpassword}
          ></InputBox>
          <PasswordText>변경할 비밀번호</PasswordText>
          <InputBox
            placeholder="새 비밀번호를 입력해주세요"
            value={newpassword}
          ></InputBox>
          <ButtonContainer>
            <PasswordButton onClick={PatchData}>
              비밀번호 변경하기
            </PasswordButton>
          </ButtonContainer>
        </ContainerHeader>
      </PasswordContainer>
      <MajorContainer>
        <ContainerTitle>전공 변경</ContainerTitle>
        <Line>
          <SpecialLine />
        </Line>
        <SelectContainer>
          <SelectHeader>
            <MajorText>본전공 단과대</MajorText>
            <MajorText>본전공</MajorText>
          </SelectHeader>
          <ChooseContainer>
            <CollegeSelect
              placeholder="단과대를 선택하세요"
              style={{ width: "300px" }}
              value={selectedCollege || prevcollege}
              onChange={(value) => {
                // 선택된 단과대 객체를 찾음
                const selectedCollege = data.colleges.find(
                  (college) => college.college_name === value
                );

                // 선택된 단과대 이름 저장
                setSelectedCollege(
                  selectedCollege ? selectedCollege.college_name : null
                );

                // 선택된 단과대의 데이터 저장
                setSelectedCollegeData(selectedCollege);

                // 선택된 단과대의 전공 목록 업데이트
                setMajors(selectedCollege ? selectedCollege.majors : []);

                // 선택된 단과대 출력
                console.log(
                  "선택된 단과대 이름:",
                  selectedCollege ? selectedCollege.college_name : null
                );
              }}

            >
              {data &&
                data.colleges &&
                data.colleges.map((college) => (
                  <Select.Option
                    key={college.college_id}
                    value={college.college_name}
                  >
                    {college.college_name}
                  </Select.Option>
                ))}
            </CollegeSelect>
            <CollegeSelect
              placeholder="전공을 선택하세요"
              value={major || prevmajor}
              style={{ width: "300px" }}
              onChange={(value) => {
                // 선택된 전공 이름 저장
                setMajor(value);

                // 선택된 전공 출력
                console.log("선택된 전공 이름:", value);
              }}
            >
              {majors &&
                majors.map((major) => (
                  <Select.Option
                    key={major.department_id}
                    value={major.department_name}
                  >
                    {major.department_name}
                  </Select.Option>
                ))}
            </CollegeSelect>
          </ChooseContainer>
          {prevdata && prevdata.profile_gubun !== "전공심화" && (
            <>
              <ChooseContainer>
                <SelectHeader>
                  <MajorText>{prevdata.profile_gubun} 단과대</MajorText>
                  <MajorText>{prevdata.profile_gubun}</MajorText>
                </SelectHeader>
              </ChooseContainer>
              <ChooseContainer>
                <CollegeSelect
                  placeholder="단과대를 선택하세요"
                  style={{ width: "300px" }}
                  value={doublecollege || prevdoublecollege}
                  onChange={(value) => {
                    // 선택된 단과대 객체 찾기
                    const selectedDoubleCollege = data.colleges.find(
                      (college) => college.college_name === value
                    );

                    // 단과대 이름 저장
                    setDoublecollege(
                      selectedDoubleCollege ? selectedDoubleCollege.college_name : null
                    );

                    // 해당 단과대의 전공 목록 업데이트
                    setChangeDoubleMajors(selectedDoubleCollege ? selectedDoubleCollege.majors : []);

                    // 선택된 단과대 출력
                    console.log(
                      "선택된 이중전공 단과대 이름:",
                      selectedDoubleCollege ? selectedDoubleCollege.college_name : null
                    );
                  }}
                >
                  {data &&
                    data.colleges &&
                    data.colleges.map((college) => (
                      <Select.Option
                        key={college.college_id}
                        value={college.college_name}
                      >
                        {college.college_name}
                      </Select.Option>
                    ))}
                </CollegeSelect>
                <CollegeSelect
                  placeholder="전공을 선택하세요"
                  style={{ width: "300px" }}
                  value={doublemajor || prevdoublemajor}
                  onChange={(value) => {
                    // 전공 이름 저장
                    setDoublemajor(value);

                    // 선택된 전공 출력
                    console.log("선택된 이중전공 이름:", value);
                  }}
                >
                  {changedoublemajors &&
                    changedoublemajors.map((doublemajor) => (
                      <Select.Option
                        key={doublemajor.department_id}
                        value={doublemajor.department_name}
                      >
                        {doublemajor.department_name}
                      </Select.Option>
                    ))}
                </CollegeSelect>
              </ChooseContainer>
            </>
          )}
        </SelectContainer>
        <ButtonContainer>
          <MajorButton onClick={PostData}>수정완료</MajorButton>
        </ButtonContainer>
      </MajorContainer>
      <GubunContainer>
        <ContainerTitle>구분 변경</ContainerTitle>
        <Line>
          <SpecialLine />
        </Line>
        <MiddleContainer>
          <GubunSelect
            value={gubun}
            onChange={handleGubunChange}
            placeholder="구분 선택"
          >
            <Select.Option value="이중전공">이중전공</Select.Option>
            <Select.Option value="부전공">부전공</Select.Option>
            <Select.Option value="전공심화">전공심화</Select.Option>
            <Select.Option value="전공심화 + 부전공">
              전공심화 + 부전공
            </Select.Option>
          </GubunSelect>
        </MiddleContainer>
        {gubun !== "전공심화" && (
          <LowContainer>
            <SelectHeader>
              {/* gubun 값이 "전공심화 + 부전공"이면 "부전공"으로 표시 */}
              <MajorText>
                {gubun === "전공심화 + 부전공" ? "부전공" : gubun} 단과대
              </MajorText>
              <MajorText>
                {gubun === "전공심화 + 부전공" ? "부전공" : gubun}
              </MajorText>
            </SelectHeader>
            <ChooseContainer>
              <CollegeSelect
                placeholder="단과대를 선택하세요"
                style={{ width: "300px" }}
                onChange={(value) => {
                  // 선택된 단과대 객체를 찾음
                  const selectedCollege = data.colleges.find(
                    (college) => college.college_name === value
                  );

                  // 선택된 단과대 이름 저장
                  setSelectedCollege(
                    selectedCollege ? selectedCollege.college_name : null
                  );

                  // 선택된 단과대의 데이터 저장
                  setChangeCollege(selectedCollege);

                  // 선택된 단과대의 전공 목록 업데이트
                  setMajors(selectedCollege ? selectedCollege.majors : []);

                  // 선택된 단과대 출력
                  console.log(
                    "선택된 단과대 이름:",
                    selectedCollege ? selectedCollege.college_name : null
                  );
                }}
                
              >
                {data &&
                  data.colleges &&
                  data.colleges.map((college) => (
                    <Select.Option
                      key={college.college_id}
                      value={college.college_name}
                    >
                      {college.college_name}
                    </Select.Option>
                  ))}
              </CollegeSelect>
              <CollegeSelect
                placeholder="전공을 선택하세요"
                style={{ width: "300px" }}
                onChange={(value) => {
                  // 선택된 전공 이름 저장
                  setChangemajor(value);

                  // 선택된 전공 출력
                  console.log("선택된 전공 이름:", value);
                }}
              >
                {majors &&
                  majors.map((major) => (
                    <Select.Option
                      key={major.department_id}
                      value={major.department_name}
                    >
                      {major.department_name}
                    </Select.Option>
                  ))}
              </CollegeSelect>
            </ChooseContainer>
          </LowContainer>
        )}

        <ButtonContainer>
          <GubunButton onClick={PatchGubun}>구분 변경하기</GubunButton>
        </ButtonContainer>
      </GubunContainer>
    </PageContainer>
  );
}
