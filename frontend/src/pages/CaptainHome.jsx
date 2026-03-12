import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = (props) => {

const[ridePopupPanel, setRidePopupPanel]=useState(true)
const[confirmRidePopupPanel, setConfirmRidePopupPanel]=useState(false)
const ridePopupPanelRef =useRef(null)
const confirmridePopupPanelRef =useRef(null)

 useGSAP(function(){
  if(ridePopupPanel){
    gsap.to(ridePopupPanelRef.current, {
      transform:'translateY(0%)'
    })
  } else {
    gsap.to(ridePopupPanelRef.current, {
      transform:'translateY(100%)'
    })
  }
},[ridePopupPanel])


useGSAP(function(){
  if(confirmRidePopupPanel){
    gsap.to(confirmridePopupPanelRef.current, {
      transform:'translateY(0%)'
    })
  } else {
    gsap.to(confirmridePopupPanelRef.current, {
      transform:'translateY(100%)'
    })
  }
},[confirmRidePopupPanel])

  return (
    <div className='h-screen'>
       <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16 ' src="https://icon2.cleanpng.com/20180514/vuw/kisspng-uber-eats-delivery-take-out-logo-5afa521a2f9e72.6198463315263544581951.jpg" alt="" />
         <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
       </div>
      <div className='h-3/5'>
         <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/rLmwmpHGPBq1Uz2r6MUIJiLDFYQ5pN5-9MuPqU69ZSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdGF4aS1zZXJ2/aWNlLXB1YmxpYy10/cmFuc3BvcnQtYXBw/LXRlY2hub2xvZ3lf/MjQ5MDgtMjgyODUu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" alt="" />
      </div>
      <div className='h-2/5 p-6'>
      <CaptainDetails/>
      </div>
      <div
 ref={ridePopupPanelRef}
 className='fixed w-full z-10 bg-white bottom-0 px-3 py-10 pt-12 translate-y-full'
>
  <RidePopUp
    setRidePopupPanel={setRidePopupPanel}
    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
  />
</div>

<div
 ref={confirmridePopupPanelRef}
 className='fixed w-full z-10 bg-white bottom-0 px-3 py-10 pt-12 translate-y-full'
>
  <ConfirmRidePopUp
    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
    setRidePopupPanel={setRidePopupPanel}
  />
</div>
    </div>
  )
}

export default CaptainHome
