import kvLogo from '../../assets/kv-logo.png'
import icon from '../../assets/icon.svg'
import './sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/Button'


export const Sidebar=()=>{
    const navigate = useNavigate();
    const onLogout=()=>{
        localStorage.setItem("token","")
        navigate("/")
    }

    return(
        <>
        <div className='white-top-section'>
            <Button
                type="submit"
                buttonName="Logout"
                className="Logout"
                id="Logout"
                onClick={onLogout}
              ></Button>
        </div>
        <div className="aside">
            <div className='rectangle'>
            <img className="kv-logo-img"src={kvLogo} width="300px"></img>
            </div>
            <Link to="/employees" style={{textDecoration:"none"}} >
        <div className="icon-box">
             <div className="icon-circle">
                 <img src={icon} width="20px"></img>
             </div>
             <div className='icon-text'>
             <p className="txt">Employee list</p>
             </div>
        </div>
        </Link>
        </div>

        

        </>
    )
}