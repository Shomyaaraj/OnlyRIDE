import React from 'react'



const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setVehiclePanel(false)
       }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

         <div onClick={()=>{
            props.setConfirmRidePanel(true)
         }} className='flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-14' src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" />
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span> </h4> 
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable , Compact Rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$193.20</h2>
          </div>

         <div onClick={()=>{
            props.setConfirmRidePanel(true)
         }} className='flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-11' src="https://imgs.search.brave.com/5L_okmhZTNp3xTMy3TdQhw46J637Sw4yYqA97JDj3J4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS81/LzE4LzAvcmV0cm8t/bW90b3JjeWNsZS1p/bGx1c3RyYXRpb24t/b2YtdmludGFnZS1t/b3RvcmN5Y2xlLVJF/cEE1YmRwX3QuanBn" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span> </h4> 
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable moto bike  Rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$65</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmRidePanel(true)
         }} className='flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-12' src="https://imgs.search.brave.com/x6IGLuBn5ZV-wMl5oiXZNb6J1IeuqgxS70IAdQUwDM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MDI2LzU1NS9zbWFs/bC92aWJyYW50LXll/bGxvdy1hdXRvLXJp/Y2tzaGF3LXdpdGgt/b3Blbi1pbnRlcmlv/ci1wbmcucG5n" />
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-fill"></i>3</span> </h4> 
              <h5 className='font-medium text-sm'>1 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto Rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$98</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
