import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setVehicleFound(false)
       }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Looking For a Captain</h3>
        <div className='flex gap-2 justify-between flex-col items-center'>
            <img className='h-20' src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" />
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
            
            
        </div>
    </div>
  )
}

export default LookingForDriver
