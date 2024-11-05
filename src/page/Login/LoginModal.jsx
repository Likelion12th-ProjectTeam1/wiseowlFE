import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background-color: #F9F9F9;
    padding: 20px;
`;

const Title = styled.h1`
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 22px;
    text-align: left;
    font-weight: 600;
`;

const InfoText = styled.p`
    font-size: 11pt;
    color: #737373;
    margin-bottom: 20px;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const AgreementContainer = styled.div`
    margin-bottom: 30px;
`;

const AgreementTitle = styled.h2`
    font-size: 13px;
    margin-bottom: 10px;
    position: relative;
`;

const Divider = styled.div`
    height: 1px;
    background-color: #ccc;
    margin-bottom: 10px;
    width: 100%;
`;

const AgreementItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    cursor: pointer;
`;

const Explanation = styled.p`
    font-size: 11pt;
    color: #737373;
    margin: 5px 0 15px;
`;

const ArrowButton = styled.span`
    cursor: pointer;
    font-size: 18px;
`;

const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    padding: 15px 100px; /* 크기 조정 */
    background-color: #ECECEC;
    color: #959595;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #d7d7d7;
    }
`;


export default function PLoginModal() {
    const [showExplanations, setShowExplanations] = useState([false, false, false, false]);

    const handleExplanationToggle = (index) => {
        setShowExplanations(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleSubmit = () => {
        console.log('개인정보 약관 동의가 완료되었습니다.');
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
                <AgreementTitle>모두 동의합니다</AgreementTitle>
                <Divider />
                
                <AgreementItem>
                    <Checkbox type="checkbox" id="terms1" />
                    <label htmlFor="terms1">와이즈올 계정 약관(필수)</label>
                    <ArrowButton onClick={() => handleExplanationToggle(0)}>
                        {showExplanations[0] ? '▲' : '▼'}
                    </ArrowButton>
                </AgreementItem>
                {showExplanations[0] && (
                    <Explanation>
                        이 약관은 와이즈올 계정 이용과 관련된 규정입니다.
                    </Explanation>
                )}

                <AgreementItem>
                    <Checkbox type="checkbox" id="terms2" />
                    <label htmlFor="terms2">개인정보 수집 및 이용 동의(필수)</label>
                    <ArrowButton onClick={() => handleExplanationToggle(1)}>
                        {showExplanations[1] ? '▲' : '▼'}
                    </ArrowButton>
                </AgreementItem>
                {showExplanations[1] && (
                    <Explanation>
                        개인정보 수집 및 이용에 대한 내용을 안내합니다.
                    </Explanation>
                )}

                <AgreementItem>
                    <Checkbox type="checkbox" id="terms3" />
                    <label htmlFor="terms3">알림 서비스 이용약관 동의 (필수)</label>
                    <ArrowButton onClick={() => handleExplanationToggle(2)}>
                        {showExplanations[2] ? '▲' : '▼'}
                    </ArrowButton>
                </AgreementItem>
                {showExplanations[2] && (
                    <Explanation>
                        알림 서비스 이용과 관련된 내용입니다.
                    </Explanation>
                )}

                <AgreementItem>
                    <Checkbox type="checkbox" id="terms4" />
                    <label htmlFor="terms4">E-mail 및 SMS 광고성 정보 수신동의(선택)</label>
                    <ArrowButton onClick={() => handleExplanationToggle(3)}>
                        {showExplanations[3] ? '▲' : '▼'}
                    </ArrowButton>
                </AgreementItem>
                {showExplanations[3] && (
                    <Explanation>
                        광고성 정보 수신에 대한 동의입니다.
                    </Explanation>
                )}
            </AgreementContainer>
            
            <SubmitButtonContainer>
                <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
            </SubmitButtonContainer>
        </PageContainer>
    );
}
