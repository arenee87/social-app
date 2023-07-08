import "./navbar.css"
import { Search } from "@mui/icons-material"

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">AleceSocial</span>
            </div>

            <div className="navbarCenter"></div>
                <div className="searchbar">
                    <Search />
                    <input placeholder="Search friends, posts, videos.." className="searchInput" />
                </div>

            <div className="navbarRight"></div>
        </div>
    )
}