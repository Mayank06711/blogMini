import { useEffect } from "react";
import useAuth from "./useAuth.js";
import { axiosPrivate } from "../../api/axios.js";
import useRefreshToken from "./refreshToken.js";

const useAxiosPrivate = ()=>{
        // Get the refresh token function
    const refresh = useRefreshToken();
    // Get the authentication state
    const {auth} = useAuth(); // if we have logged in we will have this
    useEffect(() => {
             // Set up request interceptor
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                 // This function is called before the request is sent
                if (!config.headers['Authorization']) {
                    // If not, add Authorization header with the access token
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                // Return modified config object
                return config;
            }, 
            // This function handles request errors
            (error) => Promise.reject(error)   
        );
              // Set up response interceptor
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
              // This function handles response errors
            async (error) => {
                const prevRequest = error?.config;
                 // If the response status is 403 (Forbidden) and the request hasn't been retried yet
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                      // Get a new access token using the refresh token
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                     // Retry the original request with the updated headers
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );
             // Clean up interceptors when the component unmounts
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])   // Run effect when auth or refresh token changes
      // Return the axios instance with interceptors set up
    return axiosPrivate;
}

export default useAxiosPrivate;












/*
You should use the useAxiosPrivate function when you want to make HTTP requests to private endpoints that require authentication using JWT (JSON Web Tokens) or a similar mechanism. Here are some scenarios where you might want to use this function:

Authenticated API Requests: When you need to make API requests to endpoints that require the user to be authenticated. This is common in web applications where certain features or data are only accessible to logged-in users.
Token-Based Authentication: When your backend server uses token-based authentication (such as JWT) and requires the access token to be included in the request headers for authorization.
Handling Token Expiration: When you need to handle cases where the access token expires. In such cases, the useAxiosPrivate function automatically refreshes the access token using the refresh token and retries the original request with the new token.
Efficient Token Management: When you want to manage token-related logic in a centralized and reusable manner across your application. The useAxiosPrivate hook encapsulates the logic for adding the access token to outgoing requests and handling token expiration in a single place.
Intercepting Responses: When you need to intercept responses from the server for specific status codes (e.g., 403 Forbidden) and perform certain actions, such as refreshing the access token and retrying the request.
Overall, useAxiosPrivate provides a convenient way to handle authentication and authorization for private API endpoints while abstracting away the complexity of token management and request/response interception.
*/