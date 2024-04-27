import ProfileDetails from "./_components/ProfileDetails";
import UserPostsGrid from "./_components/UserPostsGrid";

type Props = {};
export default function Profile({}: Props) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center max-w-[935px] sm:py-5">
        <ProfileDetails />
        <UserPostsGrid />
      </div>
    </div>
  );
}
