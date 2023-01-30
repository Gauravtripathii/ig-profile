import { sidebar_items_light, theme_dark, theme_light } from ".";
import { useState } from "react";

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
      <div className="sidebar-item" onClick={() => setTheme(theme + 1)}>
        <div className="icon">
          <img
            src={theme % 2 !== 0 ? theme_light : theme_dark}
            alt="change theme icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
