import { Rochester } from "next/font/google";
import clsx from "clsx";

const rochester = Rochester({ weight: "400", subsets: ["latin"] });

type Props = { className: string };
export default function Logo({ className = "text-3xl" }: Props) {
  return <h2 className={clsx(rochester.className, className)}>Nistagram</h2>;
}
