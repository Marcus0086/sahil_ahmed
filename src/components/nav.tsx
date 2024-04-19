"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Demo 1" },
  { href: "/demo2", label: "Demo 2" },
  { href: "/demo3", label: "Demo 3" },
];
const Nav = () => {
  const path = usePathname();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="">Sahil Ahmed</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className={cn(
            "text-sm font-medium",
            "hover:underline underline-offset-4",
            path === "/" && "underline"
          )}
          href="/"
        >
          Demo 1
        </Link>
        <Link
          className={cn(
            "text-sm font-medium hover:underline underline-offset-4",
            path === "/demo2" && "underline"
          )}
          href="/demo2"
        >
          Demo 2
        </Link>
        <Link
          className={cn(
            "text-sm font-medium hover:underline underline-offset-4",
            path === "/demo3" && "underline"
          )}
          href="/demo3"
        >
          Demo 3
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
