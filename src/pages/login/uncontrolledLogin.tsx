import "./uncontrolledLogin.css";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import NewLoginInput from "../../components/login-input/new-login-input";
import NewButton from "../../components/button/new-button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const passwordRef=useRef<HTMLInputElement | null>(null);

  const clearButtonRef=useRef<HTMLButtonElement| null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

const clearUsername=()=>{
    if(!usernameRef.current) return;
    usernameRef.current.value="";
    if(clearButtonRef.current)
        clearButtonRef.current.disabled=true
}

const clearPassword=()=>{
    if(!passwordRef.current) return;
    passwordRef.current.value="";
}

const clearButtonEnable=()=>{
   if(clearButtonRef.current) {
    if(usernameRef.current && usernameRef.current.value.length>0){
        clearButtonRef.current.disabled=false;
        clearButtonRef.current.onclick=clearUsername
    }
    else{
        clearButtonRef.current.disabled=true;
    }
   }
   
}

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <NewLoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              name="Username"
              onChange={clearButtonEnable}
              endAdornment={
                <button type="button" disabled={true} ref={clearButtonRef} onClick={clearUsername}>clear</button>
              }
            />

            <NewLoginInput id="login-password-input" label="Password" type="password" ref={passwordRef} name="password" 
            endAdornment={
                <button type="button" onClick={clearPassword}>clear</button>
              } />

            <NewButton type="submit" className="login-button">
              Log in
            </NewButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
