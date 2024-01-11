import React, { useState } from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import mail_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

  const [action,setAction] = useState("Login");


  return (
    <div className="container">
      <div className="title">
        <div className="text">{action}</div>
      </div>
      <hr />
      <div className="inputs-container">
        {action==="Login"?<div></div>:<div className="input">
        <img src={user_icon} width={30} alt=""/>
      <input type="text" placeholder="Name" />
      </div>}
      
      <div className="input">
      <img src={mail_icon} width={30} alt=""/>
      <input type="email" placeholder="youremail@gmail.com" />
      </div>
      <div className="input">
      <img src={password_icon} width={30} alt=""/>
      <input type="password" placeholder="Password" />
      </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password? <span>Click Here!</span></div>}
      
      <div className="submit-btns">
      <button className={action==="Login" ? "submit gray" : "submit"} onClick={ ()=>{setAction("Sign Up")} }>Sign Up</button>
      <button className={action==="Sign Up" ? "submit gray" : "submit"} onClick={ ()=>{setAction("Login")} }>Login</button>
      </div>
      <a className="link-test" href="https://stunning-starship-ecd7f1.netlify.app/" target="_blank"><button className="begin-btn">Test</button></a>
    </div>
  )
}

export default LoginSignup