import play from "../assets/play.png";
import next from "../assets/next.png";
import back from "../assets/back.png";
import shuffle from "../assets/arrow.png";
import reapeat from "../assets/repeat.png";

const Musicplayer = () => {
  return (
    <div className="bg-black w-full p-5 bg-opacity-75  absolute bottom-0  left-0 flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <button className="size-10 p-2 opacity-75 hover:opacity-100">
          <img src={shuffle}></img>
        </button>
        <button className="size-10 p-2 opacity-75 hover:opacity-100">
          <img src={back}></img>
        </button>
        <button className="size-10 p-2 opacity-75 hover:opacity-100">
          <img src={play}></img>
        </button>

        <button className="size-10 p-2 opacity-75 hover:opacity-100">
          <img src={next}></img>
        </button>
        <button className="size-10 p-2 opacity-75 hover:opacity-100">
          <img src={reapeat}></img>
        </button>
      </div>
      <input
        type="range"
        step="0.01"
        className=" range appearance-none bg-[rgb(105,103,99)] h-2 w-1/2 rounded-lg opacity-70"
      ></input>
    </div>
  );
};
export default Musicplayer;
