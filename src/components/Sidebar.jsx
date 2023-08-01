/* eslint-disable react/prop-types */
import { HiHome } from "react-icons/hi";
import { HiTrendingUp } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TfiLoop } from "react-icons/tfi";
import { FaCircleCheck } from "react-icons/fa6";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";
import { useState } from "react";
import { useRef } from "react";

const Sidebar = ({ children }) => {
  const Menus = [
    {
      path: "/",
      name: "Home",
      icon: <HiHome />,
    },
    {
      path: "/trending",
      name: "Trending",
      icon: <HiTrendingUp />,
    },
    {
      path: "/discover",
      name: "Discover",
      icon: <FaCompass />,
    },
    {
      path: "/recent",
      name: "Recent",
      icon: <FaHistory />,
    },
    {
      path: "/animelist",
      name: "Anime List",
      icon: <FaList />,
    },
    {
      path: "/ongoing",
      name: "OnGoing",
      icon: <TfiLoop />,
    },
    {
      path: "/completed",
      name: "Completed",
      icon: <FaCircleCheck />,
    },
    {
      path: "/series",
      name: "TV Series",
      icon: <TfiLayoutMediaCenterAlt />,
    },
    {
      path: "/movies",
      name: "Movies",
      icon: <BsTicketPerforatedFill />,
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <RiSettings4Fill />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <IoLogOut />,
    },
  ];

  const Anime = [
    {
      title: "Jujutsu Kaisen",
      genre: ["Action", "Fantasy"],
      src: "jujutsu",
    },
    {
      title: "Kanojo Okarishimasu",
      genre: ["Comedy", "Romance"],
      src: "kanojo",
    },
    {
      title: "Horimiya: Piece",
      genre: ["Romance", "School", "Comedy"],
      src: "horimiya",
    },
    {
      title: "Suki na Ko ga Megane wo Wasureta",
      genre: ["School", "Romance"],
      src: "sukinakomegane",
    },
    {
      title: "Zom 100: Bucket List of the Dead",
      genre: ["Action", "Comedy", "Horror"],
      src: "zom100",
    },
  ];

  const ratings = {
    size: 20,
    value: 4.5,
    edit: false,
    isHalf: true,
    halfIcon: <i className="fa fa-star-half-alt" />,
  };

  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(true);

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="grid xl:grid-cols-12">
      <aside className="xl:col-span-2 xl:pt-6 xl:border-r xl:border-zinc-700 xl:h-screen">
        <div className="flex justify-between xl:justify-center items-center p-4 xl:p-0 xl:pb-6 z-20 relative bg-[#242424]">
          <button
            className="lg:hidden"
            onClick={() => {
              setSearch(!search);
              handleClick();
            }}
          >
            <FaSearch />
          </button>
          <h1 className="text-3xl text-center font-bold">Anime</h1>
          <button
            className="relative rounded-sm focus:outline-none xl:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            <div className="absolute block w-5 right-0">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen && "opacity-0"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`backdrop-brightness-50 w-screen h-[68px] absolute lg:static lg:transform-none lg:hidden z-10 flex justify-center items-center duration-500 delay-100 ease-in-out top-0 transition ${
            search ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <form className="w-full text-center">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search here..."
              className="text-center rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 appearance-none w-3/4 text-sm leading-6 text-yellow-400 placeholder-yellow-400 py-2"
            />
          </form>
        </div>

        <ul
          className={`absolute lg:static z-10 bg-[#242424] lg:transform-none w-screen lg:w-full border-t border-b lg:border-t-0 lg:border-b-0 duration-500 delay-100 ease-in-out right-0 transition ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="my-2 xl:my-0">
            {Menus.map((menu, index) => (
              <li key={index} className="p-2 xl:px-0">
                <NavLink
                  to={menu.path}
                  activeclassname="active"
                  className="sidebar hover:text-yellow-300 gap-5 flex items-center"
                >
                  <div className="2xl:ml-[105px] xl:ml-14 ml-[135px]">
                    {menu.icon}
                  </div>
                  <div>{menu.name}</div>
                </NavLink>
              </li>
            ))}
          </div>
        </ul>
      </aside>

      <main className="xl:col-span-8 xl:p-6 px-3 xl:h-screen">{children}</main>

      <aside className="xl:col-span-2 xl:p-6 p-3 xl:border-l xl:border-zinc-700 xl:h-screen">
        <div className="xl:flex items-center justify-between pb-6 hidden">
          <form className="relative">
            <FaSearch className="absolute top-[30%] left-3 text-yellow-400" />
            <input
              type="text"
              placeholder="Search..."
              className="rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 appearance-none w-full text-sm leading-6 text-yellow-400 placeholder-yellow-400 py-2 pl-10"
            />
          </form>
          <img
            src="https://source.unsplash.com/random/?girl"
            alt="foto"
            className="w-12 h-12 rounded-full hidden 2xl:block"
          />
        </div>

        <div className="uppercase font-semibold xl:py-2 pb-2">
          popular this week
        </div>

        <ul className="flex flex-col 2xl:gap-6 gap-4 pb-3 2xl:pb-6">
          {Anime.map((anime, index) => (
            <li key={index} className="flex items-center">
              <NavLink>
                <img
                  src={`./src/assets/${anime.src}.png`}
                  alt="Anime"
                  className="2xl:w-24 2xl:h-32 max-w-fit w-16 h-20"
                />
              </NavLink>
              <div className="flex flex-col 2xl:ml-3 ml-1 overflow-hidden">
                <NavLink className="text-sm 2xl:text-base font-semibold hover:text-yellow-300 truncate">
                  {anime.title}
                </NavLink>
                <div className="text-xs">{anime.genre.join(", ")}</div>
                <ReactStars {...ratings} />
              </div>
            </li>
          ))}
        </ul>
        <Button className="uppercase py-2 bg-yellow-300 hover:bg-yellow-50 text-black font-bold rounded-lg w-full">
          see more
        </Button>
      </aside>
    </div>
  );
};

export default Sidebar;
