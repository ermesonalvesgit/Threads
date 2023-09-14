import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithButton() {
    return (
      <div className="w-full gap-2 flex">
        <Textarea placeholder="" />
        <Button>Post</Button>
      </div>
    )
  }