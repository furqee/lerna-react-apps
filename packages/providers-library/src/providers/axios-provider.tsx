import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Context for the Axios instance
const AxiosContext = createContext<AxiosInstance | null>(null);

// Type for the provider's props
type AxiosProviderProps = {
  config: AxiosRequestConfig;
  children: ReactNode;
};

// AxiosProvider component
export default function AxiosProvider({
  config,
  children,
}: AxiosProviderProps) {
  // Create a single Axios instance for the provider
  const axiosInstance = axios.create(config);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}

// Hook to access the Axios instance
export function useAxios(): AxiosInstance {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
}
