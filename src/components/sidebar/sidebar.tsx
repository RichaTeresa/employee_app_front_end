import kvLogo from '../../assets/kv-logo.png'
import icon from '../../assets/icon.svg'
import './sidebar.css'
import { Link } from 'react-router-dom'


export const Sidebar=()=>{
    return(
        <>
        <div className='white-top-section'>
            
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