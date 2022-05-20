/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// pages/index.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../util/supabase'
import { Button } from "@supabase/ui";
import { useRouter } from 'next/router'



export default function Home() {
  const [posts, setPosts] = useState([])
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   fetchPosts()
  // }, [])
  // async function fetchPosts() {
  //   const { data, error } = await supabase
  //     .from('posts')
  //     .select()
  //   setPosts(data)
  //   setLoading(false)
  // }
  // const user = supabase?.auth?.currentUser?.email;
  // const router = useRouter();

  // const handleSignOut = () => {
  //   supabase.auth.signOut();
  //   router.reload(window.location.pathname);
  // }


  // console.log(user)

  // if (loading) return <p className="text-2xl">Loading ...</p>
  // if (!posts?.length) {
  //    return ( 
  //      <>
  //      { user && <>
  //       <h1>logged in as : {user}</h1>
  //         <Button onClick={handleSignOut }> signOut </Button>
  //      </> }
  //       <p className="text-2xl" style={{paddingTop: '10vh'}}>No posts...</p>
  //      </>
  //      )
  // };
  return (
    <div style={{paddingTop: '10vh'}} >
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Posts</h1>
      {
        posts.map(post => (
          <Link key={post.id} >
            <a href={`/blog/${post.id}`} >
              <div className="cursor-pointer border-b border-gray-300	mt-8 pb-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-500 mt-2">Author: {post.user_email}</p>
              </div>
            </a>
          </Link>)
        )
      }
              <section>
            <div className="m-4 lg:flex lg:flex-wrap">
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="https://source.unsplash.com/collection/190728/1000x900" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-indigo-800 bg-indigo-200 rounded">Category
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">The Title</h1>
                            <p className="mb-2 text-sm tracking-wide text-gray-700">Photo booth fam kinfolk cold-pressed
                                sriracha
                                leggings
                                jianbing microdosing tousled waistcoat.</p>
                            <div className="flex items-center ">
                                <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                    More

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="https://source.unsplash.com/collection/190727/1000x900" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-red-800 bg-red-200 rounded">Category
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">The Title</h1>
                            <p className="mb-2 text-sm tracking-wide text-gray-700">Photo booth fam kinfolk cold-pressed
                                sriracha
                                leggings
                                jianbing microdosing tousled waistcoat.</p>
                            <div className="flex items-center ">
                                <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                    More

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="https://source.unsplash.com/collection/190726/1000x900" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">Category
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">The Title</h1>
                            <p className="mb-2 text-sm tracking-wide text-gray-700">Photo booth fam kinfolk cold-pressed
                                sriracha
                                leggings
                                jianbing microdosing tousled waistcoat.</p>
                            <div className="flex items-center ">
                                <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                    More

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokWidth="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}