import Posts from "./Posts/Posts";
import Tagged from "./Tagged/Tagged";
import Saved from "./Saved/Saved";

import "./IG.css";

const IG = () => {
  return (
    <div className="ig">
      <Posts />
      <Saved />
      <Tagged />
    </div>
  );
};

export default IG;
