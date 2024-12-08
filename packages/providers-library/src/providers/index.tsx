import { QueryClient } from "@tanstack/react-query";
import ReactQueryProvider from "./react-query-provider";
import ReduxProvider from "./redux-provider";
import AxiosProvider from "./axios-provider";
import { Store, UnknownAction } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";

type ProviderProps = {
  reactQueryClient: QueryClient;
  reduxStore?: Store<unknown, UnknownAction, unknown>;
  axiosConfig?: AxiosRequestConfig; // Adjust based on your Axios setup
  children: React.ReactNode;
};

type ConditionalProviderProps = {
  isEnabled: boolean;
  ProviderComponent: React.ComponentType<any>;
  providerProps: Record<
    string,
    | undefined
    | AxiosRequestConfig
    | Store<unknown, UnknownAction, unknown>
    | QueryClient
  >;
  children: React.ReactNode;
};

// A generic conditional wrapper for providers
function ConditionalProvider({
  isEnabled,
  ProviderComponent,
  providerProps,
  children,
}: ConditionalProviderProps) {
  if (!isEnabled) {
    return <>{children}</>;
  }
  return <ProviderComponent {...providerProps}>{children}</ProviderComponent>;
}

export default function Providers({
  reactQueryClient,
  reduxStore,
  axiosConfig,
  children,
}: ProviderProps) {
  return (
    <ConditionalProvider
      isEnabled={!!reactQueryClient}
      ProviderComponent={ReactQueryProvider}
      providerProps={{ client: reactQueryClient }}
    >
      <ConditionalProvider
        isEnabled={!!reduxStore}
        ProviderComponent={ReduxProvider}
        providerProps={{ store: reduxStore }}
      >
        <ConditionalProvider
          isEnabled={!!axiosConfig}
          ProviderComponent={AxiosProvider}
          providerProps={{ config: axiosConfig }}
        >
          {children}
        </ConditionalProvider>
      </ConditionalProvider>
    </ConditionalProvider>
  );
}
