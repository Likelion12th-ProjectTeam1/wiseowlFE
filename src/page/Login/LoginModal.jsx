import React, { useState } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../auth/axiosInstance';
import { Arrow, CheckBox } from '../../img/Logo';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    width: 390px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background-color: #FFFFFF;
    padding: 0px;
    padding-bottom: 100px;
`;

const Title = styled.h1`
    font-family: Inter;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 22px;
    text-align: left;
    color: #000000;
    font-weight: 100;
`;

const InfoText = styled.p`
    font-size: 9pt;
    color: #A3A3A3;
    margin-bottom: 30px;
    font-weight: 100; 
    font-family: Inter;
`;

const AgreementContainer = styled.div`
    margin-bottom: 30px;
`;

const AgreementTitle = styled.h2`
    font-size: 13px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    cursor: pointer;
    font-family: Inter;
`;

const Divider = styled.div`
    height: 1px;
    background-color: #ccc;
    margin-bottom: 10px;
    width: 100%;
`;

const AgreementItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 390px;
    padding: 12px 0;
    cursor: pointer;
`;

const ArrowContainer = styled.div`
    margin-left: auto;
    padding-right: 10px;
    display: flex;
    align-items: center;
`;

const CheckboxLabel = styled.span`
    margin-left: 13px;
    font-size: 13px;
    font-family: Inter;
`;

const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 390px;
    margin-top: 90px;
`;

const SubmitButton = styled.button`
    padding: 10px 100px;
    background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
    color: ${props => props.disabled ? '#959595' : '#FFFFFF'};
    border: none;
    border-radius: 5px;
    font-size: 13.39px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;

    &:hover {
        background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
    }
`;

const StyledCheckBox = styled(CheckBox)`
    fill: ${props => props.checked ? '#5D96E8' : '#D1D1D1'};
`;

export default function LoginModal() {
    const [checkedList, setCheckedList] = useState(Array(5).fill(false)); // 체크박스 상태 배열
    const [errorMessage, setErrorMessage] = useState("");  // 오류 메시지 상태 추가
    const navigate = useNavigate();

    const handleCheckboxClick = (index) => {
        const newCheckedList = [...checkedList];
        
        if (index === 0) {
            const newValue = !newCheckedList[0];
            setCheckedList(Array(5).fill(newValue));
        } else {
            newCheckedList[index] = !newCheckedList[index];
            setCheckedList(newCheckedList);

            const allChecked = newCheckedList.slice(1).every(checked => checked);
            newCheckedList[0] = allChecked;
            setCheckedList(newCheckedList);
        }
    };

    const handleArrowClick = (e) => {
        e.stopPropagation();
        console.log('다음 페이지로 이동');
    };

    const handleSubmit = async () => {
        // 필수 항목 및 선택 항목 체크 상태
        const profileAgreement = checkedList[4]; // 선택 항목 동의 여부

        // 백엔드로 보낼 데이터
        const data = {
            profile_agreement: profileAgreement, // 선택 항목
        };

        // 콘솔에 요청 데이터 출력
        console.log('보내는 데이터:', data);  // 데이터 출력
        
        try {
            const response = await axiosInstance.post(
                '/api/accounts/agree/', // 백엔드 엔드포인트
                data // 보낼 데이터
            );

            console.log('서버 응답:', response.data);

            if (response.status === 200) {
                // 성공적으로 약관 동의가 완료되었을 때
                console.log('서비스 약관 동의가 완료되었습니다.');
                navigate('/info'); // 성공적으로 약관 동의를 마친 후 페이지 이동
            } else {
                // 응답이 200이 아니면 오류 처리
                setErrorMessage('서버 오류: 약관 동의가 처리되지 않았습니다.');
            }
        } catch (error) {
            // 네트워크 오류 등의 예외 처리
            console.error('약관 동의 요청 오류:', error);
            setErrorMessage('서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.');
        }
    };

    // 필수 항목이 모두 체크되었는지 확인
    const isAllRequiredChecked = checkedList.slice(1, 4).every(checked => checked);

    return (
        <PageContainer>
            <Title>
                와이즈올<br />
                서비스약관에 동의해주세요.
            </Title>
            <InfoText>
                와이즈올 서비스를 사용하기 위해서는 아래의 <br />
                약관 동의가 필요합니다. 
            </InfoText>

            <AgreementContainer>
                <AgreementTitle onClick={() => handleCheckboxClick(0)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StyledCheckBox checked={checkedList[0]} />
                        <CheckboxLabel>모두 동의합니다.</CheckboxLabel>
                    </div>
                </AgreementTitle>
                <Divider />
                
                {['와이즈올 계정 약관 (필수)', '개인정보 수집 및 이용 동의 (필수)', '알림 서비스 이용약관 동의 (필수)', 'E-mail 및 SMS 광고성 정보 수신 동의 (선택)'].map((text, index) => (
                    <AgreementItem key={index} onClick={() => handleCheckboxClick(index + 1)}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <StyledCheckBox checked={checkedList[index + 1]} />
                            <CheckboxLabel>{text}</CheckboxLabel>
                        </div>
                        <ArrowContainer onClick={(e) => { e.stopPropagation(); handleArrowClick(e); }}>
                            <Arrow />
                        </ArrowContainer>
                    </AgreementItem>
                ))}
            </AgreementContainer>
            
            {errorMessage && (
                <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>
                    {errorMessage}
                </div>
            )}

            <SubmitButtonContainer>
                <SubmitButton onClick={handleSubmit} disabled={!isAllRequiredChecked}>다음</SubmitButton>
            </SubmitButtonContainer>
        </PageContainer>
    );
}

