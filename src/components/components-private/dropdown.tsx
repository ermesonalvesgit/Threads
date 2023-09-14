import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignRight } from "lucide-react";

export function DropdownMenuItems() {
  return (
    <div className="cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="h-6 w-6 rounded">
          <AlignRight className="hover:text-zinc-50 dark:text-zinc-700 dark:hover:text-zinc-300 transition-all duration-300 ease-in-out"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-zinc-300 dark:bg-zinc-900 border-zinc-50 dark:border-zinc-800">
          <DropdownMenuCheckboxItem className="text-zinc-700 dark:text-zinc-300">
            Mudar aparência
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator className="h-[1px] bg-zinc-200 dark:bg-zinc-700" />
          <DropdownMenuCheckboxItem className="text-zinc-700 dark:text-zinc-300">
            Sobre
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator className="h-[1px] bg-zinc-200" />
          <DropdownMenuCheckboxItem className="text-zinc-700 dark:text-zinc-300">
            Relatar um problema
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator className="h-[1px] bg-zinc-200" />
          <DropdownMenuCheckboxItem className="text-zinc-700 dark:text-zinc-300">
            Sair
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
