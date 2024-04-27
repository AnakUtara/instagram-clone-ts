"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};
export default function FriendSuggestions({}: Props) {
  const [seeAllSuggestions, setSeeAllSuggestions] = useState(false);
  return (
    <div className="hidden min-[1080px]:block p-3 ml-10 w-[320px]">
      <div className="flex flex-row gap-3">
        <Link href={"/username"} className="avatar items-center">
          <div className="size-8 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
            <Image
              width={32}
              height={32}
              src={"/vercel.svg"}
              alt={"foto user"}
            />
          </div>
        </Link>
        <div className="mr-4">
          <Link href={"/username"} className="text-sm text-black font-bold">
            username
          </Link>
          <p className="text-sm">Full Name</p>
        </div>
      </div>
      <div className=" flex justify-between text-sm font-semibold text-gray-400 my-4">
        <h3>Suggested for you</h3>
        <button
          type="button"
          className="text-primary p-0 border-0"
          onClick={() => setSeeAllSuggestions(!seeAllSuggestions)}
        >
          See All
        </button>
      </div>
      <div
        className={clsx("flex flex-col gap-2", !seeAllSuggestions && "hidden")}
      >
        {[...Array(5)].map((user, i) => (
          <div key={i} className=" flex justify-between mb-2">
            <div className="flex gap-3">
              <Link href={"/username"} className="avatar items-center">
                <div className="size-8 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                  <Image
                    width={32}
                    height={32}
                    src="/next.svg"
                    alt="foto friends"
                  />
                </div>
              </Link>
              <div className="text-left text-sm mr-5">
                <Link href={"/username"} className="text-black font-bold">
                  {"username"}
                </Link>
                <p>Suggested for you</p>
              </div>
            </div>
            <button type="button" className="mt-3 text-sm text-blue-500">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
