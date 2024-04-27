import Image from "next/image";

type Props = {};
export default function UserPostsGrid({}: Props) {
  return (
    <div className="pt-2 flex justify-center">
      <div className="grid grid-cols-3 gap-1">
        {true ? (
          [...Array(18)].map((post, i) => (
            <div key={i}>
              <Image
                width={480}
                height={480}
                src={"/vsco.page_645e7a320f6e8271bc000001.jpg"}
                alt={"caption"}
                className="aspect-square object-cover cursor-pointer"
              />
            </div>
          ))
        ) : (
          <div className="mt-10 col-span-3 flex items-center justify-center">
            <p className="text-center text-2xl text-gray-500">No Posts Yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
