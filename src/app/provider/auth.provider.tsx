"use client";
import { useEffect } from "react";
import { getValidAuthTokens } from "../_lib/redux/cookies";
import { keepLogin } from "../_lib/redux/middleware/auth.middleware";
import { useAppDispatch } from "../hooks";
import { TUser } from "../_models/user.models";
export default function AuthProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const { data } = getValidAuthTokens();
  const fetchUser = async (storage: TUser) =>
    await dispatch(keepLogin(storage));
  useEffect(() => {
    if (data) fetchUser(data);
  }, [data]);
  return children;
}
