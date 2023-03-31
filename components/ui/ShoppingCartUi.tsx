import ShoppingCart from "../icons/ShoppingCart";

const ShoppingCartUi = (props: any) => {
  return (
    <div
      className={`flex xl:gap-5 lg:gap-3 gap-2 py-3 xl:px-6 xs:px-4 px-2 bg-primaryColor text-white rounded-md ${props.className}`}
    >
      <p className="font-Inter font-bold xl:text-base md:text-sm text-xs md:pt-0 pt-0.5">
        Go To Cart
      </p>
      <ShoppingCart />
    </div>
  );
};

export default ShoppingCartUi;