import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon htmlColor="IndianRed" className="birthdayIcon" />
          <span className="birthdayText">
            <b>Piper Phelps</b> and <b>3 other friends</b> have a birthday today! 
          </span>
        </div>

        
      </div>
    </div>
  )
}
