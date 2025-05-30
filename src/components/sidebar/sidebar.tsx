import kvLogo from '../../assets/kv-logo.png'
import icon from '../../assets/icon.svg'
import './sidebar.css'


export const Sidebar=()=>{
    return(
        <>
        <div className="aside">
            <img src={kvLogo} width="300px"></img>
        <div className="icon-box">
             <div className="icon-circle">
                 <img src={icon} width="20px"></img>
             </div>
             <div className='icon-text'>
             <p className="txt">Employee list</p>
             </div>
        </div>
        </div>

        

        </>
    )
}