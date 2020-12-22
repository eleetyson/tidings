// import { loadStripe } from '@stripe/stripe-js'
// import { Elements, CardElement } from '@stripe/react-stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
//
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY)

export default function CheckoutCard(props) {

// using callback function for redirect to Stripe-hosted checkout page
  const handleSubmit = event => {
      event.preventDefault()
      props.handleCheckout()

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
    <div className="box-shadow-card  py-2 px-3">
      <p className="box-shadow-card-title">3. Send your postcard</p>

      <form onSubmit={props.handleSubmit}>
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
