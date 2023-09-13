import { Home, Heart, PenSquare, User, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenuCheckboxes } from "@/app/dropdown/dropdown";

import Threads from "@/assets/threads.svg";

export default function Navbar() {
  const Menus = [
    {
      Icon: Home,
      Alt: "home",
      Route: "/",
    },
    {
      Icon: Search,
      Alt: "search",
      Route: "/search",
    },
    {
      Icon: PenSquare,
      Alt: "post",
      Route: "/post",
    },
    {
      Icon: Heart,
      Alt: "heart",
      Route: "/heart",
    },
    {
      Icon: User,
      Alt: "user",
      Route: "/user",
    },
  ];

  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 min-h-screen min-w-full">
      <nav className="flex justify-between px-4 py-4">
        <div className="flex justify-center text-center items-center text-zinc-600 hover:text-zinc-300">
          <Image src={Threads} alt="Logo Threads" className="w-7 h-7 " />
        </div>
        <ul className="flex gap-2">
          {Menus.map((menu) => (
            <li
              key={menu.Alt}
              className="cursor-pointer flex justify-center items-center h-12 w-12 rounded hover:bg-zinc-50 px-4 py-5 transition-all duration-300 ease-in-out"
            >
              <Link href={menu.Route}>
                <menu.Icon
                  size={20}
                  className="text-zinc-600 hover:text-zinc-300 transition-all duration-300 ease-in-out"
                ></menu.Icon>
              </Link>
            </li>
          ))}
        </ul>
        <DropdownMenuCheckboxes />
      </nav>
    </div>
  );
}
