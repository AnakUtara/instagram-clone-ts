import Image from "next/image";
import Link from "next/link";

type Props = {};
export default function FriendSuggestions({}: Props) {
  return (
    <div className="hidden min-[1080px]:block p-3 ml-10">
      <div className="flex flex-row gap-3">
        <div>
          <Image
            width={40}
            height={40}
            className="inline-block size-10 rounded-full"
            src="/vercel.svg"
            alt="foto user"
          ></Image>
        </div>
        <div className="text-left mr-4">
          <h3 className="text-sm text-black font-bold">Cornelia Mustika</h3>
          <p className="text-sm">Cornelia Mustika</p>
        </div>
        <div className="ml-2">
          <Link className="text-sm text-blue-500" href="">
            Switch
          </Link>
        </div>
      </div>
      <div className=" flex flex-row text-sm font-semibold text-gray-400 gap-16 mt-3 ">
        <h3 className="text-left mb-4">Suggested for you </h3>
        <Link className="mr-3" href="">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {[...Array(5)].map((user, i) => (
          <div key={i} className=" flex flex-row gap-3 mb-2">
            <div>
              <Image
                width={40}
                height={40}
                className="inline-block size-10 rounded-full object-cover"
                src={"/next.svg"}
                alt="foto user"
              />
            </div>
            <div className="text-left text-sm mr-5">
              <h3 className="text-black font-bold">{"username"}</h3>
              <p>Suggested for you</p>
            </div>
            <div className=" mt-3">
              <Link className="text-sm text-blue-500" href="">
                Follow
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
