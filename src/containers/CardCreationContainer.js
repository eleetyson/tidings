import React from 'react'
import ImageUploadForm from '../components/ImageUploadForm'
import CardDestinationForm from '../components/CardDestinationForm'
import PaymentForm from '../components/PaymentForm'
import { useForm } from "react-hook-form"

export default function CardCreationContainer() {

  return (
    <div className="row">

      <div className="col-sm">
        <ImageUploadForm />
      </div>

      <div className="col-sm">
        <CardDestinationForm/>
        <PaymentForm />
      </div>

    </div>
  )

}
