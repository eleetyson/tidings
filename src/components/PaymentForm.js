import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
// import { Elements, CardElement } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CreditCardInput from './CreditCardInput'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY)

export default function PaymentForm() {

  // const handleSubmit = event => {
  //   event.preventDefault()
  //
  //   console.log("in form submit event handler")
  // }

  return (
    <div className="box-shadow-card  py-2 px-3">
      <p className="box-shadow-card-title">3. Send your postcard</p>

      <Elements stripe={stripePromise}>
        <CreditCardInput />
      </Elements>

    </div>
  )

}

// <Elements stripe={stripePromise}>
//   <CreditCardInput />
// </Elements>
