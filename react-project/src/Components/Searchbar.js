import React from 'react';
import '../Componentcss/Searchbar.css';
// import { FaChevronDown} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import logo from '../images/logo.jpeg';
function Searchbar() {
  return (
    <div className="search-bar">
      <div className="logo-div">
        <img src={logo} alt="" className="logo" /> 
      </div>
      <div class="input-div"> 
      <BiSearch className="i search"/>
      <input type="text" placeholder="What are you looking for..." className="top-input"/>
      </div>
      <select className="sel">
      <option>USD</option>  
      </select>
      <select className="sel"> 
      <option>EN</option> </select>
      
    </div>
  )
}

export default Searchbar
