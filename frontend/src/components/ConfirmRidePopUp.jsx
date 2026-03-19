import React from 'react'

const ConfirmRidePopUp = (props) => {
  return (
     <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{props.setRidePopupPanel(false)
           
       }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>
         <div className='flex items-center justify-between p-3 bg-yellow-200 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-12 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/ynLPMsb7a5nfdC_qAuctJSSeOCkr2rtrCsWl-Xtnl9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc5/MTgzMzM0OS9waG90/by9zdHVkZW50LXVu/aXZlcnNpdHktYW5k/LXBvcnRyYWl0LW9m/LWJsYWNrLXdvbWFu/LWluLWxpYnJhcnkt/Zm9yLWxlYXJuaW5n/LWVkdWNhdGlvbi1h/bmQtcmVhZGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/aXRhQlNOSlZPWHN2/RzBQT1YzY1RseVZJ/aTlGYnpDOVlHZHdj/TnNGZjkxND0" alt="" />
                <h2 className='text-l font-medium'>Saira </h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
         </div>
        <div className='flex gap-2 justify-between flex-col items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                  <i className="ri-user-location-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>panta-20, Bihar</p>
                  </div>
                </div>
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
            
                <button onClick={()=>{
                
                
                }} className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>

                <button onClick={()=>{
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
                }} className='w-full bg-red-500 text-white font-semibold p-2 rounded-lg mt-1'>Cancel</button>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
