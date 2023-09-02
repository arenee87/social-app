import "./post.css"
import { ExpandMore, ThumbUp, Favorite  } from "@mui/icons-material"
import { Users } from "../../dynamicData"

export default function Post({post}) {
    
  return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" 
                        src={Users.filter((u) => u.id === post.userId)[0].profilePic} alt=""/>
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <ExpandMore/>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImg" src={post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp htmlColor="turquoise" className="likeIcon"/>
                        <Favorite htmlColor="pink" className="likeIcon"/>
                        <span className="postLikeCounter">{post.like} people like this!</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)}
