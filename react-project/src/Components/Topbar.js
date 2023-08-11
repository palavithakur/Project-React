import React from 'react'
import {RxCross2} from 'react-icons/rx';
import '../Componentcss/Topbar.css';
function Topbar() {
  return (
  
    <div className="top-bar">
      <div className="Back-imag">
        <div className="toptext">
          <p className="t-text">0D | 00H | 00M |00S <span className="bold">Open Doors To A World Of Fashion Get <a href='#' className="text-link">Get Your Offer </a></span></p>
        </div> 
        <div className="div-icon">
          <RxCross2 className="i-cross"/>
        </div>
        </div>
    </div>
    

  )
}

export default Topbar
