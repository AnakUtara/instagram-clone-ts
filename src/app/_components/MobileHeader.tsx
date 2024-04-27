import { IoIosArrowBack } from "react-icons/io";
import { FaPowerOff, FaInstagram } from "react-icons/fa6";
import Logo from "./Logo";
import Link from "next/link";
import clsx from "clsx";

type Props = { isHome: boolean };
export default function MobileHeader({ isHome = true }: Props) {
  return (
    <header className="order-first border-b-2 flex justify-between items-center w-full p-2 sticky top-0 z-50 bg-white sm:hidden">
      {isHome ? (
        <>
          <Logo className="text-3xl mb-0 p-2" />
          <Link
            href={"/login"}
            className="flex items-center hover:bg-gray-300 p-2 rounded-lg"
          >
            <FaPowerOff className="size-8" />
            <span className="text-lg hidden lg:block">Log Out</span>
          </Link>
        </>
      ) : (
        <>
          <Link
            href={"/"}
            className="text-2xl hover:bg-gray-300 rounded-lg p-2"
          >
            <IoIosArrowBack />
          </Link>
          <p className={clsx("font-semibold text-md flex items-center gap-1")}>
            {"username"}
          </p>
          <p className="text-2xl">
            <FaInstagram />
          </p>
        </>
      )}
    </header>
  );
}
