import Link from "next/link";
import MagnifyingGlass from "../icons/MagnifyingGlass";
import ShoppingCartUi from "../ui/ShoppingCartUi";

const NavBarContainer = () => {
    return (
      <div className="lmd:hidden block w-full pb-10">
          <ul className="flex flex-col justify-center items-center gap-10 font-Inter font-normal md:text-base text-sm text-darkColor">
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
          <div className="flex justify-center items-center gap-5 mt-5 w-full">
            <ShoppingCartUi className="" />
            <MagnifyingGlass className="" />
          </div>
        </div>
    );
}

export default NavBarContainer