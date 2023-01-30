import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import IG from "./components/IG/IG";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="2">
        <Header />
        <IG />
      </div>
    </div>
  );
}

export default App;
