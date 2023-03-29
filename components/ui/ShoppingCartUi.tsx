import ShoppingCart from "../icons/ShoppingCart";

const ShoppingCartUi = () => {
    return (
      <div className="flex xl:gap-5 lg:gap-3 gap-2 py-3 xl:px-6 md:px-4 bg-primaryColor text-white rounded-md">
        <p className="font-Inter font-bold xl:text-base lg:text-sm">Go To Cart</p>
        <ShoppingCart />
      </div>
    );
}

export default ShoppingCartUi