import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const { navigate, backendUrl } = useContext(ShopContext)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      const response = await axios.post(backendUrl + '/api/user/forgot-password', { email })
      if (response.data.success) {
        toast.success('Password reset link sent to your email')
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

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Forgot Password</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      <p className='text-sm text-center mb-4'>Enter your email address and we'll send you a link to reset your password.</p>
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Email' 
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p onClick={() => navigate('/login')} className='cursor-pointer'>Back to Login</p>
      </div>
      <button 
        disabled={isLoading}
        className='bg-black text-white font-light px-8 py-2 mt-4 disabled:opacity-50'
      >
        {isLoading ? 'Sending...' : 'Send Reset Link'}
      </button>
    </form>
  )
}

export default ForgotPassword 