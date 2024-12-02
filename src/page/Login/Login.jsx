import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Logo, Char, GoogleLogo as ImportedGoogleLogo } from '../../img/Logo';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
    font-weight: 500;
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
    font-weight: 600;

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
    const cookies = new Cookies();
    const navigate = useNavigate();

    // 엑세스/리프레시 토큰 확인 후 리다이렉트
    useEffect(() => {
        const accessToken = cookies.get('accessToken');
        const refreshToken = cookies.get('refreshToken');

        if (accessToken || refreshToken) {
            console.log('Tokens found. Redirecting to /main...');
            navigate('/main'); // 토큰이 있으면 메인 페이지로 리다이렉트
        }
    }, [cookies, navigate]);

    const handleGoogleLogin = () => {
        window.location.href = 'https://largeredjade.site/api/accounts/google/login/';
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
