import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Musicplayer from "./Components/Musicplayer";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="app">
        {/* <Login></Login> */}
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <Musicplayer></Musicplayer>
    </div>
  );
};

export default App;
