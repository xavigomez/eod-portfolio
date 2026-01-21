import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) {
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="text-muted-foreground border-muted-foreground bg-white cursor-pointer"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="" onClick={handleContentClick}>
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
}
