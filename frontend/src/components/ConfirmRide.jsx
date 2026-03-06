import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setVehiclePanel(false)
       }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        <div className='flex gap-2 justify-between flex-col items-center'>
            <img className='h-20' src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" />
            <div className='w-full'>
                <div></div>
                <div></div>
                <dialog></dialog>
            </div>
            <div>
                <button className='w-full bg-green-400 text-white font-semibold p-2 rounded-lg'>Confirm Ride</button>
            </div>

        </div>
    </div>
  )
}

export default ConfirmRide
