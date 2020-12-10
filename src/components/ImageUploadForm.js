import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

const ImageUploadForm = props => {
  const [picture, setPicture] = useState(null)

  const onUpload = uploadedPicture => {
    setPicture(uploadedPicture)
  }

  return (
    <div className="border border-dark">
      <h4 className="d-flex justify-content-center">Upload an image</h4>
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
