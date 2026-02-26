import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
        const [email, setEmail]=useState('')
        const [password, setPassword]=useState('')
        const [captainData, setCaptainData]=useState({})
    
    
        const submitHandler=(e)=>{
            e.preventDefault();
           const data={
            email,
            password
           };
           setCaptainData(data)
    
            setEmail('')
            setPassword('')
        }
  return (
   <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
              <img className='w-20 mb-3 ' src="https://imgs.search.brave.com/gjhYN3vsQ27AB0GjvunqfqgfZqK7uoFGXrNkZaWag-I/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8wLzEyLzYv/dWJlci1sb2dvLXVi/ZXItbG9nby1DRVY3/blVOMF90LmpwZw" alt="Uber Logo" />

     <form onSubmit={(e)=>{
        submitHandler(e)
     }}>
        <h3 className='text-lg font-medium mb-2'>What's your e-mail</h3>
        <input required 
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder::text-base ' type="email" placeholder='email@example.com'/>
        <h3  className='text-lg font-medium mb-2'>Enter Password</h3>
        <input required className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder::text-base ' 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }} type="password" placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder::text-base '>Login</button>

       <p className='text-center'> Join a fleet?  <Link to='/captain-signup' className='text-blue-600' >Register as Captain</Link></p>
     </form>
        </div>
        <div>
            <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder::text-base '>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin
