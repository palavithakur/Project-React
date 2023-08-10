import React from 'react'
import '../Componentcss/Section.css';
import {TbTruckDelivery,TbTruckReturn} from 'react-icons/tb';
import {VscWorkspaceTrusted} from 'react-icons/vsc';
import {RiSecurePaymentLine} from 'react-icons/ri';
import {AiOutlineFileProtect} from 'react-icons/ai';
function Section() {
  return (
    <div className="container">
        <div className="text-center">
           <TbTruckDelivery className="icons2"/>
            <p className="text-div1">
                Fast & Secure Delivery
            </p>
        </div>
        <div className="text-center">
            <VscWorkspaceTrusted className="icons2"/>
            <p className="text-div2">
                100% Guarantee On Product
            </p>
        </div>
        <div className="text-center">
            <TbTruckReturn className="icons2"/>
            <p className="text-div2">
                24 Hour Return Policy
            </p>
        </div>
        <div className="text-center">
            <RiSecurePaymentLine className="icons2"/>
            <p className="text-div2">
                24 Hour Return Policy
            </p>
        </div>
        <div className="text-center">
            <AiOutlineFileProtect className="icons2"/>
            <p className="text-div2">
                Next Level Pro Quality
            </p>
        </div>
    </div>
  )
};

export default Section
