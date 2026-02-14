import { CheckCircle, UploadIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useOutletContext } from 'react-router';

const Upload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [progress, setProgress]=useState(0);

    const {isSignedIn}=useOutletContext<AuthContext>();
  return (
    <div className='upload'>
      {!file ? (
        <div className={`dropzone ${isDragging ? 'is-dragging' : ''}`}>
          <input
            type="file"
            className='drop-input'
            accept=".jpg,.jpeg,.png"
            disabled={!isSignedIn}
            />
            <div className='drop-content'>
                <div className='drop-icon'>
                 <UploadIcon size={20} />
                </div>
                <p>
                    {isSignedIn ? 'Drag and drop your floor plan here, or click to select a file'
                     : 'Please sign in to upload your floor plan'}
                </p>
                <p className='help'>Maximum file size: 10MB</p>
            </div>
    </div>
        ) : (
         <div className='upload-status'>
            <div className='status-content'>
               <div className='status-icon'>
                {progress === 100 ? <CheckCircle size={20} className="text-green-500" /> : <UploadIcon size={20} />}
                </div> 
                <h3>{file.name}</h3>
                <div className='progress'>
                    <div className='bar' style={{width:`${progress}%`}} />
                    <p className='status-text'>
                        {progress < 100 ? `Analysing... ${progress}%` : 'Redirecting...'}
                    </p>
                </div>
            </div>
         </div>   
  )
}
</div>
  )
}

export default Upload
