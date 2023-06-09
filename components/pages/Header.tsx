import Link from "next/link";
import Aqually from "../icons/Aqually";
import MagnifyingGlass from "../icons/MagnifyingGlass";
import ShoppingCartUi from "../ui/ShoppingCartUi";
import NavBarContainer from "./NavbarContainer";
import NavBar from "../icons/NavBar";
import { useState } from "react";

const Header = () => {
  const [activeNavBar, setActiveNavBar] = useState(false);

  const navBarHandler = () => {
    setActiveNavBar(prev => !prev)
  }

  return (
    <header className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto bg-white lmd:relative fixed left-0 right-0 top-0 z-20 lmd:py-0">
      <div className="flex justify-between">
        <div className="lg:w-[10%] sm:w-[15%] w-[20%] xl:pt-3">
          <Aqually className="xl:w-full w-11/12" />
        </div>
        <NavBar onClick={navBarHandler} className="lmd:hidden block" />
        <div className="lmd:flex xl:gap-28 gap-10 hidden">
          <ul className="flex xl:gap-14 gap-5 font-Inter font-normal xl:text-base text-sm text-darkColor py-3">
            <li className="text-primaryColor font-medium">
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/">PRODUCT</Link>
            </li>
            <li>
              <Link href="/">RECIPES</Link>
            </li>
            <li>
              <Link href="/">BLOG</Link>
            </li>
            <li>
              <Link href="/">CONTACT</Link>
            </li>
          </ul>
          <div className="flex xl:gap-8 gap-5">
            <ShoppingCartUi />
            <MagnifyingGlass className="mt-3" />
          </div>
        </div>
      </div>
      {activeNavBar && <NavBarContainer />}
    </header>
  );
};

export default Header;


// https://github.com/Paulceejay/aqually-landing-page.git