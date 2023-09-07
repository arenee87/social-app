import "./post.css"
import { ExpandMore, ThumbUp, Favorite  } from "@mui/icons-material"
import { Users } from "../../dynamicData"
import { useState } from "react"

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setisLiked] = useState(false)

    const likeHandler =() =>{
        setLike(isLiked ? like-1 : like+1)
        setisLiked(!isLiked)
    }

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
                        <span className="postDate">{post.time}</span>
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
                        <ThumbUp htmlColor="turquoise" className="likeIcon" onClick={likeHandler}/>
                        <Favorite htmlColor="pink" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like this!</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)}
