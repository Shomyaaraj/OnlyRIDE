import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1637044875391-d3e7efc44596?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D)] relative h-screen  pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8 ' src="https://imgs.search.brave.com/gjhYN3vsQ27AB0GjvunqfqgfZqK7uoFGXrNkZaWag-I/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8wLzEyLzYv/dWJlci1sb2dvLXVi/ZXItbG9nby1DRVY3/blVOMF90LmpwZw" alt="Uber Logo" />
        <div className='bg-white pb-7 py-4 px-4 '>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
