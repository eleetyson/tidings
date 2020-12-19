// a simple image upload component to handle user image selection
import React from 'react'
import ImageUploader from 'react-images-upload'

export default function ImageUploadForm(props) {
//   const widget = cloudinary.createUploadWidget(
//     { cloudName: "df7waillu", uploadPreset: "tidings" },
//     (error, result) => { console.log(error, result) }
//   )
//
//   const openWidget = () => {
//     widget.open()
//   }
//
//   <p className="box-shadow-card-title">1. Upload an image</p>
//
//   <button type="button" id="upload_widget" className="btn btn-success" onClick={openWidget}>
//     Upload image
//   </button>

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">1. Upload an image</p>

      <ImageUploader
        {...props}
        onChange={props.handleUpload}
        label={null} withIcon={true} singleImage={true} withPreview={true}
        buttonText="Upload"
        imgExtension={[".jpg", ".png"]}
      />

    </div>
  )

}
