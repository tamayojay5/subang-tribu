import Fried from "~/assets/png/chicken.png";
import BackRibs from "~/assets/png/backribs.png";
import Siomai from "~/assets/png/siomai.png";
import Hungarian from "~/assets/png/hungarian.png";
import Porkchop from "~/assets/png/porkchop.png";

import PrimaryButton from "../Button/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className="relative z-20">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
          >
            Savor the Taste of Nature’s Finest
          </h1>

          <div className="space-y-10">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
            >
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service Good Food in Philippines is the answer for
                  those who want to eat healthily, saving time for buying food
                  and preaparing delicious, healthy meals.
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="space-y-10">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
            >
              <div></div>
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service Good Food in Philippines is the answer for
                  those who want to eat healthily, saving time for buying food
                  and preaparing delicious, healthy meals.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="0"
            className="flex justify-center mt-10 sm:mt-14"
          >
            <PrimaryButton />
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
        >
          <img src={Fried} alt="" className="max-w-[160px]" />
        </div>
        <div
          data-aos="fade-right"
          className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
        >
          <img src={Hungarian} alt="" className="max-w-[280px]" />
        </div>
        <div
          data-aos="fade-left"
          className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100"
        >
          <img src={BackRibs} alt="" className="max-w-[200px]" />
        </div>
        <div data-aos="fade-left" className=" absolute bottom-0 right-0">
          <img src={Siomai} alt="" className="max-w-[200px]" />
        </div>
        <div
          data-aos="fade"
          className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100"
        >
          <img src={Porkchop} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
