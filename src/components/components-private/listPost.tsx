import { Heart, MessageCircle, Repeat2, Navigation, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ListPost() {
  let idKey = "";
  const chars =
    "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]";

  const data = "5:57";

  //Generate ID
  for (let index = 0; index < 10; index++) {
    const randomID = Math.floor(Math.random() * chars.length);
    idKey += randomID;
  }

  const post = [
    {
      Name: "smakrAll",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Id: idKey,
      Date: data,
    },
    {
      Name: "Phelps",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Id: idKey,
      Date: data,
    },
    {
      Name: "Maria",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Id: idKey,
      Date: data,
    },
    {
      Name: "Parker",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Id: idKey,
      Date: data,
    },
  ];

  return (
    <div>
      <ul className="space-y-4">
        {post.map((post) => (
          <li
            key={post.Id}
            className="justify-center border border-zinc-400 dark:border-zinc-700 rounded-md p-4"
          >
            <div className="flex justify-between self-center mb-3">
              <div className="flex justify-center text-center gap-2 items-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-bold text-base text-center flex items-center">
                  {post.Name}
                </p>
              </div>
              <div className="flex gap-3 justify-center text-center">
              <p className="font-normal text-xs text-right">{post.Date}</p>
              <MoreHorizontal />
              </div>
            </div>
            <p className="font-normal text-xs text-left">{post.Description}</p>
            {/* Icons Actiosn */}
            <div className="flex gap-3 items-center mt-3 mb-3">
              <Heart />
              <MessageCircle />
              <Repeat2 />
              <Navigation />
            </div>
            <span className="font-normal text-xs space-x-3 space-y-3">View Like</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
