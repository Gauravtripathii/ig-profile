import { sidebar_items_light, theme_dark, theme_light } from ".";
import { useEffect, useState } from "react";

import "./Sidebar.css";

const Sidebar = () => {
  const sidebar_items = sidebar_items_light;
  const [theme, setTheme] = useState(1);

//   const themeChangeHandler = () => {

//   }

  //   useEffect({}, [theme]);
  return (
    <div className="sidebar">
      {sidebar_items.map((item) => (
        <div key={item.id} className="sidebar-item">
          <div className="icon">
            <img src={`${item.image}`} alt="icon" />
          </div>
          <div className="text">{item.text}</div>
        </div>
      ))}
      <div className="icon" onClick={() => setTheme(theme+1)}>
        <img
          src={theme%2 != 0 ? theme_light : theme_dark}
          alt="change theme icon"
        />
        {/* <img src={theme_light} alt="" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
