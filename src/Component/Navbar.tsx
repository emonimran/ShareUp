import React from 'react'
import { Link} from 'react-router-dom'
import { auth } from '../config/firebase' 
import { useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'


function Navbar() {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  }


  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 bg-gray-900 w-full z-20 border-b border-gray-200">
    <div className="container flex items-center justify-between mx-auto text-white">
      <div className='basis-1/3'>
        <h1>ShareUp</h1> 
      </div>

      <div className='flex items-center justify-center mx-auto basis-1/3'>
      <Link to="/">Feed</Link>
      {!user ? "" :
      <Link to="/createpost" className='pl-4'>Create Post</Link> }
    </div>
    <div className='basis-1/3'>
    {!user ? <Link to="/login" className='pl-4 '><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={signUserOut}>Login</button></Link> : ""}
      {user && (
      <div className='flex items-center justify-center'>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} alt="profile" className='mx-4 w-9 rounded-full' />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={signUserOut}>Log Out</button>
      </div>
      )

      }
    </div>
    
    </div>
    </nav>
  )
}

export default Navbar