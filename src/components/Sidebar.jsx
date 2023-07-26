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
      genre: ["Comdedy", "Romance"],
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

  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-2 pt-6 border-r border-zinc-700 h-screen">
        <h1 className="text-3xl text-center pb-6 font-bold">Anime</h1>
        {Menus.map((menu, index) => (
          <NavLink
            to={menu.path}
            key={index}
            activeclassname="active"
            className="sidebar hover:text-yellow-300 active:text-yellow-400 gap-5 flex items-center p-2"
          >
            <div className="ml-24">{menu.icon}</div>
            <div>{menu.name}</div>
          </NavLink>
        ))}
      </aside>

      <main className="col-span-8 p-6 h-screen">{children}</main>

      <aside className="col-span-2 p-6 border-l border-zinc-700 h-screen">
        <div className="flex items-center justify-between pb-6">
          <form className="relative">
            <FaSearch className="absolute top-[30%] left-3 text-yellow-400" />
            <input
              type="text"
              placeholder="Search..."
              className="rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-700 appearance-none w-full text-sm leading-6 text-yellow-400 placeholder-yellow-400 py-2 pl-10 ring-1 ring-yellow-200"
            />
          </form>
          <img
            src="https://source.unsplash.com/random/?girl"
            alt="foto"
            className="w-12 h-12 rounded-full"
          />
        </div>

        <div className="uppercase font-semibold py-2">popular this week</div>

        <ul className="flex flex-col gap-4 pb-6">
          {Anime.map((anime, index) => (
            <li key={index} className="flex items-center">
              <NavLink>
                <img
                  src={`./src/assets/${anime.src}.png`}
                  alt="Anime"
                  className="w-24 h-32 max-w-fit"
                />
              </NavLink>
              <div className="flex flex-col ml-3">
                <NavLink className="text-md hover:text-yellow-300">
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
