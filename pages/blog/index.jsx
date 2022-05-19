/* eslint-disable react/jsx-key */
// pages/index.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../util/supabase'
import { Button } from "@supabase/ui";


export default function Home() {
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

  console.log(user)

  if (loading) return <p className="text-2xl">Loading ...</p>
  if (!posts?.length) {
     return ( 
       <>
       { user && <>
        <h1>logged in as : {user}</h1>
        <Button onClick={() => supabase.auth.signOut()}> signOut </Button>

       </> }
        <p className="text-2xl" style={{paddingTop: '10vh'}}>No posts...</p>
       </>
       )
  };
  return (
    <div style={{paddingTop: '10vh', backgroundColor: 'blue'}} >
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Posts</h1>
      {
        posts.map(post => (
          <Link key={post.id} >
            <a href={`/posts/${post.id}`} >
              <div className="cursor-pointer border-b border-gray-300	mt-8 pb-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-500 mt-2">Author: {post.user_email}</p>
              </div>
            </a>
          </Link>)
        )
      }
    </div>
  )
}