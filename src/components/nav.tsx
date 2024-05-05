"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Nav = () => {
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm rounded-b-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link className="text-white font-bold text-2xl" href="/">
          Summit Media
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn("text-white font-mediu", path === href ? "" : "")}
            >
              <Button
                variant={"ghost"}
                className="px-4 py-2 dark:hover:text-gray-300 hover:text-gray-800 text-sm hover:text-base transition-all ease-in-out delay-75"
              >
                {label}
              </Button>
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-white focus:outline-none">
          <HamburgerMenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
