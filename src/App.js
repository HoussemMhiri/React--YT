import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Entete from "./components/headNav/Entete";
import VdTitle from "./components/vd/VdTitle";
import Desc from "./components/desc/Desc";
import Comments from "./components/comments/Comments";
import Aside from "./components/aside/Aside";

function App() {
  return (
    <div className="App">
      <Entete />
      <div className="flex">
        <div>
          <VdTitle />
          <Desc />
          <Comments />
        </div>

        <Aside />
      </div>
    </div>
  );
}

export default App;
