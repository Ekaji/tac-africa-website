/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { useRouter } from 'next/router'

import { auth, provider } from '../../firebase/firebase-config'
import { signInWithPopup } from 'firebase/auth'

export default function Login( ) {
  const router = useRouter()
  
  const [isAuth, setIsAuth] = useState()

  

  const signinWithGoogle = () => {
    signInWithPopup( auth, provider ).then((result) => {
      localStorage.setItem("isAuth" , true)
      setIsAuth(true)
      router.push('/blogcomp/createpost')
    }).catch(e => {
      console.log('an error occured')
    })
  }
  return (
    <div >
      <p>Sign in with Google to continue</p>
      <button className='border border-black' onClick={ signinWithGoogle }>SignIn with Google</button>
    </div>
  )
}
