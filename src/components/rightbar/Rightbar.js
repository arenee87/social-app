import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';

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
          <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/5.person.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tia Tender</span>
          </ul>
          <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/5.person.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tia Tender</span>
          </ul>
          <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/5.person.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tia Tender</span>
          </ul>
          <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/5.person.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tia Tender</span>
          </ul>
          <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/5.person.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tia Tender</span>
          </ul>
          <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/5.person.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tia Tender</span>
          </ul>
        </ul>
      </div>
    </div>
  )
}
