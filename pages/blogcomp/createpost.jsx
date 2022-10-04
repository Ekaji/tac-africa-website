/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'
import dynamic from 'next/dynamic'
import Editor from '../../components/editor/editor'

import { async } from '@firebase/util'


export default function CreatePost() {

  let getAuth = dynamic( ()=> localStorage.getItem('isAuth'), { ssr: false })
  const [isAuth, setIsAuth] = useState(getAuth)
  
  const router = useRouter()
  useEffect(() => {
    if(!isAuth) {
      router.push('/blogcomp/login')
    }
  })
  
  let authStateText = 'LogOut'

  const HandleSignOut = () => {
    authStateText = 'Logging Out....'
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      router.push('/blogcomp/login')
    })
  }
  
  return (
    <>
      { !isAuth && (<div> Unauthorized </div>) }
      { isAuth && (<button onClick={ HandleSignOut } >{ authStateText }</button >)}
     
          <Editor />

    </>
  )
}
