import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/f-ovL6VnhKuTXPcG3ufQh39VWwPwTnJIh3q7kATD7Cs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/NTgzMDA1Mi9waG90/by9hLXNwb3J0cy1z/cGVjdGF0b3ItY2Vs/ZWJyYXRlcy1hbmQt/aGlnaC1maXZlcy10/aGUtcGVyc29uLW5l/eHQtdG8taGltLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/WTg2bThCQVh2UGtG/XzJEMjNfVUMyVGdU/TnVveGhYaXZOZ2ha/UE9zd2QwPQ" alt="" />
          <h4 className='text-lg font-medium'>Ayush Anand</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'> $190.7</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
      </div>
        <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-extralight ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>Hours Online</p>
          </div>
          <div className='text-center' >
            <i className="text-3xl mb-2 font-extralight ri-dashboard-3-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-extralight ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
