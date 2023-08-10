import React from 'react'
import '../Componentcss/Navbar.css'
import { AiOutlineHeart,AiOutlineUser} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';
import {MdKeyboardArrowDown} from 'react-icons/md';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="t-div">
      <p className="text1"><RxHamburgerMenu className="icon toggle"/>Categories</p>
      </div>
      <ul className="nav-list">
        <li className="home"><a href="#">Home<MdKeyboardArrowDown className="icon arrow"/></a></li>
        <li><a href="#">Shop<MdKeyboardArrowDown className="icon arrow"/></a></li>
        <li><a href="#">Pages<MdKeyboardArrowDown className="icon arrow"/></a></li>
        <li><a href="#">About<MdKeyboardArrowDown className="icon arrow"/></a></li>
        <li><a href="#">Blog<MdKeyboardArrowDown className="icon arrow"/></a></li>
        <li><a href="#">Contact<MdKeyboardArrowDown className="icon arrow"/></a></li>

      </ul>
      <div className="icons">
        <AiOutlineHeart className="icon heart"/>
       <BsCart2  className="icon cart"/> <span className="sup">3</span>
        <AiOutlineUser className="icon profile"/>
      </div>
    </nav>
  )
};

export default Navbar;
