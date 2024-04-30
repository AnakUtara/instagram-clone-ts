"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getValidAuthTokens, setRouteCookie } from "../_lib/redux/cookies";
import { deleteCookie, getCookie } from "cookies-next";
import { useSelector } from "react-redux";
import { TUser } from "../_models/user.models";

export default function RouteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  const auth = useSelector((state: { auth: TUser }) => state.auth);
  const guestOnlyPaths = ["/login", "/register"];
  const needLoginPaths = ["/", "/profile"];
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pathname = usePathname();

  useEffect(() => {
    const { data } = getValidAuthTokens();
    console.log(
      guestOnlyPaths.find((path) => path == pathname),
      data,
    );

    if (guestOnlyPaths.find((path) => path == pathname) && data) {
      const path = getCookie("path");
      if (path) {
        push(path);
        deleteCookie("path");
      } else push("/");
    } else if (
      needLoginPaths.find((path) => {
        if (path != "/" && pathname.includes(path)) return path;
        else if (pathname == path) return path;
      }) &&
      !data
    ) {
      setRouteCookie(pathname);
      push("/login");
    } else {
      setIsLoading(false);
    }
  }, [pathname, auth]);

  if (isLoading) return <>....loading</>;
  return children;
}
