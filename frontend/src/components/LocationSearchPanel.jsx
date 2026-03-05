import React from 'react'

const LocationSearchPanel = () => {

  //sample array for loactions
  const locations=[
    "Nikhar kunj, Shakti Market , Hanuman Nagar patna -20",
    "Krishna kunj, Vivek vihar , Hanuman Nagar patna -20",
    "BCS, Bhabhe colony , Hanuman Nagar patna -20",
    "Dharam Nivas, Hanuman Nagar patna -20",
  ]
  return (
    <div>
      {/*this is a sample data */}
      {
        locations.map(function(elem){
          return   <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 w-12 rounded-full items-center justify-center'><i className="ri-map-pin-2-fill "></i></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        })
      }
    

    </div>
  )
}

export default LocationSearchPanel
