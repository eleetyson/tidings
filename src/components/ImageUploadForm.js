// card with functionality to upload, preview, and remove an image
import ImageUploader from 'react-images-upload'

export default function ImageUploadForm(props) {

  return (
    <div className="box-shadow-card">
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
