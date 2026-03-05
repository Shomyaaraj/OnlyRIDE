import React, { useState,useRef }  from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

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


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://icon2.cleanpng.com/20180514/vuw/kisspng-uber-eats-delivery-take-out-logo-5afa521a2f9e72.6198463315263544581951.jpg" alt="" />

      <div className='h-screen w-screen'>
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
  <LocationSearchPanel />

</div>
      </div>
      <div className='fixed w-full z-10 bg-white bottom-0 p-3 px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

         <div className='flex border-2 border-gray-200 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-14' src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" />
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span> </h4> 
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable , Compact Rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$193.20</h2>
          </div>

         <div className='flex border-2 border-gray-200 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-11' src="https://imgs.search.brave.com/5L_okmhZTNp3xTMy3TdQhw46J637Sw4yYqA97JDj3J4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS81/LzE4LzAvcmV0cm8t/bW90b3JjeWNsZS1p/bGx1c3RyYXRpb24t/b2YtdmludGFnZS1t/b3RvcmN5Y2xlLVJF/cEE1YmRwX3QuanBn" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span> </h4> 
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable moto bike  Rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$65</h2>
          </div>

          <div className='flex border-2 border-gray-200 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-12' src="https://imgs.search.brave.com/x6IGLuBn5ZV-wMl5oiXZNb6J1IeuqgxS70IAdQUwDM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MDI2LzU1NS9zbWFs/bC92aWJyYW50LXll/bGxvdy1hdXRvLXJp/Y2tzaGF3LXdpdGgt/b3Blbi1pbnRlcmlv/ci1wbmcucG5n" />
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-fill"></i>3</span> </h4> 
              <h5 className='font-medium text-sm'>1 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto Rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$98</h2>
          </div>
      </div>
    </div>
  )
}

export default Home
