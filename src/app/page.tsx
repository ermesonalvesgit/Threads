import { Home, Heart, PenSquare, User, Search } from "lucide-react";
import Navbar from "@/components/components-private/navbar";

export default function App() {
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
      <div className="max-w-5xl m-auto">
        <Navbar />
      </div>
    </div>
  );
}
