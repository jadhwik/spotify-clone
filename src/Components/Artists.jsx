import play from "../assets/playbutton.png";
import { useState } from "react";

const Artists = ({ jsonData }) => {
  const [artists, setArtist] = useState(false);

  const [buttonText, setButtonText] = useState("See More");

  const handleArtists = () => {
    setArtist(!artists);
    setButtonText(artists ? "See More" : "See Less");
  };

  const ExternalContent = (link) => {
    return (
      <div>
        <iframe
          src={link}
          title="External Content"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
        />
      </div>
    );
  };

  const Artist = () => {
    return (
      <div>
        {jsonData && (
          <div className="flex flex-row">
            <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center text-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
              <img
                src={
                  jsonData.artists.items[8].data.visuals.avatarImage.sources[2]
                    .url
                }
                className="size-30 rounded-full "
              ></img>
              <button
                className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                            hover:opacity-100  ease-in-out drop-shadow-xl 
                            transition-opacity duration-300"
              >
                <img src={play}></img>
              </button>
              <h3>{jsonData.artists.items[9].data.profile.name}</h3>
            </div>

            <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center text-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
              <img
                src={
                  jsonData.artists.items[9].data.visuals.avatarImage.sources[2]
                    .url
                }
                className=" size-30 rounded-full "
              ></img>
              <button
                className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                            hover:opacity-100  ease-in-out drop-shadow-xl 
                            transition-opacity duration-300"
              >
                <img src={play}></img>
              </button>
              <h3>{jsonData.artists.items[9].data.profile.name}</h3>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-2">
        <h3 className="text-lg">Your Favourite Artists</h3>
        <button onClick={handleArtists}>{buttonText}</button>
      </div>
      {jsonData && (
        <div className="grid grid-cols-7 grid-rows-2">
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <img
              src={
                jsonData.artists.items[0].data.visuals.avatarImage.sources[1]
                  .url
              }
              className="size-30 rounded-full "
            ></img>
            <a
              href={ExternalContent(jsonData.artists.items[0].data.uri)}
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                            hover:opacity-100  ease-in-out drop-shadow-xl 
                            transition-opacity duration-300"
            >
              <img src={play}></img>
            </a>
            <h3>{jsonData.artists.items[0].data.profile.name}</h3>
          </div>
          {/*Artist 2 =========================*/}
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <div className="">
              <img
                src={
                  jsonData.artists.items[1].data.visuals.avatarImage.sources[1]
                    .url
                }
                className="w-56 h-40 rounded-full "
              ></img>
            </div>
            <button
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                            hover:opacity-100  ease-in-out drop-shadow-xl 
                            transition-opacity duration-300"
            >
              <img src={play}></img>
            </button>
            <h3>{jsonData.artists.items[1].data.profile.name}</h3>
          </div>
          {/*Artsist3==========================*/}
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <img
              src={
                jsonData.artists.items[3].data.visuals.avatarImage.sources[2]
                  .url
              }
              className="w-56 h-40 rounded-full"
            ></img>
            <button
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                hover:opacity-100  ease-in-out drop-shadow-xl 
                transition-opacity duration-300"
            >
              <img src={play}></img>
            </button>
            <h3>{jsonData.artists.items[3].data.profile.name}</h3>
          </div>

          {/*Artsist4==========================*/}
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <img
              src={
                jsonData.artists.items[4].data.visuals.avatarImage.sources[2]
                  .url
              }
              className="size-30 rounded-full "
            ></img>
            <button
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                hover:opacity-100  ease-in-out drop-shadow-xl 
                transition-opacity duration-300"
            >
              <img src={play}></img>
            </button>
            <h3>{jsonData.artists.items[4].data.profile.name}</h3>
          </div>

          {/*Artsist5==========================*/}
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <img
              src={
                jsonData.artists.items[5].data.visuals.avatarImage.sources[2]
                  .url
              }
              className="size-30 rounded-full "
            ></img>
            <button
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                hover:opacity-100  ease-in-out drop-shadow-xl 
                transition-opacity duration-300"
            >
              <img src={play}></img>
            </button>
            <h3>{jsonData.artists.items[5].data.profile.name}</h3>
          </div>

          {/*Artsist6==========================*/}
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col text-center  justify-center items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <img
              src={
                jsonData.artists.items[6].data.visuals.avatarImage.sources[2]
                  .url
              }
              className="size-30 rounded-full "
            ></img>
            <button
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                hover:opacity-100  ease-in-out drop-shadow-xl 
                transition-opacity duration-300"
            >
              <img src={play}></img>
            </button>
            <h3>{jsonData.artists.items[6].data.profile.name}</h3>
          </div>

          {/*Artsist7==========================*/}
          <div className=" relative max-w-40 max-h-64 bg-[#334155] p-2 m-2  flex flex-col text-center  items-center rounded-lg bg-opacity-0 hover:bg-opacity-50">
            <img
              src={
                jsonData.artists.items[7].data.visuals.avatarImage.sources[2]
                  .url
              }
              className="size-30 rounded-full p-2 "
            ></img>
            <button
              className=" size-10 opacity-0 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2
                hover:opacity-100  ease-in-out drop-shadow-xl 
                transition-opacity duration-300"
            >
              <img src={play}></img>
            </button>
            <h3>{jsonData.artists.items[7].data.profile.name}</h3>
          </div>
          {artists && <Artist></Artist>}
        </div>
      )}
    </div>
  );
};
export default Artists;
