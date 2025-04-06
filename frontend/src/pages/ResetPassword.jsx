import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { navigate, backendUrl } = useContext(ShopContext)
  const { token } = useParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidToken, setIsValidToken] = useState(false)

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(backendUrl + `/api/user/verify-reset-token/${token}`)
        setIsValidToken(response.data.success)
      } catch (error) {
        toast.error('Invalid or expired reset link')
        navigate('/login')
      }
    }
    verifyToken()
  }, [token, navigate, backendUrl])

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    setIsLoading(true)
    try {
      const response = await axios.post(backendUrl + '/api/user/reset-password', { 
        token, 
        password 
      })
      if (response.data.success) {
        toast.success('Password reset successful')
        navigate('/login')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isValidToken) {
    return null
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Reset Password</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      <p className='text-sm text-center mb-4'>Enter your new password below.</p>
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='New Password' 
        required
      />
      <input 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        value={confirmPassword} 
        type="password" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Confirm New Password' 
        required
      />
      <button 
        disabled={isLoading}
        className='bg-black text-white font-light px-8 py-2 mt-4 disabled:opacity-50'
      >
        {isLoading ? 'Resetting...' : 'Reset Password'}
      </button>
    </form>
  )
}

export default ResetPassword 