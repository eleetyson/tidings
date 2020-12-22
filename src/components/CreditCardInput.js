import React from 'react'
// import { CardElement, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY)

export default function CreditCardInput(props) {
  // const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const stripe = await stripePromise

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1I0cm0BrGXf3SoO6zIFh9jvE',
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000', // https://example.com/success
      cancelUrl: 'http://localhost:3000',  // https://example.com/cancel
    })

    // const cardElement = elements.getElement(CardElement)
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
