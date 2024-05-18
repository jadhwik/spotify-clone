import play from "../assets/playbutton.png";

const Episodes = ({ jsonData }) => {
  function milliMin(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours} hr ${remainingMinutes} min`;
    } else {
      return `${minutes} min`;
    }
  }

  function formatDate(dateString) {
    const options = { month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="episodes m-2">
      <h3>Episodes For You</h3>

      {jsonData && (
        <div className="flex flex-row">
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[0].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-2 ">
                {jsonData.episodes.items[0].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[0].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[0].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[1].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-1  ">
                {jsonData.episodes.items[1].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[1].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[1].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[2].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-1  ">
                {jsonData.episodes.items[2].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[2].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[2].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>

          {/*Episode 4=======================================*/}
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[3].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-1  ">
                {jsonData.episodes.items[3].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[3].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[3].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>

          {/*Episode 5=======================================*/}
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[4].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-1  ">
                {jsonData.episodes.items[4].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[4].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[4].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>

          {/*Episode 6=======================================*/}
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[5].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-1  ">
                {jsonData.episodes.items[5].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[5].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[5].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>

          {/*Episode 7=======================================*/}
          <div className="episode1 relative">
            <div className="episode-cover">
              <img
                src={
                  jsonData.episodes.items[6].data.podcast.coverArt.sources[1]
                    .url
                }
              ></img>
              <div>
                <button className="play-button absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                  <img src={play} className="size-10"></img>
                </button>
              </div>
            </div>
            <div className="episode-details">
              <h1 className="text-sm line-clamp-1  ">
                {jsonData.episodes.items[6].data.name}
              </h1>
              <div className="flex flex-row justify-between p-2">
                <p className="text-xs">
                  {formatDate(
                    jsonData.episodes.items[6].data.releaseDate.isoString
                  )}
                </p>
                <p className="text-xs line-clamp-1">
                  {milliMin(
                    jsonData.episodes.items[6].data.duration.totalMilliseconds
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Episodes;
