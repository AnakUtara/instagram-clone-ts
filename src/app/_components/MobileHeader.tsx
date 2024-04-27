import { FaPowerOff } from "react-icons/fa6";
import Logo from "./Logo";

type Props = {};
export default function MobileHeader({}: Props) {
  return (
    <header className="order-first border-b-2 flex justify-between items-center w-full p-2 sticky top-0 z-50 bg-white sm:hidden">
      <Logo className="text-3xl mb-0 p-2" />
      <button
        type="button"
        className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
      >
        <FaPowerOff className="size-8" />
        <span className="text-lg hidden lg:block">Log Out</span>
      </button>
    </header>
  );
}
