// main page for postcard image upload, destination setting, and payment
import React from 'react'
import ImageUploadForm from '../components/ImageUploadForm'
import CardDestinationForm from '../components/CardDestinationForm'
import PaymentForm from '../components/PaymentForm'

export default function CardCreationContainer() {

  return (
    <div className="container  d-flex flex-column justify-content-center align-items-center  col-8 offset-2">
      <ImageUploadForm /><br></br>
      <CardDestinationForm/><br></br>
      <PaymentForm /><br></br>
    </div>
  )

}
