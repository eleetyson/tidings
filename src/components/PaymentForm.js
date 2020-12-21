import React from 'react'
import { Elements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY)

export default function PaymentForm() {

  const handleSubmit = event => {
    console.log("in form submit event handler")
    event.preventDefault()
  }

  return (
    <div className="box-shadow-card  py-2 px-3">
      <p className="box-shadow-card-title">3. Send your postcard</p>

      <Elements stripe={stripePromise}>
        <form onSubmit={handleSubmit}>

          <CardElement
            options={{
              style: {
                base: { fontSize: '16px', color: '#424770' },
                invalid: { color: '#9e2146' }
              }
            }}
          >
          </CardElement>

          <button className="paymentBtn  btn btn-lg btn-block btn-success  border-0" type="submit" disabled={true}>
            Pay $1
          </button>

        </form>
      </Elements>

    </div>
  )

}
