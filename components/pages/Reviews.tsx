import ChevronDouble from "../ui/ChevronDouble";
import ReviewContent from "../ui/ReviewContent";

const Reviews = () => {
  return (
    <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-28 mt-20">
      <h1 className="font-DmSans font-medium text-center text-darkColor text-5xl mb-5 mt-10">
        Reviews
      </h1>

      <div className="grid lmd:grid-cols-3 grid-cols-1 gap-4 bg-productsBg lmd:mt-12 mt-10">
        <ReviewContent
          paragraph="Aqually delivers the best seafood at the best prices. We highly
          recommend this company."
        />
        <ReviewContent
          paragraph="Every order we made arrived in great condition, and the quality of
          every order is excellent."
        />
        <ReviewContent
          paragraph="Every order we made arrived in great condition, and the quality of
          every order is excellent."
        />
      </div>

      <ChevronDouble />
    </section>
  );
};

export default Reviews