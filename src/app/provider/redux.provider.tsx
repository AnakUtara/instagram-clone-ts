"use client";
import { Provider } from "react-redux";
import { store } from "../_lib/redux/store";
import AuthProvider from "./auth.provider";
import RouteProvider from "./route.provider";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouteProvider>{children}</RouteProvider>
      </AuthProvider>
    </Provider>
  );
}
