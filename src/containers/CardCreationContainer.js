// main page for postcard image upload, destination setting, and checkout page redirect
import React, { useState } from 'react'
import { geocodeByAddress } from 'react-places-autocomplete'
import { loadStripe } from '@stripe/stripe-js'
import ImageUploadForm from '../components/ImageUploadForm'
import CardDestinationForm from '../components/CardDestinationForm'
import CheckoutCard from '../components/CheckoutCard'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY) // Stripe object from the stripe-js module

export default function CardCreationContainer() {

  // declaring state variables for card destination details
  const initialValues = { senderName: '', recipientName: '', address1: '', address2: '', zip: '' }
  const [values, setValues] = useState(initialValues)
  const [picture, setPicture] = useState(null) // state variable for user-uploaded image in browser
  const [remotePicture, setRemotePicture] = useState(null) // state variable for user-uploaded image location in cloud storage

  // callback function to update state variable holding user image
  const handleUpload = event => {
    setPicture(event)

    // only need to store image on user upload, not removal
    if (event.length !== 0) {
      addImgToCloud()
      // console.log("in handleUpload() after adding image to cloudinary")
    } else {
      setRemotePicture(null)
      // console.log("in handleUpload() after resetting remotePicture in state")
    }
  }

  // if available, grabbing the data URI for user's uploaded image file
  const findImgLocation = () => {
    if (document.querySelector(".uploadPicture")) {
      const location = document.querySelector(".uploadPicture").getAttribute("src")
      return location
    } else {
      return null
    }
  }

  // storing user's uploaded image using Cloudinary and updating state with its new URL
  const addImgToCloud = () => {
    const imgLocation = findImgLocation()

    if (imgLocation) {
      const payload = {
        // formatting data URL properly before making request
        file: `${imgLocation.split(';').filter(str => !str.includes("name=") ).join(';')}`,
        upload_preset: 'tidings'
      }

      const configObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }

      fetch('https://cors-anywhere.herokuapp.com/https://api.Cloudinary.com/v1_1/df7waillu/image/upload', configObj)
        .then(res => res.json())
        .then(res => {
            // updating state for image location in cloud storage with URL string from response
            setRemotePicture(res.secure_url)
          })
        .catch(err => console.log(err))
    } else {
      console.log("can't find any user-uploaded image :(")
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

  // tbd
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
  }

  // using destination address inputs to create postcard with Lob API
  // addressee = { name, address_line1, address_line2, address_city, address_state, address_zip }
  const testOutLob = addressee => {
    const Lob = require('lob')(process.env.REACT_APP_LOB_TEST_SECRET_KEY)

    if (!remotePicture) {
      console.log("It appears you've uploaded an invalid image. Please try again.")
    } else if ( addressee.address_zip.length === 0 && !Number.isInteger(parseFloat(addressee.address_line1)) ) {
      console.log("It appears you've entered an invalid destination address. Please try again.")
    } else {
      Lob.postcards.create({
        to: addressee,
        front: 'tmpl_fed93452925c5bf',
        back: 'tmpl_f92a8a1d43eef0e',
        merge_variables: {
          name: values.senderName,
          img: remotePicture
        }
      }, function(err, postcard) {
          err ? console.log(err) : console.log(postcard)
      })

    }

    // clear out state after form submission
    // setValues(initialValues)
    // setPicture(null)
    // setRemotePicture(null)

    // also will want to display some sort of confirmation + maybe SMS message?
  }

  // handling redirect to Stripe-hosted checkout page
  const handleCheckout = async (event) => {
    event.preventDefault()
    const stripe = await stripePromise

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1I0cm0BrGXf3SoO6zIFh9jvE',
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'https://tidings-app.netlify.app', // https://example.com/success https://tidings-app.netlify.app
      cancelUrl: 'https://tidings-app.netlify.app',  // https://example.com/cancel https://tidings-app.netlify.app
    })

    // add css arrow to checkout button hover [X]
    // remove unneeded Stripe elements from container component? [X]

    // only want to enable checkout button with uploaded image and form filled []
    // move logic back into container component []
      // useEffect to check whether steps 1 and 2 complete
        // should attempt to add address on step 2 completion
      // want a function passing down a boolean as a prop to this CheckoutCard component
        // if state contains a remote picture address in Cloudinary and a valid address created with Lob, return true
        // else return false, button remains disabled
      //

    // build out separate success page? []
    // add some type of alert or popup for error message on main page []

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

      <CheckoutCard
        handleCheckout={handleCheckout}
      />
      <br></br>

    </div>
  )

}
