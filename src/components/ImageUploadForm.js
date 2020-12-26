// a simple image upload component to handle user image selection
import ImageUploader from 'react-images-upload'
import { RoughNotation } from "react-rough-notation"

export default function ImageUploadForm(props) {

  return (
    <div className="box-shadow-card">
      <p className="box-shadow-card-title">
        <RoughNotation type="circle" show="true" color="#d0000f" padding={15} animationDuration={1000}>
          1. Upload an image
        </RoughNotation>
      </p>

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
