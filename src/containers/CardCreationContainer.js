// main page for postcard image upload, destination setting, and payment
import React from 'react'
import ImageUploadForm from '../components/ImageUploadForm'
import CardDestinationForm from '../components/CardDestinationForm'
import PaymentForm from '../components/PaymentForm'

export default function CardCreationContainer() {
  // will eventually need to grab this image file's URL
  const findImgLocation = imgLocation => {
    if (document.querySelector(".uploadPicture")) {
      const location = document.querySelector(".uploadPicture").getAttribute("src")
      console.log(location)
      // will need to resize the img to fit Lob's postcard specs
      // maybe use this React component: https://www.npmjs.com/package/react-image-file-resizer
    }
  }

  return (
    <div className="container  d-flex flex-column justify-content-center align-items-center  col-8 offset-2">
      <ImageUploadForm
        findImgLocation={findImgLocation}
      />
      <br></br>

      <CardDestinationForm

      />
      <br></br>

      <PaymentForm

      />
      <br></br>

    </div>
  )

}
