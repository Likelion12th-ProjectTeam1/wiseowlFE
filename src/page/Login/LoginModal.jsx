import React, { useState } from 'react';
import styled from 'styled-components';
import { Arrow, CheckBox } from '../../img/logo';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background-color: #FFFFFF;
    padding: 0px;
`;

const Title = styled.h1`
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
`;

const AgreementContainer = styled.div`
    margin-bottom: 30px;
`;

const AgreementTitle = styled.h2`
    font-size: 13px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 오른쪽 끝으로 정렬 */
    font-weight: 400;
    cursor: pointer;
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
    width: 100%;
    padding: 12px 0;
    cursor: pointer;
`;

const CheckboxLabel = styled.span`
    margin-left: 13px;
    font-size: 13px;
`;

const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 90px;
`;

const SubmitButton = styled.button`
    padding: 10px 100px;
    background-color: #ECECEC;
    color: #959595;
    border: none;
    border-radius: 5px;
    font-size: 13.39px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #d7d7d7;
    }
`;

const StyledCheckBox = styled(CheckBox)`
    fill: ${props => props.checked ? '#4CAF50' : '#D1D1D1'};
`;

export default function LoginModal() {
    const [checkedList, setCheckedList] = useState(Array(5).fill(false)); // 체크박스 상태 배열

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
        e.stopPropagation(); // 클릭 이벤트 전파 방지
        console.log('다음 페이지로 이동');
        // 실제 네비게이션 코드 예: window.location.href = '/next-page';
    };

    const handleSubmit = () => {
        console.log('서비스 약관 동의가 완료되었습니다.');
    };

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
                    <div onClick={handleArrowClick}>
                        <Arrow />
                    </div>
                </AgreementTitle>
                <Divider />
                
                {['와이즈올 계정 약관 (필수)', '개인정보 수집 및 이용 동의 (필수)', '알림 서비스 이용약관 동의 (필수)', 'E-mail 및 SMS 광고성 정보 수신 동의 (선택)'].map((text, index) => (
                    <AgreementItem key={index} onClick={() => handleCheckboxClick(index + 1)}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <StyledCheckBox checked={checkedList[index + 1]} />
                            <CheckboxLabel>{text}</CheckboxLabel>
                        </div>
                        <div onClick={(e) => { e.stopPropagation(); handleArrowClick(e); }}>
                            <Arrow />
                        </div>
                    </AgreementItem>
                ))}
            </AgreementContainer>
            
            <SubmitButtonContainer>
                <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
            </SubmitButtonContainer>
        </PageContainer>
    );
}
