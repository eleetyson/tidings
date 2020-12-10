import React, { Component } from 'react'
import ImageUploadForm from '../components/ImageUploadForm'
import CardDestinationForm from '../components/CardDestinationForm'
import PaymentForm from '../components/PaymentForm'

class CardCreationContainer extends Component {
  render() {
    return (
      <div className="row">

        <div className="col-sm">
          <ImageUploadForm />
        </div>

        <div className="col-sm">
          <CardDestinationForm />
          <PaymentForm />
        </div>

      </div>
    )
  }

}

export default CardCreationContainer
