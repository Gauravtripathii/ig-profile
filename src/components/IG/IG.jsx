import Posts from "./Posts/Posts";
import Tagged from "./Tagged/Tagged";
import Saved from "./Saved/Saved";

const IG = () => {
  return (
    <div className="posts">
      <Posts />
      <Saved />
      <Tagged />
    </div>
  );
};

export default IG;
