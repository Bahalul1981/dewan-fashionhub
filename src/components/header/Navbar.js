import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
  const myalart=()=>{
    alert("I am not ready yet. Working progress.......")

 }
  return (
    <div>
        
        <header className='navbar'>

            
               
                 <div className='logoimg'><img src="./navlogo.PNG" alt="logo" height={250} /></div>

                        <ul className='navbarcontent'>

                            <li><NavLink className='chnagnavcolor' to="/">HOME</NavLink></li>
                            <li><NavLink className='chnagnavcolor'to="/kvinnor">KVINNOR</NavLink></li>
                            <li><NavLink className='chnagnavcolor'to="/man">MÄN</NavLink></li>
                            <li><NavLink className='chnagnavcolor'to="/barn">BARN</NavLink></li>
                            <li><NavLink className='chnagnavcolor'to="/rea">REA</NavLink></li>
                            <li><div className='account' onClick={myalart}><img src="/login.png" alt="" height={30} /></div></li>
                            <li><div className='shoping' onClick={myalart}><img src="/shoping.png" alt="" height={30}/></div></li>

                        </ul>

                     
            
        </header>
      
    </div>
  )
}

export default Navbar
