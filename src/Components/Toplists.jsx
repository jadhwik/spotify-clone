import play from "../assets/playbutton.png";

const Toplists = ({ jsonData }) => {
  return (
    <div className="toplists">
      <h3>Top Playlists</h3>
      <div className="topsub">
        {jsonData && (
          <>
            <div className="top1 relative">
              <div>
                <img
                  src={
                    jsonData.topResults.featured[0].data.images.items[0]
                      .sources[0].url
                  }
                ></img>
              </div>
              <div>
                <button>
                  <img src={play} className="inline-block"></img>
                </button>
              </div>

              <h1>{jsonData.topResults.featured[0].data.name}</h1>
              <p>{jsonData.topResults.featured[0].data.description}</p>
            </div>

            <div className="top1 relative">
              <div>
                <img
                  src={
                    jsonData.topResults.featured[1].data.images.items[0]
                      .sources[0].url
                  }
                ></img>
              </div>
              <div>
                <button>
                  <img src={play}></img>
                </button>
              </div>

              <h1>{jsonData.topResults.featured[1].data.name}</h1>
              <p>{jsonData.topResults.featured[1].data.description}</p>
            </div>

            <div className="top1 relative">
              <img
                src={
                  jsonData.topResults.featured[2].data.images.items[0]
                    .sources[0].url
                }
              ></img>
              <button>
                <img src={play}></img>
              </button>

              <h1>{jsonData.topResults.featured[2].data.name}</h1>
              <p>{jsonData.topResults.featured[2].data.description}</p>
            </div>

            <div className="top1 relative">
              <img
                src={
                  jsonData.topResults.featured[3].data.images.items[0]
                    .sources[0].url
                }
              ></img>
              <button>
                <img src={play}></img>
              </button>

              <h1>{jsonData.topResults.featured[3].data.name}</h1>
              <p>{jsonData.topResults.featured[3].data.description}</p>
            </div>

            <div className="top1 relative">
              <img
                src={jsonData.albums.items[0].data.coverArt.sources[2].url}
              ></img>
              <button>
                <img src={play}></img>
              </button>

              <h1>{jsonData.albums.items[0].data.name}</h1>
              <p>
                {jsonData.albums.items[0].data.artists.items[0].profile.name}
              </p>
            </div>

            <div className="top1 relative">
              <img
                src={jsonData.albums.items[1].data.coverArt.sources[2].url}
              ></img>
              <button>
                <img src={play}></img>
              </button>

              <h1>{jsonData.albums.items[1].data.name}</h1>
              <p>
                {jsonData.albums.items[1].data.artists.items[0].profile.name}
              </p>
            </div>

            <div className="top1 relative">
              <img
                src={jsonData.albums.items[2].data.coverArt.sources[2].url}
              ></img>
              <button>
                <img src={play}></img>
              </button>

              <h1>{jsonData.albums.items[2].data.name}</h1>
              <p>
                {jsonData.albums.items[2].data.artists.items[0].profile.name}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Toplists;
