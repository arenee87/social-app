import "./sidebar.css";
import { DynamicFeed, Chat, Collections, VideoCameraFront, LocalActivity } from '@mui/icons-material'

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
                </ul>
            </div>
        </div>
    )
}