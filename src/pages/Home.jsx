import { FaChevronRight } from "react-icons/fa";
import Button from "../components/Button";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const rating = {
    size: 30,
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
          className="opacity-50 h-[650px] w-full"
        />
        <div className="absolute top-1/3 left-14 w-1/2 h-1/2  overflow-hidden">
          <div className="text-4xl">Jujutsu Kaisen</div>
          <ReactStars {...rating} />
          <div className="text-md block pb-3 ">
            {`
            A boy swallows a cursed talisman - the finger of a demon - and
            becomes cursed himself. He enters a shaman's school to be able to
            locate the demon's other body parts and thus exorcise himself.`}
          </div>
          <Button className="px-3 py-2 bg-yellow-300 hover:bg-yellow-50 text-black font-bold rounded-lg">
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

      <ul className="flex justify-between gap-5">
        {thumb.map((thumb, index) => (
          <li key={index}>
            <NavLink className="relative">
              <img
                src={`./src/assets/${thumb.src}.jpe`}
                alt="thumbnail"
                className="rounded-xl hover:opacity-50"
              />
              <div className="p-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-yellow-300">
                <FaPlay className="text-black text-2xl" />
              </div>
            </NavLink>
            <NavLink>
              <div className="hover:text-yellow-300">{thumb.title}</div>
            </NavLink>
            <div className="text-sm">{thumb.eps}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
