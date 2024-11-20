import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios 추가

// Styled Components
const ModalContainer = styled.div`
    width: 250px;
    height: 410px;
    display: flex;
    flex-direction: column;
    border-radius: 22px;
    background: #f5f5f5;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
`;

const ModalTitle = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    margin-left: 25px;
    margin-top: 35px;
`;

const TitleImg = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("/img/stopwatch.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: 20px;
    top: 30px;
`;

const CancleImg = styled.div`
    width: 17px;
    height: 20px;
    background-image: url("/img/cancle.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: 55px;
    top: 30px;
    cursor: pointer;
`;

const NoticeText = styled.h4`
    color: #a7a8ab;
    font-family: Inter;
    font-size: 10px;
    font-weight: 500;
    margin-left: 25px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    padding: 22px;
    gap: 10px;
`;

const ButtonBox1 = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonBox2 = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CenterButton = styled.div`
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.isSubscribed ? "#000" : "#737373")};
    border-radius: 30px;
    background: #fff;
    margin-bottom: 10px; // Add space between buttons
    font-size: 7px;
    cursor: pointer;
    border: ${(props) => (props.isSubscribed ? "2px solid #5d96e8" : "none")};
    &:hover {
        border: 2px solid #5d96e8;
        background: #fff;
        color: #000;
    }
`;

// Main Component
export default function NoticeModal() {
    const [data, setData] = useState(null);
    const [token, setToken] = useState(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NDM1NTU2LCJpYXQiOjE3MzE4NDM1NTYsImp0aSI6ImQ5NWRlNGUyZWQ4ZTRkZmZiMmU2OThmMTM4NjFjZGU0IiwidXNlcl9pZCI6NX0.Uq1roWDY74apsMgfLzJYY46GENHUd0Zd3PET_piePDw"
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const goToNoticepage = () => {
        navigate("/notice");
    };

    // handleOrgan 함수 수정
    const handleOrgan = (index) => {
        const updatedData = data.map((item, i) => 
            i === index ? { ...item, subscribe_yn: !item.subscribe_yn } : item
        );
        setData(updatedData); // 데이터 상태 업데이트
        PatchData();
    };
    
    const PatchData = async () => {
        try {
            // PATCH 요청 보내기
            const response = await axios.patch(
                "http://43.201.90.146:8000/api/notices/alarm/organ/",
                {
                    data: data, // 데이터 변수 전달
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Bearer 방식으로 토큰 설정
                    },
                }
            );
            console.log(response.data); 
        } catch (err) {
            setError("데이터를 불러오는 중 오류가 발생했습니다."); // 에러 처리
            console.error("Error fetching data:", err); // 에러 로그 출력
        } finally {
            setLoading(false); // 데이터 로드 후 로딩 상태 false로 설정
        }
    };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://43.201.90.146:8000/api/notices/alarm/organ/",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setData(response.data.organ); // 데이터 저장
                console.log(response.data); // 데이터 출력
            } catch (err) {
                setError("데이터를 불러오는 중 오류가 발생했습니다.");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    if (loading) {
        return (
            <ModalContainer>
                <NoticeText>로딩 중...</NoticeText>
            </ModalContainer>
        );
    }

    if (error) {
        return (
            <ModalContainer>
                <NoticeText>{error}</NoticeText>
            </ModalContainer>
        );
    }

    // 데이터 나누기 (반으로 나누기)
    const halfIndex = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, halfIndex);
    const secondHalf = data.slice(halfIndex);

    return (
        <ModalContainer>
            <TitleContainer>
                <TitleImg />
                <ModalTitle>알림 선택</ModalTitle>
                <CancleImg onClick={goToNoticepage} />
            </TitleContainer>
            <NoticeText>알림을 받아보실 기관을 선택해주세요</NoticeText>
            <ButtonContainer>
                <ButtonBox1>
                    {firstHalf.map((item, index) => (
                        <CenterButton
                            key={`first-${index}`}
                            isSubscribed={item.subscribe_yn}
                            onClick={() => handleOrgan(index)} // 인덱스 전달
                        >
                            {item.organ_name}
                        </CenterButton>
                    ))}
                </ButtonBox1>
                <ButtonBox2>
                    {secondHalf.map((item, index) => (
                        <CenterButton
                            key={`second-${index}`}
                            isSubscribed={item.subscribe_yn}
                            onClick={() => handleOrgan(index + firstHalf.length)} // 전체 인덱스 계산
                        >
                            {item.organ_name}
                        </CenterButton>
                    ))}
                </ButtonBox2>
            </ButtonContainer>
        </ModalContainer>
    );
}
