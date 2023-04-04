import ChevronLeft from "../icons/ChevronLeft"
import ChevronRight from "../icons/ChevronRight"

const ChevronDouble = () => {
    return (
      <div className="flex lmd:justify-end lmd:items-end justify-center items-center gap-5  text-darkColor my-5">
        <p className="rounded-[50%] border border-chevronColor px-2 py-[5px] mx-2">
          <ChevronLeft />
        </p>

        <p className="rounded-[50%] border border-chevronColor px-2 py-[5px] mx-2">
          <ChevronRight />
        </p>
      </div>
    );
}

export default ChevronDouble