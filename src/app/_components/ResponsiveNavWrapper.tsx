"use client";
import MainNav from "./MainNav";
import MobileHeader from "./MobileHeader";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = { children: React.ReactNode };
export default function ResponsiveNavWrapper({ children }: Props) {
  const pathname: string = usePathname();
  const isAuthPath: boolean = pathname === "/login" || pathname === "/register";
  const isUserPath: boolean = pathname === "/" || pathname === "/username";
  return (
    <main
      className={clsx(
        isAuthPath ? "grid place-items-center" : "flex flex-col sm:flex-row",
      )}
    >
      {isUserPath && <MobileHeader isHome={pathname === "/" ? true : false} />}
      {children}
      {isUserPath && <MainNav />}
    </main>
  );
}
