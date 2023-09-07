
import Navbar from '../components/Navbar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'
import Sidebar from '../components/sidebar/Sidebar'
import './profile.css'

export default function Profile() {
  return (
    <>
        <Navbar />
          <div className="profile">
              <Sidebar/>
              <div className="profileRight">
                <div className="profileRightTop">
                  <div className="profileCover">
                    <img className="profileCoverImg" src="assets/posts/5post.jpeg" alt='' />
                    <img className="profileUserImg" src="assets/person/2.person.jpeg" alt='' />
                  </div>
                </div>
                <div className="profileInfo">
                  <h4 className='profileInfoName'>Kirk Hill</h4>
                  <span className='profileInfoDesc'>Hello Joy!</span>
                </div>
                <div className="profileRightBottom">
                  <Feed/>
                  <Rightbar/>
                </div>
                
              </div>
          </div>
        </>
  )
}
