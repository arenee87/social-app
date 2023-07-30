import "./post.css"
import { ExpandMore, ThumbUp, Favorite  } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="assets/assets/person/4.person.jpeg" alt=""/>
                    <span className="postUsername">Laila Lightbeam</span>
                    <span className="postDate">12 minutes ago</span>
                </div>
                <div className="postTopRight"></div>
                <ExpandMore/>
            </div>
            <div className="postCenter">
                <span className="postText"> Hey! Look at this view!</span>
                <img className="postImg" src="assets/assets/posts/1post.jpeg" alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp htmlColor="turquoise" className="likeIcon"/>
                    <Favorite htmlColor="pink" className="likeIcon"/>
                    <span className="postLikeCounter">35 people like this!</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">9 comments</div>
                </div>
            </div>
        </div>
    </div>
  )

}
