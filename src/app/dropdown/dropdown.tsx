import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignRight } from "lucide-react";

export function DropdownMenuCheckboxes() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AlignRight
          size={20}
          className="px-4 py-5 rounded-sm flex justify-center items-center text-zinc-400"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-zinc-900 border-zinc-800">
        <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-zinc-600">
          Mudar aparência
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator className="h-[1px] bg-zinc-700" />
        <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-zinc-600">
          Sobre
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator className="h-[1px] bg-zinc-700" />
        <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-zinc-600">
          Relatar um problema
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator className="h-[1px] bg-zinc-700" />
        <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-zinc-600">
          Sair
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
