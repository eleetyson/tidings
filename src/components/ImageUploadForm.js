import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

export default function ImageUploadForm(props) {
  const [picture, setPicture] = useState(null)

  const handleUpload = uploadedPicture => {
    setPicture(uploadedPicture)
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">1. Upload an image</p>
      <ImageUploader
        {...props}
        onChange={handleUpload}
        label={null} withIcon={true} singleImage={true} withPreview={true}
        buttonText="Upload"
        imgExtension={[".jpg", ".gif", ".png"]}
      />
    </div>
  )

}
