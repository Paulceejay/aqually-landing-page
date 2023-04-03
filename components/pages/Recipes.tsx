import Image from "next/image";
import ChevronDouble from "../ui/ChevronDouble";

const recipes = [
  { src: "/images/recipe1.jpg", name: "Oven Baked  Yellowtail Snapper" },
  { src: "/images/recipe2.jpg", name: "Spicy Catfish Pepper soup" },
  { src: "/images/recipe3.jpg", name: "Lobster a la Riseholme" },
  { src: "/images/recipe4.jpg", name: "Garlic Butter Air Fried Prawns" },
];

const Recipes = () => {
  return (
    <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-28 mt-20">
      <h1 className="font-DmSans font-medium text-center text-darkColor text-5xl my-5">
        Recipes
      </h1>
      <p className="font-DmSans font-normal lmd:text-xl text-graySecondaryColor text-base lmd:max-w-screen-lmd w-10/12 mx-auto text-center lg:my-10 my-8">
        We&#39; ve got plenty of inspiration from the best chefs around the
        world. Discover recipes for cod, salmon, tuna, sea bass, hake, mackerel,
        haddock and plenty more.
      </p>
      <div className="grid lmd:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 bg-productsBg lmd:mt-16 mt-12">
        {recipes.map((rec) => (
          <div
            key={rec.src}
            className="bg-productsBg p-3 shadow-product-shadow rounded-xl lmd:w-full sm:w-11/12 xs:w-8/12 mx-auto"
          >
            <Image
              className="w-full xl:h-[260px] lmd:h-[210px] h-[260px] p-[2px]"
              src={rec.src}
              alt=""
              width={150}
              height={100}
            />
            <p className="font-DmSans xl:text-2xl text-base font-semibold text-darkColor py-3 xl:w-[247px] w-10/12">
              {rec.name}
            </p>
          </div>
        ))}
      </div>
      <ChevronDouble />
    </section>
  );
};

export default Recipes;
