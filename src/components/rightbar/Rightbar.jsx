import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';
import { OnlineUser } from "../../dynamicData";
import Online from "./Online";


export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon htmlColor="IndianRed" className="birthdayIcon" />
          <span className="birthdayText">
            <b>Piper Phelps</b> and <b>3 other friends</b> have a birthday today! 
          </span>
        </div>
        <img className="rightbarAd" src="assets/posts/glittergymnast.png" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {OnlineUser.map((u) => (
            <Online key={u.id} user={u} />
          ))}
         
        </ul>
      </div>
    </div>
  )
}

