import Image from "next/image";
import ArrowRight from "../icons/ArrowRight";
import ShoppingCart from "../icons/ShoppingCart";
import Star from "../icons/Star";

const star = (
  <p className="flex lmd:gap-2 gap-1">
    <p className="flex mt-1">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </p>
    <small className="font-DmSans text-base font-normal text-graySecondaryColor">
      (45)
    </small>
  </p>
);

const products = [
  { src: "/images/product1.jpg", name: "Prawns", price: "N10,000", star: star },
  { src: "/images/product2.jpg", name: "Tuna", price: "N10,000", star: star },
  { src: "/images/product3.jpg", name: "Tilapia", price: "N10,000", star: star },
  { src: "/images/product4.jpg", name: "Catfish", price: "N10,000", star: star },
  { src: "/images/product5.jpg", name: "Salmon", price: "N10,000", star: star },
  { src: "/images/product6.jpg", name: "Crabs", price: "N10,000", star: star },
  { src: "/images/product7.jpg", name: "Mackerel", price: "N10,000", star: star },
  { src: "/images/product8.jpg", name: "Lobsters", price: "N10,000", star: star },
];

const Products = () => {
    return (
      <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-28 mt-20">
        <h1 className="font-DmSans font-medium text-center text-darkColor text-5xl">
          Products
        </h1>
        <div className="grid lmd:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 bg-productsBg lmd:mt-16 mt-12">
          {products.map((prod) => (
            <div key={prod.src} className="bg-productsBg p-3 shadow-product-shadow rounded-xl lmd:w-full w-11/12  mx-auto">
              <Image
                className="w-full xl:h-[260px] lmd:h-[210px] h-[260px] p-[2px]"
                src={prod.src}
                alt=""
                width={150}
                height={100}
              />
              {/* <p className="w-[250px] h-[250px] p-[2px] bg-product1-bg-img rounded-xl"></p> */}
              <div className="w-full flex justify-between font-DmSans text-xl text-darkColor my-5">
                <p className="font-medium">{prod.name}</p>
                <p className="font-bold">{prod.price}</p>
              </div>
              {star}
              <div className="w-full flex justify-between my-3">
                <p className="font-DmSans lmd:text-lg text-base font-normal text-darkColor">
                  5kg/portion
                </p>
                <ShoppingCart className="text-primaryColor" />
              </div>
            </div>
          ))}
        </div>

        <div className="font-Inter font-semibold text-base flex justify-center items-center text-darkColor gap-3 mt-12">
          <p>See all</p>
          <ArrowRight />
        </div>
      </section>
    );
}

export default Products

// Width
// Hug (292px)
// Height
// Hug (408px)
// Left
// 632px
// Radius
// 12px
// Padding
// 16px
// Gap
// 16px
// #FBFBFB
// 2
// X8
// Y4
// B120
// S0
// #1F1F1F
// 20%
// /* Frame 23 */


// /* Auto layout */

// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 16px;
// gap: 16px;

// width: 292px;
// height: 408px;

// background: #FBFBFB;
// /* 2 */

// box-shadow: 8px 4px 120px rgba(31, 31, 31, 0.2);
// border-radius: 12px;
