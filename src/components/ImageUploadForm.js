// a simple image upload component to handle user image selection
import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

export default function ImageUploadForm(props) {
  // declaring a state variable for user image
  const [picture, setPicture] = useState(null)

  // using a state hook for user image upload
  const handleUpload = event => {
    setPicture(event)
    props.findImgLocation()
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">1. Upload an image</p>
      <ImageUploader
        {...props}
        onChange={handleUpload}
        label={null} withIcon={true} singleImage={true} withPreview={true}
        buttonText="Upload"
        imgExtension={[".jpg", ".png"]}
      />
    </div>
  )

}
