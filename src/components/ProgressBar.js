import { useEffect } from 'react'
import { useStorage } from '../hooks/useStorage'
import './progressBar.css'
// import { collection, onSnapshot } from 'firebase/firestore'
// import { db } from '../fiberbase/config'

export const ProgressBar = ({file, setfile})=> {
    const {progress, url} = useStorage(file)

    return (
        <>  
            {!url && <div>{file.name}</div>}
            {!url && <div className="progressBar" style={{width: `${progress}%`}}></div>}
        </>  
    )      
}