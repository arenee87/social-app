import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';
import { OnlineUser } from "../../dynamicData";
import Online from "./Online";


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
      <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">San Diego</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Engaged</span>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.person.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luke Danes</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.person.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luke Danes</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.person.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luke Danes</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.person.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luke Danes</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.person.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luke Danes</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/7.person.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luke Danes</span>
          </div>
          </div>
        </div>
      </> 
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  )
}

