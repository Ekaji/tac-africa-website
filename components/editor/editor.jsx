/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import "easymde/dist/easymde.min.css"
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { auth, db } from "../../firebase/firebase-config"
import { addDoc, collection } from 'firebase/firestore'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import Cloudinary from "../cloudinary/cloudinary"

export default function Editor() {
    
    
    const [content, setContent] = useState({
        title: '',
        body: '',
        img: '/picture.png'
    })
    const handleContentChange = (e) => {
        setContent( { ...content, [e.target.name]:  e.target.value })
    }
    
    
    const router = useRouter()
    
    const createPost = async () => {
        const postCollectionRef = collection(db, 'posts')

        await addDoc(postCollectionRef, {
          title: content.title, body: content.body, author: {
             name: auth.currentUser.displayName, id: auth.currentUser.uid 
            }
          }
        )
        router.push('/blogcomp')
      }
    
    console.log(content.img)

  return (
    <div className="w-10/12 flex flex-col overflow-visible mx-auto" >
      <Cloudinary setContent={setContent} content={content} />
      <div className="min-h-[250vh]">
          <input 
            type="text" 
            name="title" 
            onChange={ (e) => handleContentChange(e) }
            placeholder='title'
            className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
          />
               
          <div className="h-[400px] w-[400px] my-6" >

              <img
                key={content.img}
                className={`object-fill mb-6 `}
                src={ content.img }
                alt="blic_TAC"
              />      

          </div>
           
          <div className="block my-8" >
            <SimpleMDE
              value={ content.body }
              onChange={ value => setContent( { ...content, body: value } ) }
            />
          </div>
      </div>


      <button className="border border-black px-6 py-3 rounded-xl" onClick={ createPost }>Create Post</button>
    </div>
  )
}
