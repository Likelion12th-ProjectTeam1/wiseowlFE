import React from 'react';
import styled from 'styled-components';
import { Logo, Char, GoogleLogo as ImportedGoogleLogo } from '../../img/logo';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #F9F9F9;
    gap: 20px; /* Char와 버튼 사이 간격 조절 */
`;

const StyledChar = styled(Char)`
    margin-bottom: 90px; /* Char와 버튼 사이 간격 조절 */
`;

const GoogleButton = styled.button`
    padding: 15px 50px;
    height: 45px;
    background-color: #FFFFFF;
    color: #737373;
    border-radius: 30px;
    border: 1px solid #909090;
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: gray;
    }
`;

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px; /* 로고와 텍스트 사이 간격 조절 */
`;


const StyledGoogleLogo = styled(ImportedGoogleLogo)`
    margin-right: 68px; /* 로고와 텍스트 사이 간격 조절 */
`;

export default function Login() {
    const handleGoogleLogin = () => {
        console.log('구글 로그인 버튼 클릭됨');
    };

    return (
        <PageContainer>
            <Logo />
            <StyledChar />
            <GoogleButton onClick={handleGoogleLogin}>
                <ButtonContent>
                    <StyledGoogleLogo />
                    구글로 로그인하기
                </ButtonContent>
            </GoogleButton>
        </PageContainer>
    );
}
