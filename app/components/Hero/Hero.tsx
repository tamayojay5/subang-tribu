import FoodImg from "~/assets/food.png";

const BgStyle = {
  background: `linear-gradient(90deg, rgba(122,130,85,1) 0%, rgba(86,98,62,1) 35%, rgba(183,169,126,1) 100%)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <div className="space-y-7 text-gray-950 order-2 sm:order-1 ">
              <h1 className="text-5xl" data-aos="fade-up">
                Experience a journey of taste inspired by{" "}
                <span className="text-colorText font-cursive text-7xl">
                  travel and nature.
                </span>{" "}
                Every dish tells a story of exploration and discovery.
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
                Delicious meals that take you on a journey of flavor and
                discovery.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="relative z-30 order-1 sm:order-2"
            >
              <img
                src={FoodImg}
                alt=""
                className="w-full sm:scale-125 sm:translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
