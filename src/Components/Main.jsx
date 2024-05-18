import left from "../assets/left.png";
import right from "../assets/right.png";
import { useState, useEffect } from "react";
import play from "../assets/playbutton.png";
import Podcasts from "./Toplists";
import Episodes from "./Episodes";
import Artists from "./Artists";
import man from "../assets/man.png";
// import Albums from "./Albumtracks";

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/search/?q=albums&type=multi&offset=0&limit=10&numberOfTopResults=5";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "656e12d1b2mshb8b8278a3aa1130p165aaejsn47811230b309",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setData(result);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const jsonData = JSON.parse(data);
  console.log(jsonData);
  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime); // Output: e.g., "11:23:45 PM"
  const [hours, minutes, seconds] = currentTime.split(":");
  let hour = parseInt(hours);
  let sec = seconds.split("");
  const ampm = sec.splice(-2).join("");
  let wish = "";
  if (hour >= 0 && hour < 12 && ampm === "AM") {
    wish = "Good Morning";
  } else if (hour >= 12 && hour < 6 && ampm === "PM") {
    wish = "Good Afternoon";
  } else {
    wish = "Good Evening";
  }

  return (
    <div className="Main">
      <div className="flex flex-row justify-between">
        <div className="arrow">
          <div className="left">
            <button>
              <img src={left}></img>
            </button>
          </div>

          <div className="right">
            <button>
              <img src={right}></img>
            </button>
          </div>
        </div>
        <div className="flex flex-row mr-5 gap-2 justify-center items-center">
          <button className="bg-white text-black rounded-2xl h-8 p-1 ">
            Explore Premium
          </button>
          <button>
            <img src={man} className="size-12"></img>
          </button>
        </div>
      </div>
      <h1>{wish}</h1>
      <div className="p-2 ">
        <button className="p-2 w-12 ml-5 bg-[#475569] bg-opacity-50 hover:bg-white hover:text-black  focus:bg-white  focus:text-black active:bg-white active:text-black rounded-2xl">
          All
        </button>
        <button className="p-2 min-w-14 ml-5 bg-[#475569] bg-opacity-50 hover:bg-white hover:text-black  focus:bg-white  focus:text-black rounded-2xl">
          Episodes
        </button>
        <button className="p-2 min-w-14 ml-5  bg-[#475569] bg-opacity-50 hover:bg-white hover:text-black  focus:bg-white  focus:text-black rounded-2xl">
          Artists
        </button>
      </div>

      <div className="playlists">
        <div className="first">
          {data && (
            <>
              <img
                src={
                  jsonData.playlists.items[0].data.images.items[0].sources[2]
                    .url
                }
              ></img>
              <p>{jsonData.playlists.items[0].data.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>
        <div className="first">
          {data && (
            <>
              <img
                src={
                  jsonData.playlists.items[1].data.images.items[0].sources[2]
                    .url
                }
              ></img>
              <p>{jsonData.playlists.items[1].data.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>

        <div className="first">
          {data && (
            <>
              <img
                src={
                  jsonData.playlists.items[2].data.images.items[0].sources[2]
                    .url
                }
              ></img>
              <p>{jsonData.playlists.items[2].data.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>
        <div className="first">
          {data && (
            <>
              <img
                src={
                  jsonData.playlists.items[4].data.images.items[0].sources[2]
                    .url
                }
              ></img>
              <p>{jsonData.playlists.items[4].data.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>

        <div className="second">
          {data && (
            <>
              <img
                src={
                  jsonData.artists.items[0].data.visuals.avatarImage.sources[1]
                    .url
                }
              ></img>
              <p>{jsonData.artists.items[0].data.profile.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>

        <div className="second">
          {data && (
            <>
              <img
                src={
                  jsonData.artists.items[1].data.visuals.avatarImage.sources[1]
                    .url
                }
              ></img>
              <p>{jsonData.artists.items[1].data.profile.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>

        <div className="second">
          {data && (
            <>
              <img
                src={
                  jsonData.artists.items[2].data.visuals.avatarImage.sources[1]
                    .url
                }
              ></img>
              <p>{jsonData.artists.items[2].data.profile.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>
        <div className="second">
          {data && (
            <>
              <img
                src={
                  jsonData.artists.items[3].data.visuals.avatarImage.sources[1]
                    .url
                }
              ></img>
              <p>{jsonData.artists.items[3].data.profile.name}</p>
            </>
          )}
          <button>
            <img src={play}></img>
          </button>
        </div>
      </div>
      <Podcasts jsonData={jsonData}></Podcasts>
      <Episodes jsonData={jsonData}></Episodes>
      <Artists jsonData={jsonData}></Artists>
      {/* <Albums></Albums> */}
    </div>
  );
};
export default Main;
