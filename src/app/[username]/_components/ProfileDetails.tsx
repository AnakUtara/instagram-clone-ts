"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import EditProfile from "@/app/[username]/_components/EditProfile";

type Props = {};
export default function ProfileDetails({}: Props) {
  const infoTabData = [
    { type: "posts", value: 10 },
    { type: "followers", value: 5 },
    { type: "following", value: 5 },
  ];
  return (
    <>
      <EditProfile />
      <div className="flex w-full justify-center items-center md:gap-10 gap-5 p-3 md:pt-0 ">
        <Image
          width={128}
          height={128}
          className="rounded-full aspect-square size-24 md:size-32 object-cover border-2 border-grey"
          src={"/next.svg"}
          alt={`username's avatar`}
        />
        <div className="flex justify-center flex-col gap-2 md:gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h5 className="text-lg">{"username"}</h5>
            <div className="flex gap-1">
              <button
                className="btn btn-xs sm:btn-sm"
                onClick={() => {
                  if (document) {
                    (
                      document.getElementById("edit-profile") as HTMLFormElement
                    ).showModal();
                  }
                }}
              >
                {true ? "Edit profile" : "Follow"}
              </button>
              <button className="btn btn-xs sm:btn-sm">
                {true ? "View archive" : "Message"}
              </button>
            </div>
          </div>
          <div className="hidden md:flex">
            {infoTabData.map((info, i) => (
              <p key={i} className="mr-10">
                <span className="font-bold">{info.value}</span> {info.type}
              </p>
            ))}
          </div>
          {/* Full Name */}
          <div>
            <p className="font-bold">{"Full Name"}</p>
            <p className="text-sm">
              {
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem at doloremque ab dicta cumque, minus laborum fugit dignissimos laboriosam iusto dolorum nihil delectus eos voluptate harum, expedita necessitatibus quidem qui?"
              }
            </p>
          </div>
          {false && (
            <div className={clsx("container mt-4 text-xs hidden md:block")}>
              <p>
                <span className="text-gray-500">Followed by</span>
                <span className="font-semibold">
                  {" "}
                  <Link href={"/username"}>friend1</Link>
                  {", "}
                  <Link href={"/username"}>friend2</Link>
                </span>
                <span className="text-gray-500">{` +${"3"} more`}</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center text-xs w-full justify-center gap-16 py-5 border-2 md:hidden">
        {infoTabData.map((info, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <p className="font-bold">{info.value}</p>
            <p className="text-gray-500">{info.type}</p>
          </div>
        ))}
      </div>
      <div className="divider my-0 hidden sm:flex" />
    </>
  );
}
