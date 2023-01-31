import {
  sidebar_items_dark,
  sidebar_items_light,
  theme_dark,
  theme_light,
} from ".";
import { useState, useEffect } from "react";

import "./Sidebar.css";

const Sidebar = (props) => {
  // var sidebar_items = sidebar_items_light;
  const [theme, setTheme] = useState(1);
  // const [dummyState, reRender] = useState(0);

  // const changeTheme = () => {
  //   props.changeTheme();
  // };

  useEffect(() => {
    props.changeTheme();
    // if (theme % 2 !== 0) {
    //   sidebar_items = sidebar_items_dark;
    // } else {
    //   sidebar_items = sidebar_items_light;
    // }
    // console.log(sidebar_items);
  }, [theme]);
  return (
    <div className="sidebar">
      {theme % 2 === 0
        ? sidebar_items_dark.map((item) => (
            <div key={item.id} className="sidebar-item">
              <div className="icon">
                <img src={`${item.image}`} alt="icon" />
              </div>
              <div className="text">{item.text}</div>
            </div>
          ))
        : sidebar_items_light.map((item) => (
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
