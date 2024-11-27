import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../../auth/axiosInstance";
import Loading from "../../component/Loading"

function GoogleLoginRedirection() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');  // URL에서 authorization code 추출

  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PostDate = async () => {
    try {
      if (!code) {
        throw new Error("Authorization code is missing from the URL.");
      }

      setLoading(true);
      setError(null);

      console.log("Sending GET request with authorization code:", code);

      const response = await axiosInstance.get(`/api/accounts/google/callback/?code=${code}`);
      const data = response.data;

      if (data.access_token && data.refresh_token) {
        setCookie('accessToken', data.access_token, { path: '/' });
        setCookie('refreshToken', data.refresh_token, { path: '/' });

        console.log("Tokens saved to cookies");
        setTimeout(() => {
          console.log("[DEBUG] Timeout complete, navigating to /agree.");
          setLoading(false); // 로딩 상태 해제
          navigate('/agree'); // 페이지 이동
        }, 1500);
      } else {
        throw new Error('Tokens not received in response.');
      }

    } catch (error) {
      if (error.response) {
        console.error(`Server responded with an error: ${error.response.status} ${error.response.data}`);
        setError(`Server error: ${error.response.status}`);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
        setError('Network error: Unable to reach the server.');
      } else {
        console.error('Error during API call:', error.message);
        setError('An unexpected error occurred.');
      }
    }
  };

  useEffect(() => {
    if (code) {
      console.log("Component mounted, invoking PostDate()...");
      PostDate();
    }
  }, [code]);

  return (
    <div>
      {loading && <Loading />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default GoogleLoginRedirection;
