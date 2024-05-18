import sp from "../assets/spotifywhite.png";
import home from "../assets/home.png";
import search from "../assets/search.png";
import library from "../assets/library2.png";
import add from "../assets/add.png";
import liked from "../assets/heart.png";

const sideBar = () => {
  return (
    <div className="sidebar">
      <div id="sp">
        <img src={sp}></img>
      </div>
      <div className="sub">
        <div className="home">
          <button>
            <img src={home}></img>
          </button>
          <p>Home</p>
        </div>

        <div className="search">
          <button>
            <img src={search}></img>
          </button>
          <p>Search</p>
        </div>
        <div className="library">
          <button>
            <img src={library}></img>
          </button>
          <p>Library</p>
        </div>
        <div className="add">
          <button>
            <img src={add}></img>
          </button>
          <p>Create Playlist</p>
        </div>
        <div className="add">
          <button>
            <img src={liked}></img>
          </button>
          <p>Liked songs</p>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
