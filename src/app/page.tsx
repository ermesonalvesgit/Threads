import { AvatarDemo } from "@/components/components-private/avatar-demo";
import { TextareaWithButton } from "@/components/components-private/button-post";
import Navbar from "@/components/components-private/navbar";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 min-h-screen min-w-full">
      {/* Navbar */}
      <div className="max-w-5xl m-auto">
        <Navbar />
      </div>
      {/* Create New Post */}
      <div className="max-w-lg m-auto gap-2 py-4 px-4 flex items-center">
        <AvatarDemo />
        {/* Area Create */}
        <div className="cursor-pointer">

        </div>
      </div>
    </div>
  );
}
