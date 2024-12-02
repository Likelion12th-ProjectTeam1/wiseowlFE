import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../auth/axiosInstance";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  // 중앙 정렬
    width: 250px;
    height: 410px;
    display: flex;
    flex-direction: column;
    border-radius: 22px;
    background: #f5f5f5;
    z-index: 9999;  // 모달이 다른 요소들 위에 오도록 설정
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
    font-size: 15px;
    font-weight: 600;
    margin-left: 30px;
    margin-top: 40px;
`;


const CancleImg = styled.img`
    width: 17px;
    height: 20px;
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
    margin-top : 7px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    padding: 18px;
    gap: 10px;
    margin-bottom: 50px;
`;

const ButtonBox1 = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-family: Inter;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const ButtonBox2 = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-family: Inter;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const CenterButton = styled.div`
    width: 80px;
    height: 25px;
    white-space: nowrap; /* 수정: whiteSpace -> white-space */
    text-overflow: ellipsis; /* 수정: textOverflow -> text-overflow */
    overflow: hidden; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.isSubscribed ? "#000" : "#737373")};
    border-radius: 30px;
    background: #fff;
    margin-bottom: 15px; // Add space between buttons
    cursor: pointer;
    border: ${(props) => (props.isSubscribed ? "2px solid #5d96e8" : "none")};
    &:hover {
        border: 2px solid #5d96e8;
        background: #fff;
        color: #000;
    }
`;

const ButtonText = styled.h3`
    color: #000;
    text-align: center;
    align-items: center;
    font-size: 10.101px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 70px; /* 원하는 너비 */
    white-space: nowrap; /* 텍스트 줄바꿈 금지 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 말줄임표 표시 */
    display: block; /* 필수: block 또는 inline-block */
`

const Image = styled.img`
   width: 40px;
    height: 40px;
    position: relative;
    left: 20px;
    top: 30px;
`;

// Main Component
export default function NoticeModal() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const goToNoticepage = () => {
        navigate("/notice");
    };

    // handleOrgan 함수 수정
    const handleOrgan = (index) => {
        setData((prevData) => {
            const updatedData = prevData.map((item, i) =>
                i === index ? { ...item, subscribe_yn: !item.subscribe_yn } : item
            );
            
            // 최신 상태로 PatchData 호출
            PatchData(updatedData);
    
            return updatedData; // 상태 업데이트
        });
    };
    
    const PatchData = async (updatedData) => {
        try {
            const requestBody = {
                subscribe_major: updatedData[0]?.subscribe_yn || false, // 0번 인덱스
                subscribe_double: updatedData[1]?.subscribe_yn || false, // 1번 인덱스
                subscribe_ai: updatedData[2]?.subscribe_yn || false, // 2번 인덱스
                subscribe_foreign: updatedData[3]?.subscribe_yn || false, // 3번 인덱스
                subscribe_cfl: updatedData[4]?.subscribe_yn || false, // 4번 인덱스
                subscribe_flex: updatedData[5]?.subscribe_yn || false, // 5번 인덱스
                subscribe_foreign_edu: updatedData[6]?.subscribe_yn || false, // 6번 인덱스
                subscribe_special_foreign: updatedData[7]?.subscribe_yn || false, // 7번 인덱스
            };
    
            // PATCH 요청 보내기
            const response = await axiosInstance.patch(
                "/api/notices/alarm/organ/",
                requestBody
            );
    
            console.log("패치 성공:", response.data);
        } catch (err) {
            setError("데이터를 업데이트하는 중 오류가 발생했습니다.");
            console.error("Error updating data:", err);
        }
    };
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(
                    "/api/notices/alarm/organ/"
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
    }, []);

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
        <PageContainer>
            <ModalContainer>
                <TitleContainer>
                    <Image src="/img/stopwatch.svg" alt="stopwatch" />
                    <ModalTitle>알림 선택</ModalTitle>
                    <CancleImg src="/img/cancle.svg" alt="cancle" onClick={goToNoticepage} />
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
                                <ButtonText>
                                    {item.organ_name}
                                </ButtonText>
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
                                <ButtonText>
                                    {item.organ_name}
                                </ButtonText>
                            </CenterButton>
                        ))}
                    </ButtonBox2>
                </ButtonContainer>
            </ModalContainer>
        </PageContainer>
    );
}
