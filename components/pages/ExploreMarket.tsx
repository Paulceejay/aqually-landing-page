import Image from "next/image";
import ExploreProuct from "../ui/ExploreProcuts";
import ShoppingCartUi from "../ui/ShoppingCartUi";

const ExploreMarket = () => {
    return (
      <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto ld:mt-20 mt-14">
        <div>
          <h1 className="xl:w-[836px] lg:w-8/12 lmd:w-7/12 smd:w-5/12 md:w-6/12 sm:w-7/12 smm:w-6/12 xs:w-7/12 xss:w-[65%] xsss:w-9/12 w-full mx-auto capitalize text-center font-DmSans font-bold text-darkColor xl:text-6xl lg:text-5xl lmd:text-4xl ms:text-3xl sm:text-2xl xss:text-xl text-lg">
            Fresh, Healthy, and Delicious
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientColor1 to-gradientColor2 mx-2">
              Seafood
            </span>
            Straight From Our Waters
          </h1>
          <p className="xl:w-[802px] lg:w-9/12 lmd:w-8/12 smd:w-[63%] md:w-[70%] sm:w-9/12 xss:w-[75%] w-full mx-auto xl:text-2xl lg:text-xl lmd:text-lg text-base  font-light font-Inter text-center text-grayPrimaryColor my-3">
            We believe that the best fish is the freshest fish, which is why we
            prioritize quality above everything else.
          </p>
          <div className="flex justify-center items-center lmd:gap-5 gap-2 my-10">
            <ShoppingCartUi className="lg:py-[14px]" />
            <ExploreProuct />
          </div>
        </div>
        {/* IMAGES SECTIONS */}
        <div className="gap-5">
          <div className="flex lg:gap-4 lmd:gap-3 gap-2">
            <div className="w-full">
              <Image
                className="w-full h-full"
                src="/images/fish-market1.jpg"
                alt=""
                width={400}
                height={170}
              />
            </div>
            <div className="w-full flex flex-col lg:gap-4 lmd:gap-3 gap-2">
              <Image
                className="w-full"
                src="/images/fish-market2.jpg"
                alt=""
                width={400}
                height={170}
              />

              <Image
                className="w-full"
                src="/images/fish-market3.jpg"
                alt=""
                width={400}
                height={170}
              />
            </div>
          </div>

          <div className="w-full lg:mt-4 lmd:mt-3 mt-2">
            <Image
              className="w-full"
              src="/images/fish-market4.jpg"
              alt=""
              width={400}
              height={170}
            />
          </div>
        </div>
      </section>
    );
}

export default ExploreMarket