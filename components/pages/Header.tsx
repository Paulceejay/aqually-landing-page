import Image from "next/image";
import Link from "next/link";
import Aqually from "../icons/Aqually";
import MagnifyingGlass from "../icons/MagnifyingGlass";
import ShoppingCart from "../icons/ShoppingCart";
import ShoppingCartUi from "../ui/ShoppingCartUi";
import NavBarContainer from "./NavbarContainer";

const Header = () => {
  return (
    <header className="flex justify-between w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto">
      {/* <div> */}
      <div className="w-[10%] xl:pt-3 lmd:pt-2">
        <Aqually className="xl:w-full w-11/12" />
        {/* <Image src="/images/Aqually.png" alt="LOGO" width={150} height={39} /> */}
      </div>
      <NavBarContainer />
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
      {/* </div> */}
    </header>
  );
};

export default Header;


// https://github.com/Paulceejay/aqually-landing-page.git