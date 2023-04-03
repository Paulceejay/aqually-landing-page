import Image from "next/image";

const AboutUs = () => {
    return (
      <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-28 mt-24">
        <h1 className="font-medium font-DmSans to-darkColor text-center text-darkColor lg:text-5xl text-4xl">
          About Us
        </h1>
        <p className="font-DmSans font-normal text-center xl:text-xl md:text-base sm:text-sm text-xs text-graySecondaryColor my-5">
          At Aqually, we pride ourselves with providing the highest quality
          seafood to our customers. Our seafoods are caught using traditional
          and environmentally-friendly methods, ensuring that the ocean&#39;s
          delicate ecosystem is preserved for future generations. We offer a
          wide variety of fish, including salmon, tuna, cod, halibut, crabs and
          many more. All of our fish are hand-selected by our expert fishmongers
          and carefully inspected to ensure freshness and quality. We believe
          that the best fish is the freshest fish, which is why we prioritize
          quality above all else.
        </p>
        <Image
          className="w-full lg:mt-10 my-5"
          src="/images/man-hand.jpg"
          alt=""
          width={200}
          height={150}
        />
      </section>
    );
}

export default AboutUs