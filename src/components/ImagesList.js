import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import './ImagesList.css'
import { db, storage } from '../fiberbase/config'
import { useEffect, useState } from 'react'
import { deleteObject, ref } from 'firebase/storage'
import { motion } from "framer-motion"

export default function ImagesList(){
    const [images, setImages] = useState(null)
    const [loading, setIsloading] = useState(false)


    useEffect(()=> {
        setIsloading(true)
        const q = query(collection(db, 'images'), orderBy('created', 'desc'))
        onSnapshot(q, (snapshot)=>{
            let images = [] 
            snapshot.docs.forEach((doc, index) => {
                images.push({...doc.data(), id: doc.id})
            })
            setImages(images)
            setIsloading(false)
        })
    }, [])
    const handelDelete = async (id, url) => {
        const Urlref = doc(db, 'images', id)
        const imgref = ref(storage, url) 
        await deleteDoc(Urlref)
        await deleteObject(imgref)
    }

    return(
        <motion.div className="img-wrapper">
            {loading && <div>loading ......</div>}
            {images && (images.map((img, index) => (
                <div 
                    key={index}
                    className="img"
                    layout
                    style={{backgroundImage: `url(${img.url})`}}
                    initial={{opacity:0}}    
                    animate={{opacity:1}}
                    transition = {{delay: 1}}    
                >
                    <button className='delete-img' onClick={() => handelDelete(img.id, img.url)}>delete</button>
                </div>
            )))}
                    
        </motion.div>
    )
}