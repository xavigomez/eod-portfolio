import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "~/components/ui/sheet";

interface Props {
  children: React.ReactNode;
}

export function MobileMenuSheet({ children }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="text-muted-foreground border-muted-foreground bg-white cursor-pointer"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
}
