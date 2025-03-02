import React, { useState } from "react"

import Register from "./Register";
import Login from "./Login";

const Auth = ({setUser}) => {

  const [isRegister, setRegister] = useState(false)
  

  return isRegister ? (<Register setUser={setUser} setRegister={setRegister}/>) : (<Login setUser={setUser} setRegister={setRegister} />)
  
};

export default Auth;
