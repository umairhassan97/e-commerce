import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// API URLs File (URLs.ts)
export const API_BASE_URL = 'https://your-api-base-url';

export const API_ENDPOINTS = {
  // Define your API endpoints here
  login: '/login',
  register: '/register',
  getUser: '/user',
  // ... other endpoints
};

// Interceptor Code
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Adjust timeout as needed
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Add any custom logic for requests here
    // For example, adding authorization headers:
    // config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Handle successful responses here
    return response.data;
  },
  (error: AxiosError): Promise<never> => {
    // Handle error responses here
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 200-299.
      console.error('Error response:', error.response);
      // Handle specific error codes or messages
      if (error.response.status === 401) {
        // Handle unauthorized error
        // Redirect to login page or handle authentication logic
      } else if (error.response.status === 404) {
        // Handle not found error
        // Display a not found message or redirect
      } else {
        // Handle other error codes
        // Display a generic error message or handle specific error logic
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);   

      // Handle request timeout or network errors
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error setting up request:', error.message);   

      // Handle unexpected errors
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;