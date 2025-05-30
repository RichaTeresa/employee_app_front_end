

import kvLogin from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png"

import './login.css'
// import Input from "../../components/input/input";
import Button from "../../components/button/Button";
import { useEffect, useRef, useState, type SetStateAction } from "react";
import LoginInput from "../../components/login-input/login-input";
import { UseMousePosition } from "../../hooks/useMousePosition";
import { useNavigate } from "react-router-dom";

const validUser={
  ValidUsername:"username",
  ValidPassword:"password"
}



const Login = () => {

  const mousePointer=UseMousePosition()

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("") 
  const navigate=useNavigate()
  

  const saveUsername=(event: { target: { value: SetStateAction<string>; }; })=>{
    setUsername(event.target.value)
    // localStorage.setItem('username',username)
  }
  
  const savePassword=(event: { target: { value: SetStateAction<string>; }; })=>{
    setPassword(event.target.value)
    // localStorage.setItem('password',password)
  }

  const[validUsername,setValidUsername]=useState(false)
  useEffect(()=>{
    if(username.length<10){
      setValidUsername(true)
      return;
    }

    setValidUsername(false)
    return;
  },[username])
   
  const isValid=()=>{
    if (!validUsername)
      return (<p style={{color:"red"}}>Username must not be more than 10 characters!</p>)
  }

const userNameRef=useRef<HTMLInputElement>(null)



useEffect(()=>
{
  if(userNameRef.current)
    userNameRef.current.focus();
},[username])


const [showPassword,setShowPassword]=useState(localStorage.getItem("showPassword")==="true")


// useEffect(()=>{
//   localStorage.getItem('password')
// },[showPassword])

 

const validLogin=()=>{
   
  if(password===validUser.ValidPassword && username===validUser.ValidUsername){
     localStorage.setItem("isLoggedIn","true")
    navigate("/employees")
  }
}

    
 
  

  return (
    <>
    <div className="container">
      <div className="leftside">
        
            <img className="circle" src={kvLogin} alt="kv-login"></img>
        
      </div>

      <div className="rightside">

        <p>X coordinate:{mousePointer.x} Y coordinate :{mousePointer.y}</p>
        <div className="login-box">
        <img className="logo" src={kvLogo} alt="kv-logo"></img>
      {/* <form> */}
        <LoginInput id="username" type="text" placeholder="username"  value={username} onChange={saveUsername} ref={userNameRef} 
        endAdornment={<button disabled={username.length===0} onClick={()=>setUsername("")}>clear</button>} >

        </LoginInput>
        {isValid()}
      <LoginInput id="password" type={showPassword? "text":"password"}  placeholder="password"  value={password} onChange={savePassword} 
      endAdornment={<button disabled={password.length===0} onClick={()=>setPassword("")}>clear</button>}></LoginInput>
      <LoginInput id="showPassword" type="checkbox" checked={showPassword} label="show password"   onChange={()=>   setShowPassword((prev)=>{
        localStorage.setItem("showPassword",String(!prev))
        return !prev
      })}>
      </LoginInput>
      
      <Button type="submit" buttonName="logging in" id="login" className="login-button" onClick={validLogin}></Button>
      {/* </form> */}
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;
