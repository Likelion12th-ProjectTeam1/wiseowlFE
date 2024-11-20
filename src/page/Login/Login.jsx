import React from 'react';
import styled from 'styled-components';
import { Logo, Char, GoogleLogo as ImportedGoogleLogo } from '../../img/Logo'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 390px;
    background-color: #F9F9F9;
    gap: 10px; 
    padding-bottom: 36px;
`;

const Text = styled.p`
    font-size: 11.5px; 
    color: #535353; 
    margin: 0; 
    font-family: Inter;
`;

const GoogleButton = styled.button`
    padding: 15px 50px;
    height: 45px;
    background-color: #FFFFFF;
    color: #737373;
    border-radius: 30px;
    border: 1px solid #909090;
    cursor: pointer;
    font-size: 12px;
    font-family: 'Inter';
    display: flex;
    align-items: center;

    &:hover {
        background-color: #cccccc;
    }
`;

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px; 
    font-family: Inter;
`;

export default function Login() {

    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=359516737837-3ai4hvigr4b7l8dhm6s206mk95uoamda.apps.googleusercontent.com&redirect_uri=http://localhost:5173/googleLogin&response_type=code&scope=openid%20profile%20email`;

    // 구글 로그인 리디렉션 처리
    const handleGoogleLogin = () => {
        window.location.href = googleURL;
    };


    return (
        <PageContainer>
            <Logo />
            <Text>캠퍼스 생활의 지혜를 담다, 와이즈올</Text>
            <Char />
            <GoogleButton onClick={handleGoogleLogin}>
                <ButtonContent>
                    <ImportedGoogleLogo /> 
                    구글로 로그인하기
                </ButtonContent>
            </GoogleButton>
        </PageContainer>
    );
}


