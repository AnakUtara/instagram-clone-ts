"use client";
import Logo from "./Logo";
import Link from "next/link";
import { BiHome, BiLogoInstagram, BiSolidHome } from "react-icons/bi";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaRegSquarePlus, FaPowerOff } from "react-icons/fa6";

type Props = {};
export default function MainNav({}: Props) {
  const pathname = usePathname();
  const hrefs = ["/", "/username"];
  return (
    <nav className="sticky sm:h-screen p-2 sm:py-5 xl:p-5 bg-white bottom-0 flex justify-between items-center w-full order-last sm:order-first sm:flex-col sm:items-start sm:w-fit xl:min-w-[270px] sm:top-0 sm:left-0 border-2">
      <div id="logo">
        <Link href={"/"}>
          <Logo className={"hidden xl:block text-3xl"} />
          <BiLogoInstagram className="size-11 hidden sm:block xl:hidden" />
        </Link>
      </div>
      <div className="flex justify-between sm:justify-normal sm:flex-col sm:gap-5 w-full">
        <Link
          className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
          href={"/"}
        >
          {hrefs[0] === pathname ? (
            <BiSolidHome className={"size-8"} />
          ) : (
            <BiHome className="size-8" />
          )}
          <span
            className={clsx(
              "text-lg hidden xl:block",
              hrefs[0] === pathname && "font-bold",
            )}
          >
            Home
          </span>
        </Link>
        <button
          className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
          onClick={() => {
            document.getElementById("createPost")?.showModal();
          }}
        >
          <FaRegSquarePlus className="size-8" />
          <span className="text-lg hidden xl:block">Create</span>
        </button>
        <Link
          className="flex items-center gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
          href={hrefs[1]}
        >
          {/* {!user.username ? (
          <span className="loading loading-spinner loading-sm bg-neutral"></span>
        ) : (
          <div
            className={clsx(
              "avatar online",
              !user.profile.avatar && "placeholder",
            )}
          >
            {user.profile ? (
              <div className="size-9 rounded-full">
                <Image
                  width={36}
                  height={36}
                  src={user.profile.avatar}
                  alt={`${user.username}'s avatar`}
                />
              </div>
            ) : (
              <div className="bg-neutral text-neutral-content rounded-full size-9">
                <span className="text-xl">
                  {user.username[0].toUpperCase()}
                </span>
              </div>
            )}
          </div>
        )}
        <span
          className={clsx(
            "text-lg hidden xl:block",
            hrefs[1] === pathname && "font-bold",
          )}
        > */}
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>SY</span>
            </div>
          </div>
          <span
            className={clsx(
              "text-lg hidden xl:block",
              hrefs[1] === pathname && "font-bold",
            )}
          >
            Profile
          </span>
          {/* </span> */}
        </Link>
      </div>
      <Link
        className="sm:flex items-center hidden sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
        href={"/login"}
      >
        <FaPowerOff className="size-7" />
        <span className={clsx("text-lg hidden xl:block")}>Log Out</span>
      </Link>
    </nav>
  );
}
