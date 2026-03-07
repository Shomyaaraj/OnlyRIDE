import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-3-line"></i>
        </Link>
      <div className='h-1/2'>
         <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/rLmwmpHGPBq1Uz2r6MUIJiLDFYQ5pN5-9MuPqU69ZSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdGF4aS1zZXJ2/aWNlLXB1YmxpYy10/cmFuc3BvcnQtYXBw/LXRlY2hub2xvZ3lf/MjQ5MDgtMjgyODUu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" alt="" />
      </div>
      <div className='h=1/2 p-4'>
        <div className='flex items-center justify-between'>
         <img className='h-10' src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" />
         <div className='text-right'>
          <h2 className='text-lg font-medium'>Shomya </h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>BR01 AB 7488 </h4>
          <p className='text-sm text-gray-600'>Maurti suzuki Alto</p>
         </div>
       </div>
       
        <div className='flex gap-2 justify-between flex-col items-center'>
           
            <div className='w-full mt-5'>
               
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>panta-20, Bihar</p>
                  </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                  <i className="ri-wallet-3-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>$193.60</h3>
                    <p className='text-sm -mt-1 text-gray-600'>panta-20, Bihar</p>
                  </div>
                </div>
            </div>
            
             
        </div>
         <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Make Payment</button>
      </div>
    </div>
  )
}

export default Riding
