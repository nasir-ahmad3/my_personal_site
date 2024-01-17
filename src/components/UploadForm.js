import { useState } from 'react'
import './UploadForm.css'
import { ProgressBar } from './ProgressBar'

export default function UploadForm() {
    const types = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
    const [error, setError] = useState(null)
    const [file, setfile] = useState(null)
    
    const handelChange = (e) => {
        let selected = e.target.files[0]
        
        if (selected && types.includes(selected.type)){
            setfile(selected)
            setError(null)
        }else{
            setError(`unsuported file type (${selected.type}) please enter valid image file!`)
            setfile(null)
        }  
    }

    return (
        <div className="form-wrapper">
            <form>
                <label className="add-img">
                    <input 
                        type="file" 
                        onChange={(e) => handelChange(e)}
                    />
                    <span>+</span>
                </label>
            </form>
            {file && <ProgressBar file={file} setfile={setfile} />}
            <div>{error && <div className='error'>{error}</div>}</div>
        </div>
    )
}