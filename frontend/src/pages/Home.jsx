import React, { useState,useRef }  from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import ConfirmRide from '../components/ConfirmRide'
import VehiclePanel from '../components/VehiclePanel'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
 const [confirmRidePanel, setConfirmRidePanel] = useState(false)

  const submitHandler=(e)=>{
    e.preventDefault()
  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {height:'70%', padding:24})
      gsap.to(panelCloseRef.current,{opacity:1})
    } else {
      gsap.to(panelRef.current, {height:0})
      gsap.to(panelCloseRef.current,{opacity:0})
    }
  },[panelOpen])

  
  useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current, {
      transform:'translateY(0%)'
    })
  } else {
    gsap.to(confirmRidePanelRef.current, {
      transform:'translateY(100%)'
    })
  }
},[confirmRidePanel])


  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0%)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://icon2.cleanpng.com/20180514/vuw/kisspng-uber-eats-delivery-take-out-logo-5afa521a2f9e72.6198463315263544581951.jpg" alt="" />

      <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/rLmwmpHGPBq1Uz2r6MUIJiLDFYQ5pN5-9MuPqU69ZSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdGF4aS1zZXJ2/aWNlLXB1YmxpYy10/cmFuc3BvcnQtYXBw/LXRlY2hub2xvZ3lf/MjQ5MDgtMjgyODUu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0  w-full'>
        <div className='h-[30%] bg-white p-6 relative'>
         <h5 ref={panelCloseRef}
         onClick={()=>{
          setPanelOpen(false)
         }}
          className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-double-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find Trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
          <input
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
          type="text" 
          placeholder='Add a pickup location' />
          <input
           onClick={()=>{
            setPanelOpen(true)
          }}
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter the destination' />
        </form>
        </div>
<div ref={panelRef} className=' bg-white h-0'>
  <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel}/>

</div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12' >
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
        <div ref={confirmRidePanelRef} className='fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12' >
      <ConfirmRide/>
      </div>
    </div>
  )
}

export default Home
