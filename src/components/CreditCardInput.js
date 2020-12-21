import React from 'react'
import { CardElement, useElements } from '@stripe/react-stripe-js'

export default function CreditCardInput(props) {
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const cardElement = elements.getElement(CardElement)

    debugger
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
