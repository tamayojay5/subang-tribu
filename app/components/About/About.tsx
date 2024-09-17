import Dot from "~/assets/dots.png";
import Person from "~/assets/person.png";

const About = () => {
  return (
    <>
      <div className="px-10">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="relative">
            <img
              data-aos="fade-right"
              data-aos-delay="500"
              className="w-1/5 h-1/4 absolute top-0 left-0 -z-10"
              src={Dot}
              alt=""
            />

            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="h-full rounded-full overflow-hidden"
            >
              <img src={Person} alt="" />
            </div>
          </div>

          <div className="my-auto flex flex-col gap-3">
            <h1 data-aos="fade" className="text-indigo-700 font-bold">
              ABOUT ME
            </h1>
            <h1
              data-aos="fade"
              data-aos-delay="300"
              className="text-3xl font-medium"
            >
              Lucky
            </h1>
            <h1
              data-aos="fade"
              data-aos-delay="500"
              className="text-3xl font-medium"
            >
              Davao City, Philippines
            </h1>

            <p data-aos="fade" data-aos-delay="300" className="text-gray-400">
              I’m a passionate traveler with an unquenchable thirst for
              adventure. Embracing every opportunity to explore new places, I
              thrive on the thrill of discovering diverse cultures and
              landscapes. My outgoing nature drives me to connect with people
              from all walks of life, making every journey an enriching
              experience. Whether I’m hiking through lush forests, climbing
              rugged mountains, or simply soaking in the beauty of a tranquil
              sunrise, my love for nature is at the heart of all my travels. For
              me, life is a grand adventure, and every new destination is a
              chance to create unforgettable memories.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
