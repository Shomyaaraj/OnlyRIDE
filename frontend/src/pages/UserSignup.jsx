import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [userData, setUserData]=useState({})


const submitHandler = (e) => {
  e.preventDefault()

  const data = {
    fullname: {
      firstName,
      lastName
    },
    email,
    password
  }

  setUserData(data)

 

  setEmail('')
  setPassword('')
  setFirstName('')
  setLastName('')
}

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
              <img className='w-16 mb-10 ' src="https://imgs.search.brave.com/gjhYN3vsQ27AB0GjvunqfqgfZqK7uoFGXrNkZaWag-I/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8wLzEyLzYv/dWJlci1sb2dvLXVi/ZXItbG9nby1DRVY3/blVOMF90LmpwZw" alt="Uber Logo" />

     <form onSubmit={(e)=>{
        submitHandler(e)
     }}>
     <h3 className='text-lg font-medium mb-2'>What's your name</h3>
     <div className='flex gap-4 mb-6' >
      <input required 
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder::text-base ' type="text" placeholder='First name'
        value={firstName}
        onChange={(e)=>{
            setFirstName(e.target.value)
        }}
        />
        <input required 
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder::text-base ' type="text" placeholder='Last name'
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}/>
     </div>

        <h3 className='text-lg font-medium mb-2'>What's your e-mail</h3>
        <input required 
         value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
       
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder::text-base ' type="email" placeholder='email@example.com'/>
        <h3  className='text-lg font-medium mb-2'>Enter Password</h3>
        <input required className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder::text-base ' 
         value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        
        type="password" placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder::text-base  '>Login</button>

       <p className='text-center'> Already have an Account?  <Link to='/login' className='text-blue-600' >Login here</Link></p>
     </form>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>
  This site is protected by reCAPTCHA and <span className='underline'>Goggle Ploicy</span> and <span className='underline'> Terms of Service</span> apply.
</p>
        </div>
    </div>
  )
}

export default UserSignup
