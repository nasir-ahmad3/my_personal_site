import { useState } from 'react'
import {db, storage} from '../fiberbase/config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useEffect } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


export const useStorage = (file) => {
    const [err, setError] = useState(null)
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null)
    useEffect(() => {
        const storageRef = ref(storage, file.name)
        const collectionref = collection(db, 'images')
        const uploadTask = uploadBytesResumable(storageRef, file)

        const unsub =  uploadTask.on('state_changed', (snapshot)=> {
            const precenteg = (snapshot.bytesTransferred / snapshot.totalBytes) *100
            setProgress(precenteg)
        }, (error)=> {
            setError(error)
        }, async ()=>{
            const downloadUrl = await getDownloadURL(storageRef)
            setUrl(downloadUrl)

            const created = serverTimestamp()
            await addDoc(collectionref, {created, url: downloadUrl})
        })
        return () => unsub()
    }, [file])
    return {err, progress, url}
} 