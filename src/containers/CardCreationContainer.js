// main page for postcard image upload, destination setting, and payment
import React, { useState } from 'react'
import { geocodeByAddress } from 'react-places-autocomplete'
import ImageUploadForm from '../components/ImageUploadForm'
import CardDestinationForm from '../components/CardDestinationForm'
import PaymentForm from '../components/PaymentForm'

export default function CardCreationContainer() {

  // declaring state variables for card destination details
  const initialState = { senderName: '', recipientName: '', address1: '', address2: '', zip: '' }
  const [values, setValues] = useState(initialState)
  const [picture, setPicture] = useState(null) // state variable for user image

  // callback function to update state variable holding user image
  const handleUpload = event => {
    setPicture(event)
    findImgLocation()
  }

  // will eventually need to grab this image file's URL
  const findImgLocation = imgLocation => {
    if (document.querySelector(".uploadPicture")) {
      const location = document.querySelector(".uploadPicture").getAttribute("src")
      console.log(location)

      // will need to resize the img to fit Lob's postcard specs
      // maybe use this React component: https://www.npmjs.com/package/react-image-file-resizer
    }
  }

  // state hook for updating user's destination form inputs
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  // callback updating the address field and state variable
  const handleAddressInputChange = addressStr => {
    setValues({ ...values, address1: addressStr, zip: '' })
  }

  // callback updating address field and zip code state variable
  const handleAddressInputSelect = addressStr => {
    setValues({ ...values, address1: addressStr })
    findZip(addressStr)
  }

  // state hook to update zip code
  const findZip = addressStr => {
    geocodeByAddress(addressStr)
      .then(results => (results[0]))
      .then(result => {
        let zipCode = result.formatted_address.split(',').slice(-2, -1)[0].split(" ").pop()
        setValues({ ...values, zip: zipCode })
      })
      .catch(error => console.error('Error', error))
  }

  //
  const handleSubmit = event => {
    event.preventDefault()

    let addressArr = values.address1.split(',').map(a => a.trim())
    let addressee = {
      name: values.recipientName,
      address_line1: addressArr[0],
      address_line2: values.address2,
      address_city: addressArr[1],
      address_state: addressArr[2],
      address_zip: values.zip
    }
    testOutLob(addressee)

    // console.log(values.recipientName) // name
    // if ( Number.isInteger(parseFloat(addressArr[0])) ) { console.log(addressArr[0]) } // address_line1
    // if (values.address2.length !== 0) { console.log(values.address2) } // address_line2?
    // console.log(addressArr[1]) // address_city
    // console.log(addressArr[2]) // address_state
    // console.log(values.zip) // address_zip -- need this from google autocomplete
  }

  // using destination address inputs to interact with the Lob API
  // addressee = { name, address_line1, address_line2, address_city, address_state, address_zip }
  const testOutLob = addressee => {
    const Lob = require('lob')('test_7628c7795f9a9a42c5ae4bbbbfdf7ab616e')

    if ( addressee.address_zip.length !== 0 && Number.isInteger(parseFloat(addressee.address_line1)) ) {
      Lob.addresses.create(addressee, function(err, address) {
        console.log(err, address)
      })
    } else {
      console.log('invalid address')
    }


    // setValues(initialState) // clear out form after submission
  }

  return (
    <div className="container  d-flex flex-column justify-content-center align-items-center  col-8 offset-2">
      <ImageUploadForm
        handleUpload={handleUpload}
      />
      <br></br>

      <CardDestinationForm
        senderName={values.senderName}
        recipientName={values.recipientName}
        address1={values.address1}
        address2={values.address2}
        handleChange={handleChange}
        handleAddressInputChange={handleAddressInputChange}
        handleAddressInputSelect={handleAddressInputSelect}
        handleSubmit={handleSubmit}
      />
      <br></br>

      <PaymentForm

      />
      <br></br>

    </div>
  )

}
