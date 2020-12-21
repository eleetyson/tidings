import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

export default function CreditCardInput(props) {
  const elements = useElements()
  const stripe = useStripe()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const cardElement = elements.getElement(CardElement)

    // use card element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    // console logging result
    error ? console.log('[error]', error) : console.log('[PaymentMethod]', paymentMethod)

    // if (error) {
    //   console.log('[error]', error)
    // } else {
    //   console.log('[PaymentMethod]', paymentMethod)
    // }
  }

  return (
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

      <button className="paymentBtn  btn btn-lg btn-block btn-success  border-0" type="submit" disabled={false}>
        Pay $1
      </button>
    </form>
  )

}
