"use client";
import {
  BiDotsHorizontalRounded,
  BiSolidHeart,
  BiMessageRounded,
  BiPaperPlane,
  BiBookmark,
  BiHeart,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../_lib/definitions";
import { useState } from "react";

type Props = {};
export default function Card({}: Props) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="card max-w-[470px] bg-base-100 border-b-2 rounded-none mb-3">
      <div className="flex justify-between items-center py-4 px-1">
        <div className="flex items-center gap-x-4">
          <Link href={"/username"} className="avatar items-center">
            <div className="w-8 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
              <Image width={32} height={32} src={"/next.svg"} alt={` avatar`} />
            </div>
          </Link>
          <Link href={"/username"} className="font-bold text-sm">
            Username
          </Link>
        </div>
        <BiDotsHorizontalRounded className="size-7" />
      </div>
      <figure>
        <Image
          className="rounded-md w-full"
          width={470}
          height={470}
          src={"/vsco.page_645e7a320f6e8271bc000001.jpg"}
          alt={"caption"}
        />
      </figure>
      <div className="px-4 sm:p-0">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-x-3">
            <button
              type="button"
              onClick={() => {
                setIsLiked(!isLiked);
              }}
            >
              {isLiked ? (
                <BiSolidHeart className="size-7 fill-red-500" />
              ) : (
                <BiHeart className="size-7" />
              )}
            </button>
            <BiMessageRounded className="size-7" />
            <BiPaperPlane className="size-7" />
          </div>
          <BiBookmark className="size-7" />
        </div>
        <p className="text-sm">
          <Link href="/username" className="font-bold">
            Username
          </Link>{" "}
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo
            facere earum a iusto tempora ea modi aspernatur molestias cumque.
            Quas officiis non enim laboriosam nemo ullam perferendis animi cum.
          </span>
        </p>
        <p className="text-neutral-500 no-underline cursor-pointer text-sm font-medium py-2">
          View all {"10"} comments..
        </p>
        <form className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="outline-none focus:outline-none text-sm w-full"
          />
          <button className="btn btn-link btn-secondary p-0 no-underline">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
