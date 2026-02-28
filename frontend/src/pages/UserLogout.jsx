import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {

    const logout = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/user/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        localStorage.removeItem('token')
        navigate('/login')

      } catch (error) {
        console.log(error)
      }
    }

    logout()

  }, [])

  return (
    <div>
      Logging out...
    </div>
  )
}

export default UserLogout