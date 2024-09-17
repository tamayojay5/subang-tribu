import { Link } from "@remix-run/react";
import { RiArrowRightFill } from "react-icons/ri";

const PrimaryButton = () => {
  return (
    <>
      <div className="flex items-center group">
        <Link to={"/dishes"}>
          <button className="bg-primary h-[40px] text-white px-3 py-2">
            Choose Your Meal
          </button>
        </Link>

        <RiArrowRightFill className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white" />
      </div>
    </>
  );
};

export default PrimaryButton;
