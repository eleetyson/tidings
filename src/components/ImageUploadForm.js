import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

const ImageUploadForm = props => {
  const [picture, setPicture] = useState(null)

  const onUpload = uploadedPicture => {
    setPicture(uploadedPicture)
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">1. Upload an image</p>
      <ImageUploader
        {...props}
        onChange={onUpload}
        label={null} withIcon={true} singleImage={true} withPreview={true}
        buttonText="Upload"
        imgExtension={[".jpg", ".gif", ".png"]}
      />
    </div>
  )

}

export default ImageUploadForm
