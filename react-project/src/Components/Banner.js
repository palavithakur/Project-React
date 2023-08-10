import React from 'react';
import '../Componentcss/Banner.css';
import img1 from '../images/banner-img.png';
import img2 from '../images/bag.png';
import { BsEyeglasses, BsCamera ,BsArrowRight} from 'react-icons/bs';
import { RiArchiveDrawerFill,RiMedicineBottleLine } from 'react-icons/ri';
import { GrCloudComputer } from 'react-icons/gr';
import { GiStoneCrafting,GiAntiAircraftGun,GiWatch  } from  'react-icons/gi';
import { MdKeyboardArrowDown} from 'react-icons/md';
function Banner() {
  return (
   <div className="banner">
        <ul className="list">
             <li className="li-list">  <BsEyeglasses className="ricons"/> Fashion <MdKeyboardArrowDown className="i arrow1"/></li>
             <li className="li-list">  <GrCloudComputer className="ricons"/> Electronics <MdKeyboardArrowDown className="i arrow2"/></li>
             <li className="li-list">  <RiArchiveDrawerFill className="ricons"/> Home Decor <MdKeyboardArrowDown className="i arrow3"/></li>
             <li className="li-list">  <RiMedicineBottleLine className="ricons"/> Medicine</li>
             <li className="li-list">  <RiArchiveDrawerFill className="ricons"/> Furniture</li>
             <li className="li-list">  <GiStoneCrafting className="ricons"/> Crafts</li>
             <li className="li-list">  <GiAntiAircraftGun className="ricons"/> Accessories</li>
             <li className="li-list">  <BsCamera Camera className="ricons"/> Camera </li>
        </ul>
        <div className="section-center">
            <div className="left-sec">
                <p className="text-1"><GiWatch className="i watch"/> Smartwatch </p>   
                <h2 className="text-head"> Bloosom Smart Watch</h2>
                <p className="shop-text">Shop Now <BsArrowRight className="r arrow"/></p>
            </div>
            <div className="banner-img">
            <img src={img1} className="watch-img"/>
            </div>
        </div>
        <div className="rigth-sec">
            <div className="bg-color">
                <img src={img2} alt="img" className="bag-img"/>
                <p className="text-bag"> Yantiti Leather Bags</p>
                <h4 className="prize-text"> $29.99</h4>
         </div>
         </div>
    </div>
  )
};

export default Banner;
