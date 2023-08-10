import "./navbar.css"
import { Search , Person, Chat, Notifications } from "@mui/icons-material"

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">AleceSocial</span>
            </div>

            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search friends, posts, videos.." className="searchInput" />
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Timeline</span>
                </div>
            
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat />
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications />
                        <span className="navbarIconBadge">7</span>
                    </div>
                </div>
                <img src="assets/person/2.person.jpeg" alt="" className="navbarImg" />
            </div>
        </div>
    )
}