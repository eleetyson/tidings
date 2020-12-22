import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY)

export default function CreditCardInput(props) {

  const handleSubmit = async (event) => {
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

    // change stripe account name

    // only want to enable checkout button with uploaded image and form filled
    // add css arrow to checkout button

    // build out success page
    // move logic back into container component
    // remove unneeded Stripe elements from container component?
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="paymentBtn  btn btn-lg btn-block btn-success  border-0" type="submit" disabled={false}>
        Checkout
      </button>
    </form>
  )

}

// <form onSubmit={handleSubmit}>
//   <CardElement
//     options={{
//       style: {
//         base: { fontSize: '16px', color: '#424770' },
//         invalid: { color: '#9e2146' }
//       }
//     }}
//   >
//   </CardElement>
//
//   <button className="paymentBtn  btn btn-lg btn-block btn-success  border-0" type="submit" disabled={false}>
//     Checkout
//   </button>
// </form>
