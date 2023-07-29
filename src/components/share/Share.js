import React from 'react'
import "./share.css"
import { PermMedia } from '@mui/icons-material'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="assets/assets/person/3.person.jpeg" alt=""/>

                <input placeholder="What it do?" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shareIcon"/>
                        
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
