import { Home, Heart, PenSquare, User, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenuCheckboxes } from "@/components/components-private/dropdown";

import Threads from "@/assets/threads.svg";
export default function Navbar() {

  const Menus = [
    {
      Icon: Home,
      Alt: "home",
      Route: "/",
      Title: "Pagina pricipal",
    },
    {
      Icon: Search,
      Alt: "search",
      Route: "/search",
      Title: "Pesquisar",
    },
    {
      Icon: PenSquare,
      Alt: "post",
      Route: "/post",
      Title: "Criar novo post",
    },
    {
      Icon: Heart,
      Alt: "heart",
      Route: "/heart",
      Title: "Curtidas",
    },
    {
      Icon: User,
      Alt: "user",
      Route: "/user",
      Title: "Seu perfil",
    },
  ];

  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 h-16 min-w-full">
      <nav className="flex justify-between px-4 py-4">
        <div className="flex justify-center text-center items-center text-zinc-600 hover:text-zinc-300">
          <Image src={Threads} alt="Logo Threads" className="w-7 h-7 " />
        </div>
        <ul className="flex gap-2">
          {Menus.map((menu) => (
            <li
              key={menu.Alt}
              className="cursor-pointer flex justify-center items-center h-12 w-12 rounded hover:bg-zinc-50 dark:hover:bg-zinc-700 px-4 py-5 transition-all duration-300 ease-in-out"
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
