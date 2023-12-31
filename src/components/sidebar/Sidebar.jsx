import "./sidebar.css";
import { DynamicFeed, Chat, Collections, VideoCameraFront, LocalActivity, LiveTvTwoTone, AutoStories } from '@mui/icons-material'
import { TopFriendList } from "../../dynamicData";
import TopFriend from "./TopFriend";

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
                            {TopFriendList.map((u) => (
                                <TopFriend key={u.id} user={u} />
                            ))}
                    
                </ul>
            </div>
        </div>
    )
}