import { useState, useEffect } from "react";

const Albumtracks = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchALT = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv";
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
        setAlbums(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchALT();
  });
  const jsonAlb = JSON.parse(albums);
  console.log(jsonAlb);

  return (
    <div className="album w-full h-screen">
      <div>
        {jsonAlb && (
          <>
            <div className="flex flex-row p-5 ">
              <img
                src={jsonAlb.albums[0].images[1].url}
                className="size-40 rounded-lg"
              ></img>
              <div className="flex flex-col p-5 ">
                <h3>Artists Playlist</h3>
                <h1>{jsonAlb.albums[0].name}</h1>
                <h3>Hollywood Rapper.6,812 likes.10 Songs</h3>
              </div>
            </div>
            <div className="grid gird-cols-4 grid-rows-5">
              <div className="flex flex-row gap-44 mt-5">
                <p>#</p>
                <p>Title</p>
                <p>Albums</p>
                <p>Duration</p>
              </div>
              <div>
                <div className="flex flex-row gap-32 items-center">
                  <p>1</p>
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={jsonAlb.albums[0].images[2].url}
                      className=" rounded-lg"
                    ></img>
                    <div className="flex flex-col">
                      <h2>{jsonAlb.albums[0].tracks.items[0].name}</h2>
                      <p className="text-sm opacity-50">
                        {jsonAlb.albums[0].name}
                      </p>
                    </div>
                  </div>
                  <h2>{jsonAlb.albums[0].tracks.items[0].name}</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Albumtracks;
