import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import IG from "./components/IG/IG";

import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(1);

  const changeTheme = () => {
    setTheme(theme + 1);
  };

  useEffect(() => {
    console.log(theme % 2 !== 0);
    if (theme % 2 === 0) {
      document.documentElement.style.setProperty("--color", "black");
      document.documentElement.style.setProperty("--bg", "white");
    } else {
      document.documentElement.style.setProperty("--color", "white");
      document.documentElement.style.setProperty("--bg", "black");
    }
  }, [theme]);
  return (
    <div className="app">
      <Sidebar changeTheme={changeTheme} />
      <div className="two">
        <Header />
        <IG />
      </div>
    </div>
  );
}

export default App;
