import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <form action="https://formsubmit.co/abhishek96240@gmail.com" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full p-2 border border-gray-300 rounded" />
              <input type="Number" name="Contact Number" placeholder="Contact Number" required className="w-full p-2 border border-gray-300 rounded" />
              <input type="email" name="email" placeholder="Email" required className="w-full p-2 border border-gray-300 rounded" />
              <textarea name="message" placeholder="Message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
              <input type="hidden" name="_next" value="http://localhost:5173/contact"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Send</button>
            </form>
            
          </div>
      </div>

    </div>
  )
}

export default Contact  