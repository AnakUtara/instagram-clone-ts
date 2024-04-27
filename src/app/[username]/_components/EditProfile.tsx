"use client";
import Link from "next/link";
import ModalProvider from "../../_components/provider/ModalProvider";
import Image from "next/image";
import ChangeAvatar from "./ChangeAvatar";

type Props = {};
export default function EditProfile({}: Props) {
  return (
    <>
      <ChangeAvatar />
      <ModalProvider id="edit-profile">
        <form className="mb-5">
          <h1 className="text-lg font-bold mb-2">Edit Profile</h1>
          <div className="flex flex-col sm:flex-row  gap-5">
            <div className="flex gap-4">
              <Image
                width={40}
                height={40}
                className="inline-block size-10 border-2 rounded-full"
                src={"/next.svg"}
                alt="foto user"
              />
              <div>
                <h3 className="text-sm text-black font-bold">Username</h3>
                <p className="text-sm">Full Name</p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm text-white"
              onClick={() => {
                if (document) {
                  (
                    document.getElementById("change-avatar") as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              Change photo
            </button>
          </div>
        </form>
        <div className="mb-5 w-full">
          <h1 className="text-lg font-bold mb-2">Website</h1>
          <input
            placeholder="Website"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-5 w-full">
          <h1 className="text-xl font-bold mb-2">Bio</h1>
          <input placeholder="Bio" className="input input-bordered w-full" />
        </div>
        <div className="mb-5 w-full">
          <h1 className="text-lg font-bold mb-2">Gender</h1>
          <select className="select select-bordered">
            <option>Male</option>
            <option>Female</option>
          </select>
          <p className="text-xs mt-2">
            This won&apos;t be part of your public profile.
          </p>
        </div>
        <div className="mb-5 w-full">
          <h1 className="text-lg font-bold">
            Show account suggestions on profiles
          </h1>
          <div className="form-control max-w-96">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="toggle toggle-primary mr-5"
                checked
              />
              <span className="label-text">
                Choose whether people can see similar account suggestions on
                your profile, and whether your account can be suggested on other
                profiles.
              </span>
            </label>
          </div>
        </div>
        <button className="btn btn-primary btn-block text-white">Submit</button>
      </ModalProvider>
    </>
  );
}
