import "./Header.css";

import { header_details } from ".";

const Header = () => {
  return (
    <div className="header">
      <div className="profile"><img src={header_details.image} alt="profile image" /></div>
      <div className="details">
        <div className="username">{header_details.username}</div>
        <div className="name">{header_details.name}</div>
      </div>
    </div>
  );
};

export default Header;
