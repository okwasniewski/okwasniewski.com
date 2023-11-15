import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import MenuItem from "./MenuItem";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useWindowScroll } from "react-use";
const Header = () => {
  const { y } = useWindowScroll();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`w-full px-4 py-5 fixed top-0 z-50  ${
          y > 100
            ? "bg-white/30 supports-backdrop-blur:bg-white/60 backdrop-blur shadow-sm"
            : ""
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          <Link href="/">
            <p className="z-50 text-xl font-bold cursor-pointer text-gray-800">
              okwasniewski
            </p>
          </Link>
          <nav className="hidden md:block">
            <MenuItem href="/#about" text="About me" />
            <MenuItem href="/portfolio" text="Portfolio" />
            <MenuItem href="/blog" text="Blog" />
            <MenuItem href="/contact" text="Contact" />
          </nav>
          <FaBars
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-blue-300 z-50 w-8 h-8 cursor-pointer md:hidden"
          />
        </div>
      </header>
      <BurgerMenu isOpen={isOpen} />
      <div className="mb-8 h-10" />
    </>
  );
};

export default Header;
