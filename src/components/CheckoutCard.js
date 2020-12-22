import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements, CardElement } from '@stripe/react-stripe-js'
// import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY)

export default function CheckoutCard() {

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

    // add css arrow to checkout button hover [X]
    // remove unneeded Stripe elements from container component? [X]
    // only want to enable checkout button with uploaded image and form filled []
    // move logic back into container component []

    // build out success page? []
    // add some type of alert or popup for error message on main page []
  }

  return (
    <div className="box-shadow-card  py-2 px-3">
      <p className="box-shadow-card-title">3. Send your postcard</p>

      <form onSubmit={handleSubmit}>
        <button className="paymentBtn hvr-icon-forward  btn btn-lg btn-block btn-success  border-0" type="submit" disabled={false}>
          Checkout
          <i className="fa fa-arrow-circle-right  hvr-icon "></i>
        </button>
      </form>

    </div>
  )

}

// <Elements stripe={stripePromise}>
//   <CreditCardInput />
// </Elements>


// <div className="box-shadow-card  py-2 px-3">
//   <p className="box-shadow-card-title">3. Send your postcard</p>
//   <CheckoutButton />
// </div>
// )
