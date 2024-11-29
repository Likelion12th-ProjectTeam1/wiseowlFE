import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../../auth/axiosInstance";
import Loading from "../../component/Loading";

function GoogleLoginRedirection() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code"); // URL에서 authorization code 추출

  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PostData = async () => {
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
        setCookie("accessToken", data.access_token, { path: "/" });
        setCookie("refreshToken", data.refresh_token, { path: "/" });

        console.log("Tokens saved to cookies");

        // Add setTimeout for delayed navigation
        setTimeout(() => {
          console.log("[DEBUG] Timeout complete, navigating based on origin_user.");
          setLoading(false); // 로딩 상태 해제

          if (data.origin_user) {
            console.log("Existing user detected. Navigating to /main.");
            navigate("/main");
          } else {
            console.log("New user detected. Navigating to /agree.");
            navigate("/agree");
          }
        }, 1000); // 1초 지연
      } else {
        throw new Error("Tokens not received in response.");
      }
    } catch (error) {
      if (error.response) {
        console.error(`Server responded with an error: ${error.response.status} ${error.response.data}`);
        setError(`Server error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
        setError("Network error: Unable to reach the server.");
      } else {
        console.error("Error during API call:", error.message);
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  useEffect(() => {
    if (code) {
      console.log("Component mounted, invoking PostData()...");
      PostData();
    }
  }, [code]);

  return (
    <div>
      {loading && <Loading />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default GoogleLoginRedirection;
