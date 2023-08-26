import "./sidebar.css";
import { DynamicFeed, Chat, Collections, VideoCameraFront, LocalActivity, LiveTvTwoTone, AutoStories } from '@mui/icons-material'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Send Message</span>
                    </li>
                    <li className="sidebarListItem">
                        <Collections className="sidebarIcon" />
                        <span className="sidebarListItemText">Pictures</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCameraFront className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalActivity className="sidebarIcon" />
                        <span className="sidebarListItemText">Local Activities</span>
                    </li>
                    <li className="sidebarListItem">
                        <LiveTvTwoTone className="sidebarIcon" />
                        <span className="sidebarListItemText">Viewing Party</span>
                    </li>
                    <li className="sidebarListItem">
                        <AutoStories className="sidebarIcon" />
                        <span className="sidebarListItemText">Book Suggestions</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="assets/person/1.person.jpeg" alt="" />
                        <span className="sidebarFriendName">Janelle Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="assets/person/11.person.jpeg" alt="" />
                        <span className="sidebarFriendName">Janet Blackson</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="assets/person/14.person.jpeg" alt="" />
                        <span className="sidebarFriendName">Tim Cavier</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="assets/person/15.person.jpeg" alt="" />
                        <span className="sidebarFriendName">Mike Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="assets/person/12.person.jpeg" alt="" />
                        <span className="sidebarFriendName">Linda Marvel</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="assets/person/16.person.jpeg" alt="" />
                        <span className="sidebarFriendName">Jacob Patterson</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}