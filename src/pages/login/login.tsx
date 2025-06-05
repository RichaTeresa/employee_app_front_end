import kvLogin from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png";

import "./login.css";
// import Input from "../../components/input/input";
import Button from "../../components/button/Button";
import { useEffect, useRef, useState, type SetStateAction } from "react";
import LoginInput from "../../components/login-input/login-input";
import { UseMousePosition } from "../../hooks/useMousePosition";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";

// const validUser = {
//   ValidUsername: "username",
//   ValidPassword: "password",
// };

const Login = () => {

   const isLoggedIn=()=>{
  const token=localStorage.getItem("token");
  if(token)
   { return true;}
  return false
}


if(isLoggedIn()){
  return (<Navigate to="/employees"></Navigate>)
}
  const [error, setError] = useState("");
  const [login,{isLoading}] = useLoginMutation();
  const mousePointer = UseMousePosition();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    login({ email: username, password: password })
    .unwrap()
    .then((response)=>{
    localStorage.setItem("token",response.accessToken);
    navigate("/employees");
    }).catch((error)=>{
      console.log(error)
      setError(error.data.message)
    })
  };

  const saveUsername = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
    // localStorage.setItem('username',username)
  };

  const savePassword = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
    // localStorage.setItem('password',password)
  };

  const [validUsername, setValidUsername] = useState(false);
  useEffect(() => {
    if (username.length < 20 ) {
      setValidUsername(true);
      return;
    }

    setValidUsername(false);
    return;
  }, [username]);

  useEffect(()=>{
    if(username.includes('@')){
      setValidUsername(true);
      return;
    }
    setValidUsername(false);
    return;
  },[username])

  const isValid = () => {
    if (!validUsername && username.length>20)
      return (
        <p style={{ color: "red" }}>
          Username must not be more than 20 characters!
        </p>
      );
    else if(username && !validUsername)  
      return (
        <p style={{ color: "red" }}>
          Username must be an email
        </p>
      );

  };

  const userNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userNameRef.current) userNameRef.current.focus();
  }, [username]);

  const [showPassword, setShowPassword] = useState(
    localStorage.getItem("showPassword") === "true"
  );

  // useEffect(()=>{
  //   localStorage.getItem('password')
  // },[showPassword])



  return (
    <>
      <div className="container">
        <div className="leftside">
          <img className="circle" src={kvLogin} alt="kv-login"></img>
        </div>

        <div className="rightside">
          <p>
            X coordinate:{mousePointer.x} Y coordinate :{mousePointer.y}
          </p>
          <div className="login-box">
            <img className="logo" src={kvLogo} alt="kv-logo"></img>
            {/* <form> */}
            <LoginInput
              id="username"
              type="text"
              label="Username"
              placeholder=" "
              value={username}
              onChange={saveUsername}
              ref={userNameRef}
              endAdornment={
                <button 
                  disabled={username.length === 0}
                  onClick={() => setUsername("")}
                >
                  clear
                </button>
              }
            ></LoginInput>
            {isValid()}
            <LoginInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder=" "
              value={password}
              onChange={savePassword}
              endAdornment={
                <button
                  disabled={password.length === 0}
                  onClick={() => setPassword("")}
                >
                  clear
                </button>
              }
            ></LoginInput>
            <div className="checkbox-container">
            <LoginInput
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={() =>
                setShowPassword((prev) => {
                  localStorage.setItem("showPassword", String(!prev));
                  return !prev;
                })
              }
            ></LoginInput>
            <label htmlFor="showPassword">show password</label>
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <Button
              type="submit"
              buttonName="logging in"
              id="login"
              className="login-button"
              onClick={onLogin}
              disabled={isLoading}
            ></Button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
