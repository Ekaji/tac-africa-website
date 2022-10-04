/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase-config'
import { getDocs, collection, doc } from 'firebase/firestore'
import { async } from '@firebase/util'

export default function App() {
  const [postList, setPostList] = useState()
  const postCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
     const data = await getDocs(postCollectionRef)
     console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })) )
    }
    getPosts()
  })

  return (
  <>
    <div className='flex'>
        <Link href='/blogcomp/login'>
            <a className='mx-4'>
               <button> Login </button> 
            </a>
        </Link>

        <Link href='/blogcomp/createpost'>
            <a className='mx-4'>
               <button> CreatePost </button> 
            </a>
        </Link>
    </div>
    <div >

    </div>
  </>
  )
}
