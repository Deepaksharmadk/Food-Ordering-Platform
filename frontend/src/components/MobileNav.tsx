import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>//TODO</SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          //TODO
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
