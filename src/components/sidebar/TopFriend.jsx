

export default function TopFriend({user}) {
  return (
    <li className="sidebarFriend">
          <img className="sidebarFriendImg" src={user.topPic} alt="" />
          <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
