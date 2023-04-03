import DeliveryTruck from "../icons/DeliveryTruck";
import Fish from "../icons/Fish";
import PointOfService from "../icons/PointOfSerVice";

const contents = [
  {
    name: (
      <p className="font-DmSans text-darkColor font-bold lg:ext-xl lmd:text-lg text-base">
        Quality and <br /> Affordable Seafood
      </p>
    ),
    icon: <Fish />,
    id: 1,
  },
  {
    name: (
      <p className="font-DmSans text-darkColor font-bold lg:ext-xl lmd:text-lg text-base">
        Over 10 Years <br /> Experience
      </p>
    ),
    icon: <PointOfService />,
    id: 2,
  },
  {
    name: (
      <p className="font-DmSans text-darkColor font-bold lg:ext-xl lmd:text-lg text-base">
        Stress Free Shopping <br /> and Delivery Options
      </p>
    ),
    icon: <DeliveryTruck />,
    id: 3,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-20 mt-16">
      <h1 className="flex justify-center items-center font-DmSans font-medium text-darkColor lg:text-5xl lmd:text-4xl sm:text-3xl xs:text-2xl text-lg">
        Why Choose Aqually?
      </h1>
      <div className="my-8 flex justify-between gap-3 flex-wrap">
        {contents.map((cont) => (
          <div key={cont.id} className="flex  justify-between gap-2">
            <p className="p-3 bg-primaryColor text-white rounded-lg">
              {cont.icon}
            </p>
            {cont.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
