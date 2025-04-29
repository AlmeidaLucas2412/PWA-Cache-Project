import Link from "next/link";
import { Button } from "../ui/button";
import { Home, Store } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-between w-full">
      <Button asChild variant="ghost">
        <Link href="/">
          <Home className="size-6" />
        </Link>
      </Button>
      <h1 className="text-2xl font-bold">
        AWP <span className="text-primary-foreground/70">STORE</span>
      </h1>
      <Button asChild variant="ghost">
        <Link href="/products">
          <Store className="size-6" />
        </Link>
      </Button>
    </header>
  );
};
