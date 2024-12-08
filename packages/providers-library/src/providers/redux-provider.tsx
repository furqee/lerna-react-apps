import { Store, UnknownAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export default function ReduxProvider({
  store,
  children,
}: {
  store: Store<unknown, UnknownAction, unknown>;
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
