import React, { useState } from 'react'
import "./App.css"


const App = () => {

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmpassword] = useState("");
  const [emailerr, setemailErr] = useState(true);
  const [passerr, setpasserr] = useState(true);
  const [confirmpasserr, setconfirmpasserr] = useState(true);



  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "Email") setEmail(value);
    else if (name === "Password") setPassword(value);
    else if (name === "Confirm-pass") setConfirmpassword(value);

  }

  const handlesubmit = (event) => {
    event.preventDefault();

    validateform(Email, password);


  }
  const validateform = (Email, password) => {
    if (!Email) setemailErr(true) ( alert("can’t submit the form"));
    if (Email.includes("@" || ".")) setemailErr(false) 
    if (!password) setpasserr(true) ( alert("can’t submit the form"))
    if (password.length > 8) setpasserr(false);
    if (!ConfirmPassword) setconfirmpasserr(true) ( alert("can’t submit the form"))
    if (ConfirmPassword === password) setconfirmpasserr(false);

   

  }

  return (
    <form onSubmit={handlesubmit}>
      <div className='container'>
        <div className='Email'>
          <label>Email</label>
          <input name='Email' type="text" value={Email} onChange={handlechange} />
          <div className='err'>
            {emailerr ? "Invalid Email"  : "  "}
          </div>

        </div>
        <br />
        <div className='password'>
          <label>Password</label> 
          <input name='Password' type="password" value={password} onChange={handlechange} />
          <div className='err'>
            {passerr ? "Password must be at least 8 characters" : " "}
          </div>
        </div>
        <br />
        <div className='confirm-pass'>
          <label>Confirm</label>
          <input name='Confirm-pass' type="text" value={ConfirmPassword} onChange={handlechange} />
          <div className='err'>
            {confirmpasserr ? "password do not match" : " "}
          </div>

        </div>
        <div className='btn'>
          <input className="btn btn-primary" type="submit" value="Sing Up" />
        </div>
      </div>
    </form>

  )
}

export default App