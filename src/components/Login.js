import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {


  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignIn = () =>{
    setIsSignedIn(!isSignedIn);
  }
  return (
    <div>
        <Header />
        <div>
            <img className='w-full h-600 absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/aad37504-bbe0-407d-b8a8-fb31b8faf374/web_auto_scroll/US-en-20241028-TRIFECTA-74542b53-4c46-446a-84ce-0790578c7d39_large.jpg" alt="background"/>
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-70'>
        <h1 className='text-3xl font-bold py-4'>{isSignedIn ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignedIn && <input type='text' placeholder='Name' className='p-4 m-2 w-full bg-gray-500'/>}
          <input type='email' placeholder='Email'className='p-4 m-2 w-full bg-gray-500'/>
          <input type='password' placeholder='Password'className='p-4 m-2 w-full bg-gray-500'/>
          <button type='submit' className='bg-red-600 p-4 m-2 w-full rounded-lg'>{isSignedIn ? 'Sign In' : 'Sign Up'}</button>
          <p >
            <span className='cursor-pointer mt-5' onClick={handleSignIn}>{isSignedIn ? 'Create Account' : 'Already have an account'}</span>
          </p>

        </form>
    </div>
  )
}

export default Login