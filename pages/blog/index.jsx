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
    <div style={{paddingTop: '5vh'}} >
      <h1 className="text-3xl text-center font-semibold tracking-wide mt-6 mb-2 capitalize ">Welcome to our Blog</h1>
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
                            src="/blog/efcc.jpg" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-indigo-800 bg-indigo-200 rounded">News
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">Interpol Provides EFCC With App To Track Terrorism Financing</h1>
                            <p className="mb-2 text-sm tracking-wide text-gray-700">The International Criminal Police Organisation, (Interpol) has provided the Economic and Financial Crimes Commission...</p>
                            <div className="flex items-center ">
                                <Link href='/blog/Interpol-Provides-EFCC-With-App-To-Track-Terrorism-Financing'>
                                    <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                        More

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="/blog/uav.jpg" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-red-800 bg-red-200 rounded">News
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">Nigeria uses emerging tech for crime monitoring</h1>
                            <p className="mb-2 text-sm tracking-wide text-gray-700">If Nigeria does not adopt these technologies at the earliest, then the bad guys will outpace us, says Jerry Innocent Akubo</p>
                            <div className="flex items-center ">
                                <Link href='/blog/nigeria-uses-emerging-tech-for-crime-monitoring'>
                                    <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                        More

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="/blog/drone.jpg" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">News
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">TAC boosts african security with venture fund in partnership with silicon valley based gsd ventures</h1>
                            <p className="mb-1 text-sm tracking-wide text-gray-700">TAC Africa and GSD Venture Studios have joined together to assemble a fund to stimulate growth </p>
                            <div className="flex items-center ">
                                <Link href='/blog/tac-boosts-african-security-with-venture-fund-in-partnership-with-silicon-valley-based-gsd-ventures'>
                                    <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                        More

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="/blog/drone.jpg" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">News
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">About TAC NGO Africa - Using Drones to Boost Nigeria’s Development & Accelerate Transition within Nigeria and the African Continent At Large</h1>
                            <p className="mb-1 text-sm tracking-wide text-gray-700">TAC NGO Africa is a futurist oriented NGO with the sole aim of protecting Public Space </p>
                            <div className="flex items-center ">
                                <Link href='/blog/tac-ngo-africa-using-drones-boost-nigerias-within-nigeria'>
                                    <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                        More

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="border-2 border-gray-200 rounded-lg">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36"
                            src="/blog/interpol.jpg" alt="blog" />
                        <div className="p-6">
                            <span
                                className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">News
                            </span>
                            <h1 className="mb-2 text-lg font-medium text-gray-900">suspected head of cybercrime gang arrested in nigeria</h1>
                            <p className="mb-1 text-sm tracking-wide text-gray-700">The cybercrime unit of the Nigeria Police Force arrested a 37-year-old Nigerian man in an international operation spanning four continents coordinated and facilitated by the recently created Africa operations desk</p>
                            <div className="flex items-center ">
                                <Link href='/blog/suspected-head-of-cybercrime-gang-arrested-in-nigeria'>
                                    <a className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                                        More

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}