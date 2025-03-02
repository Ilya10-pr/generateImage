import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { loginUser } from "./services";

const Login = ({setUser, setRegister}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
  
    const {register, handleSubmit} = useForm()

    const handleLogin = async (data) => {
      console.log(data)
      const response = await loginUser(data)
      if(response){ 
        window.localStorage.setItem("clientId", response.clientId)
        setUser(response.clientId)
      }
    }


  return (
    <div style={{width: 400, height: 200, border: "1px solid", borderRadius: 5, padding: 8}}>
      <h3 style={{textAlign: "center"}}>Log In</h3>
			<form style={{display: "flex", alignItems: "center", flexDirection: "column"}}  onSubmit={handleSubmit(handleLogin)}>
				<div>
					<input 
          style={{width: 300, height: 20,marginBottom: 5}}
          value={email} 
          type="text" 
          placeholder="Enter email"
					{...register("email", {required: true})}
					onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<input 
          style={{width: 300, height: 20,marginBottom: 5}}
          value={password} 
          type="password" 
          placeholder="Enter password"
					{...register("password", {required: true})}
					onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div>
					<button style={{width: 300, height: 20,marginRight: 5, marginBottom: 5}} type="submit">Send</button>
          <button style={{width: 300, height: 20,marginBottom: 5}} onClick={() => setRegister(true)}>Registration</button>
				</div>
			</form>
		</div>
  )
};

export default Login;
