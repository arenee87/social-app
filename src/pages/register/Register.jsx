import './register.css'

export default function Register() {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">PieceofPeace</h3>
            <span className="loginDesc">
              Connect with your peaceful friends!
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Re-enter Password" className="loginInput" />
              <button className="loginButton">Sign Up</button>
             
              <button className="loginRegisterButton">Log into Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
