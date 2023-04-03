import Image from "next/image";

const Clients = () => {
  return (
    <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-20 mt-16">
      <h1 className="font-medium font-DmSans to-darkColor text-center text-darkColor lg:text-5xl text-4xl">
        Our Clients
      </h1>
      <div className="lmd:flex lmd:justify-between justify-evenly items-center content-evenly justify-items-center my-7 grid xs:grid-cols-2 gap-2">
        <Image
          className="xl:w-[256px] xl:h-[118.16px] lmd:w[180px] lmd:h-[90px] mt-4"
          src="/images/ocean-basket.png"
          alt=""
          width={150}
          height={50}
        />
        <Image
          className="xl:w-[200px] xl:h-[100px] lmd:w-[180px] lmd:-h[85px] mt-4"
          src="/images/shark101.png"
          alt=""
          width={150}
          height={50}
        />
        <Image
          className="xl:w-[211px] xl:h-[87.4px] lmd:w-[170px] lmd:h-[70px] mt-4"
          src="/images/noir.png"
          alt=""
          width={150}
          height={50}
        />
        <Image
          className="xl:w-[114px] xl:h-[130.38px] lmd:[100px] lmd:h-[117px]"
          src="/images/788.png"
          alt=""
          width={100}
          height={50}
        />
      </div>
    </section>
  );
};

export default Clients;
