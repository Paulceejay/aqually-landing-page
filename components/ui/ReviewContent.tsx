const ReviewContent = (props:any) => {
    return (
      <div className="bg-productsBg p-4 shadow-product-shadow rounded-xl lmd:w-full sm:w-1/2 xs:w-8/12 mx-auto">
        <h1 className="font-DmSans font-bold text-2xl mb-2 text-darkColor">
          Adeola Johnson
        </h1>
        <h2 className="font-DmSans font-medium text-xl text-graySecondaryColor my-2">
          Chef, Ocean Basket
        </h2>
        <p className="font-DmSans font-normal lg:text-2xl md:text-xl text-lg text-darkColor mt-5 max-w-[368px]">
          {props.paragraph}
        </p>
      </div>
    );
}

export default ReviewContent