import "./post.css"
import { ExpandMore, ThumbUp, Favorite  } from "@mui/icons-material"

export default function Post() {
  return (
    <div>
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="assets/person/4.person.jpeg" alt=""/>
                    <span className="postUsername">Laila Lightbeam</span>
                    <span className="postDate">12 minutes ago</span>
                </div>
                <div className="postTopRight"></div>
                <ExpandMore/>
            </div>
            <div className="postCenter">
                <span className="postText"> Hey! Look at this view!</span>
                <img className="postImg" src="assets/posts/1post.jpeg" alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp htmlColor="turquoise" className="likeIcon"/>
                    <Favorite htmlColor="pink" className="likeIcon"/>
                    <span className="postLikeCounter">16 people like this!</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">9 comments</div>
                </div>
            </div>
        </div>
    </div>

<div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="assets/person/17.person.jpeg" alt=""/>
                <span className="postUsername">Luke Danes</span>
                <span className="postDate">16 minutes ago</span>
            </div>
            <div className="postTopRight"></div>
            <ExpandMore/>
        </div>
        <div className="postCenter">
            <span className="postText"> It's about the road you take!</span>
            <img className="postImg" src="assets/posts/2post.jpeg" alt=""/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUp htmlColor="turquoise" className="likeIcon"/>
                <Favorite htmlColor="pink" className="likeIcon"/>
                <span className="postLikeCounter">22 people like this!</span>
            </div>
            <div className="postBottomRight">
                <div className="postCommentText">8 comments</div>
            </div>
        </div>
    </div>
</div>

<div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="assets/person/18.person.jpeg" alt=""/>
                <span className="postUsername">Chad Mulberry</span>
                <span className="postDate">42 minutes ago</span>
            </div>
            <div className="postTopRight"></div>
            <ExpandMore/>
        </div>
        <div className="postCenter">
            <span className="postText"> To be a kid again!</span>
            <img className="postImg" src="assets/posts/6post.jpeg" alt=""/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUp htmlColor="turquoise" className="likeIcon"/>
                <Favorite htmlColor="pink" className="likeIcon"/>
                <span className="postLikeCounter">29 people like this!</span>
            </div>
            <div className="postBottomRight">
                <div className="postCommentText">11 comments</div>
            </div>
        </div>
    </div>
</div>


</div>
)

}
