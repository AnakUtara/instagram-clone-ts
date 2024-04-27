import { Rochester } from "next/font/google";
import clsx from "clsx";

const rochester = Rochester({ weight: "400", subsets: ["latin"] });

type Props = {};
export default function Logo({}: Props) {
  return <h2 className={clsx(rochester.className, "text-3xl")}>Nistagram</h2>;
}
