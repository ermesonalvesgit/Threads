import { AvatarDemo } from "@/components/components-private/avatarDemo";
import { ModalDialogPost } from "@/components/components-private/createPost";
import Navbar from "@/components/components-private/navbar";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 min-h-screen min-w-full">
      {/* Navbar */}
      <div className="max-w-5xl m-auto">
        <Navbar />
      </div>

      {/* Create New Post */}
      <div className="max-w-lg m-auto">
        <div className=" gap-2 py-4 px-4 items-center justify-between flex flex-1">
          <AvatarDemo />
          {/* Area Create */}
          <div className="cursor-pointer">
            <ModalDialogPost />
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}
