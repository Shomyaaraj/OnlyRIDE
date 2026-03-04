import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({ children }) => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { setUser } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const token = localStorage.getItem("token")

  if (!token) {
    navigate("/login")
    return
  }

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setUser(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      localStorage.removeItem("token")
      navigate("/login")
    }
  }

  fetchProfile()
}, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default UserProtectWrapper