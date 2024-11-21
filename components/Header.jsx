"use client";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <HeaderLogo />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ModeToggle />
        </div>

        <div className="xl:hidden flex gap-4">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
