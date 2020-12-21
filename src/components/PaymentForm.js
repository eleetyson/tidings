import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY)

export default function PaymentForm() {
  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">3. Send your postcard</p>



    </div>
  )

}
