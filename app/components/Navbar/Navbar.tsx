import Logo from "~/assets/logo.jpg";
const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Dishes",
    link: "/dishes",
  },
];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Vegetables",
//     link: "/",
//   },
//   {
//     id: 2,
//     name: "Fruits",
//     link: "/about",
//   },
//   {
//     id: 3,
//     name: "Grains",
//     link: "/contact",
//   },
// ];

const Navbar = () => {
  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          <div className="font-bold text-3xl ">
            <img src={Logo} alt="" style={{ height: "50px", width: "50px" }} />
          </div>

          <div>
            <ul className="flex items-center gap-10">
              {NavLinks?.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="hidden sm:inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* simple dropdown and links */}

              {/* <li className="hidden md:block cursor-pointer group ">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown />
                      <div className="group-hover:rotate-180 duration-300"></div>
                    </span>
                  </div>
                </a>

                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li> */}

              {/* <li>
                <button
                  onClick={handlePopup}
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300"
                >
                  <FaUser /> My Account
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
