import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function GoogleLoginRedirection() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');  // URL에서 authorization code 추출

  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const [loading, setLoading] = useState(false);  // 로딩 상태 추가
  const [error, setError] = useState(null);  // 에러 상태 추가

  const PostDate = async () => {
    if (code) {
      try {
        setLoading(true);  // 요청 시작 시 로딩 상태 변경
        setError(null);  // 이전 오류 초기화

        console.log("Sending GET request with authorization code:", code);

        // 백엔드에 GET 요청 보내기
        const response = await fetch(`http://ec2-43-201-90-146.ap-northeast-2.compute.amazonaws.com:8000/api/accounts/google/callback/?code=${code}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          // HTTP 오류가 발생한 경우
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`API call failed: ${response.status} ${response.statusText} - ${errorText}`);
        }

        // 서버에서 반환된 데이터를 JSON으로 파싱
        const data = await response.json();
        console.log("Received data:", data);

        if (data.access_token && data.refresh_token) {
          // 토큰 저장
          setCookie('accessToken', data.access_token, { path: '/' });
          setCookie('refreshToken', data.refresh_token, { path: '/' });

          console.log("Tokens saved to cookies");

          // 로그인 후 메인 페이지로 이동
          navigate('/loginmodal');
        } else {
          throw new Error('Tokens not received in response.');
        }

      } catch (error) {
        // 예상치 못한 오류가 발생한 경우
        console.error('An error occurred during the Google login redirection process:', error);
        setError('An error occurred during login. Please try again.');
      } finally {
        setLoading(false);  // 요청이 끝나면 로딩 상태 종료
      }
    } else {
      setError("Authorization code is missing from the URL.");
      console.error("Authorization code is missing from the URL.");
    }
  };

  useEffect(() => {
    console.log("Component mounted, invoking PostDate()...");
    PostDate();
  }, [code]);

  return (
    <div>
      {loading && <p>Loading...</p>}  {/* 로딩 표시 */}
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* 오류 표시 */}
    </div>
  );
}

export default GoogleLoginRedirection;
