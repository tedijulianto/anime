import { FaChevronRight } from "react-icons/fa";
import Button from "../components/Button";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const rating = {
    size: 25,
    value: 4.5,
    edit: false,
    isHalf: true,
    halfIcon: <i className="fa fa-star-half-alt" />,
  };

  const thumb = [
    {
      title: "Zom 100: Bucket List of the Dead",
      eps: "Episode 1",
      src: "thumbZom100",
    },
    {
      title: "Jujutsu Kaisen",
      eps: "Episode 2",
      src: "thumbJujutsu",
    },
    {
      title: "Kanojo Okarishimasu",
      eps: "Episode 2",
      src: "thumbKanojo",
    },
    {
      title: "Suki na Ko ga Megane wo Wasureta",
      eps: "Episode 3",
      src: "thumbSukiMegane",
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          src="./src/assets/gojosatoru.jpg"
          alt="hero"
          className="opacity-50 2xl:h-[650px] xl:h-[400px] w-full"
        />
        <div className="absolute top-1/2 left-1/2 xl:left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-3/4 xl:w-1/2">
          <div className="xl:text-4xl text-lg">Jujutsu Kaisen</div>
          <ReactStars {...rating} />
          <div className="xl:pb-3 pb-2 text-xs xl:text-base">
            {`
            A boy swallows a cursed talisman - the finger of a demon - and
            becomes cursed himself. He enters a shaman's school to be able to
            locate the demon's other body parts and thus exorcise himself.`}
          </div>
          <Button className="px-3 xl:py-2 py-1 text-xs xl:text-base bg-yellow-300 hover:bg-yellow-50 text-black xl:font-bold font-semibold rounded-lg">
            Watch
          </Button>
        </div>
      </div>

      <div className="flex justify-between my-3">
        <div>On Going</div>
        <NavLink className="hover:text-yellow-300">
          <div className="flex items-center text-sm gap-1">
            More <FaChevronRight />
          </div>
        </NavLink>
      </div>

      <ul className="grid xl:grid-cols-4 gap-4">
        {thumb.map((thumb, index) => (
          <li key={index}>
            <NavLink className="relative">
              <img
                src={`./src/assets/${thumb.src}.jpe`}
                alt="thumbnail"
                className="rounded-xl hover:opacity-50 w-full"
              />
              <div className="2xl:p-4 p-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-yellow-300">
                <FaPlay className="text-black text-md 2xl:text-2xl" />
              </div>
            </NavLink>
            <NavLink className="overflow-hidden">
              <div className="hover:text-yellow-300 text-sm 2xl:text-base truncate">
                {thumb.title}
              </div>
            </NavLink>
            <div className="text-xs 2xl:text-sm">{thumb.eps}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
