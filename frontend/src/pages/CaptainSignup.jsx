import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import uberDriver  from '../Resources/uberDriver.svg'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const CaptainSignup = () => {

  const navigate = useNavigate()

   const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehicleplate, setVehicleplate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setvehicleType] = useState('')
    

    const {captain, setCaptain} = React.useContext(CaptainDataContext)
  
  
  const submitHandler = async(e) => {
    e.preventDefault()
  
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehicleplate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
  
    


  const response=  await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

if(response.status === 201){
  const data = response.data
  setCaptain(data.captain)
  localStorage.setItem('token', data.token)
  navigate('/captain-home')
}

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehicleplate('')
    setVehicleCapacity('')
    setvehicleType('')
  }
  
  return (
  <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
              <img className='w-16 mb-10 ' src={uberDriver} alt="Uber Logo" />

     <form onSubmit={(e)=>{
        submitHandler(e)
     }}>
     <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
     <div className='flex gap-4 mb-6' >
      <input required 
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='First name'
        value={firstName}
        onChange={(e)=>{
            setFirstName(e.target.value)
        }}
        />
        <input required 
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='Last name'
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}/>
     </div>

        <h3 className='text-lg font-medium mb-2'>What's Our Captain's e-mail</h3>
        <input required 
         value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
       
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>
        <h3  className='text-lg font-medium mb-2'>Enter Password</h3>
        <input required className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
         value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        
        type="password" placeholder='password'/>

        <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
        <div className='flex gap-4 mb-6'>
          <input required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder::text-base' 
            type="text" 
            placeholder='Vehicle Color'
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <input required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder::text-base' 
            type="text" 
            placeholder='Vehicle Plate'
            value={vehicleplate}
            onChange={(e) => setVehicleplate(e.target.value)}
          />
        </div>
        <div className='flex gap-4 mb-6'>
          <input required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder::text-base' 
            type="number" 
            placeholder='Vehicle Capacity'
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
          <select required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder::text-base'
            value={vehicleType}
            onChange={(e) => setvehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
        </div>

        
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Create Account</button>

       <p className='text-center'> Already have an Account?  <Link to='/captain-login' className='text-blue-600' >Login here</Link></p>
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

export default CaptainSignup
