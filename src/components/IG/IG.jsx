import Posts from "./Posts/Posts";
import Tagged from "./Tagged/Tagged";
import Saved from "./Saved/Saved";

import "./IG.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { images_light, images_dark } from ".";

const IG = (props) => {
  const theme = props.theme;
  // console.log("-->", theme);
  return (
    <BrowserRouter>
      <div className="ig">
        {/* <Posts /> */}
        {/* <Saved /> */}
        {/* <Tagged /> */}

        <ul>
          <li>
            <NavLink to="posts">
              <div className="icon">
                <img
                  src={theme % 2 === 0 ? images_light[0] : images_dark[0]}
                  alt="grid-icon"
                />
              </div>
              <div className="text">POSTS</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="saved">
              <div className="icon">
                <img
                  src={theme % 2 === 0 ? images_light[1] : images_dark[1]}
                  alt="save-icon"
                />
              </div>
              <div className="text">SAVED</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="tagged">
              <div className="icon">
                <img
                  src={theme % 2 === 0 ? images_light[2] : images_dark[2]}
                  alt="tagged-icon"
                />
              </div>
              <div className="text">TAGGED</div>
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/tagged" element={<Tagged />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default IG;
