import PropTypes from "prop-types";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Fried from "~/assets/png/chicken.png";
import BackRibs from "~/assets/png/backribs.png";
import Siomai from "~/assets/png/siomai.png";
import Hungarian from "~/assets/png/hungarian.png";
import Porkchop from "~/assets/png/porkchop.png";

const dishesList = [
  {
    title: "Fried",
    src: Fried,
    id: 1,
    price: 100,
  },
  {
    title: "Baby Backribs",
    src: BackRibs,
    id: 2,
    price: 120,
  },
  {
    title: "Siomai",
    src: Siomai,
    id: 3,
    price: 130,
  },
  {
    title: "Hungarian",
    src: Hungarian,
    id: 4,
    price: 140,
  },
  {
    title: "Porkchop",
    src: Porkchop,
    id: 5,
    price: 150,
  },
];

interface DishesProps {
  setShowPopup: (value: boolean) => void;
}

const Dishes: React.FC<DishesProps> = ({ setShowPopup }) => {
  return (
    <div className="py-14 bg-gray-50">
      <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1
          data-aos="fade"
          className=" text-4xl text-primary font-semibold text-center pt-24 pb-10"
        >
          Our Dishes
        </h1>

        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className=" flex flex-wrap gap-8 justify-center"
        >
          {dishesList.map((dish) => (
            <>
              <div
                key={dish.id}
                className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex flex-col items-center"
              >
                <img
                  className="h-[200px] rounded-xl"
                  src={dish.src}
                  alt="img"
                />
                <div className="space-y-4">
                  <h3 className="font-semibold text-center text-xl pt-6">
                    {dish.title}
                  </h3>
                  <div className="flex flex-row justify-center">
                    <BsStarFill className="text-brightColor" />
                    <BsStarFill className="text-brightColor" />
                    <BsStarFill className="text-brightColor" />
                    <BsStarFill className="text-brightColor" />
                    <BsStarHalf className="text-brightColor" />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <h3 className="font-semibold text-lg">{dish.price}</h3>
                    <div>
                      <button
                        onClick={() => setShowPopup(true)}
                        className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-black transition-all rounded-full"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

Dishes.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
};

export default Dishes;
