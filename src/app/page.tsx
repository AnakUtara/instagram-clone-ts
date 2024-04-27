import Image from "next/image";
import Card from "./_components/Card";
import FriendSuggestions from "./_components/FriendSuggestions";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col max-w-[470px]">
        {[...Array(30)].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <FriendSuggestions />
    </div>
  );
}
