import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Newbie from "../assets/newbie.png";

import "../styles/User.css";

function User() {
  const { user } = useContext(AppContext);
  const { displayName, level, expProgress, rank } = user.userInfo;

  return (
    <div className="User">
      <div className="userWrapper">
        <div className="userInfo">
          <span className="displayName">{displayName}</span>
          <span className="level">lvl {level}</span>
          <progress max="100" value={expProgress}></progress>
        </div>
        <div className="userRanking">
          <img src={Newbie} alt="Rank Avatar" />
          <p>{rank}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
