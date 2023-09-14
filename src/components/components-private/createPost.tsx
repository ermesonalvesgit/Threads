"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ModalDialogPost() {
  const { toast } = useToast();

  return (
    <div className="w-full gap-2 flex">
      <Dialog>
        <DialogTrigger className="px-5 py-2 rounded border border-zinc-700 dark:hover:border-zinc-600 transition-all duration-300 ease-in-out">Post</DialogTrigger>
        <DialogContent className="flex flex-1 text-center gap-2 items-center">
          <Textarea placeholder="Digite seu novo post" />
          <Button
            className="flex p-4 border border-zinc-400 dark:border-zinc-700 px-5 py-4"
            onClick={() => {
              toast({
                title: "Novo post criado",
                description: "Friday, February 10, 2023 at 5:57 PM",
              });
            }}
          >
            Post
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
