import axios from "axios";
import { Cookies } from "react-cookie";
// import { getCookie, setCookie } from "../auth/cookie";

const axiosInstance = axios.create({
  baseURL: `http://ec2-43-201-90-146.ap-northeast-2.compute.amazonaws.com:8000`,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const cookies = new Cookies();
        const accessToken = cookies.get('accessToken');
        

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

// axiosInstance.interceptors.response.use(
//     response => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             try {
//                 const refreshToken = getCookie('refreshToken');
//                 const response = await axios.post('https://hyunwoo9930.store/api/auth/refresh', { refreshToken: refreshToken });
//                 const newAccessToken = response.data.accessToken;
//                 setCookie('accessToken', newAccessToken);

//                 originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//                 return axiosInstance(originalRequest);
//             } catch (refreshError) {
//                 console.log('refresh error:', refreshError);
//                 // Optional: Redirect to login page if refresh token is invalid
//             }
//         }

//         return Promise.reject(error);
//     }
// );

export default axiosInstance;