import ArrowRight from "../icons/ArrowRight";
import ShoppingCart from "../icons/ShoppingCart";

const ExploreProuct = () => {
    return (
      <div className="flex xl:gap-5 lg:gap-3 gap-2 lg:py-[14px] py-3 xl:px-6 xs:px-4 px-2 bg-white rounded-md text-primaryColor border border-primaryColor m-1">
        <p className="font-Inter font-bold xl:text-base md:text-sm text-xs md:pt-0 pt-0.5">
          Explore Products
        </p>
        <ArrowRight />
      </div>
    );
}

export default ExploreProuct