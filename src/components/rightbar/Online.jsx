import "./online.css";


export default function Online({user}) {
  return (
    <ul className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={user.onlinePic} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
    </ul>
  )
}
