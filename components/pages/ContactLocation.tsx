import Image from "next/image";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

const ContactLocation = () => {
    return (
      <section className="w-11/12 lg:w-10/12 xl:max-w-screen-xl lg:max-w-full mx-auto lmd:mt-28 mt-20">
        <Image
          className="w-full"
          src="/images/map.png"
          alt=""
          width={450}
          height={300}
        />
        <p className="text-darkColor font-DmSans font-normal lmd:text-2xl md:text-lg text-base my-5">
          4, Amukoko street, Alagomeji, Yaba, Lagos
        </p>

        <div className="flex lmd:flex-row flex-col gap-5 font-DmSans font-normal text-darkColor lmd:text-2xl md:text-lg text-base">
          <p>aquallyfarms@gmail.com</p>
          <p className="px-5 lmd:block hidden">|</p>
          <p>+234 123 4567 406</p>
          <p className="px-5 lmd:block hidden">|</p>
          <p>+234 406 123 4567</p>
        </div>

        <div className="flex gap-5 mt-3">
          <Instagram />
          <Facebook />
          <Image
            className=""
            src="/images/twitter.png"
            alt=""
            width={45}
            height={40}
          />
        </div>
      </section>
    );
}

export default ContactLocation