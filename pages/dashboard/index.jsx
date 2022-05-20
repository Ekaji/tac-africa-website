/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// pages/index.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../util/supabase'
import { Button } from "@supabase/ui";
import { useRouter } from 'next/router'
import Create_posts from '../blog/create_posts'



export default function Dashboard() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select()
    setPosts(data)
    setLoading(false)
  }
  const user = supabase?.auth?.currentUser?.email;
  const router = useRouter();

  const handleSignOut = () => {
    supabase.auth.signOut();
  }


  // useEffect(() => {
  //   if (!user) {
  //         router.push({
  //         pathname: '/dashboard/',
  //         query: { returnUrl: router.asPath }
  //     });
  //   }
  // }, [user, router])

  if (loading) return <p className="text-2xl">Loading ...</p>
  if (!posts?.length) {
     return ( 
       <>
       { user && <>
        <h1>logged in as : {user}</h1>
          <Button onClick={ handleSignOut }> signOut </Button>
       </> }
        <p className="text-2xl" style={{paddingTop: '10vh'}}>No posts...</p>
        <Create_posts />
       </>
       )
  };
}