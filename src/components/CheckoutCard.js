// simple card with button for checkout redirect
export default function CheckoutCard(props) {
  return (
    <div className="box-shadow-card">
      <p className="box-shadow-card-title">3. Send your postcard</p>

      <form onSubmit={props.handleCheckout}>
        <button className="paymentBtn hvr-icon-forward  btn btn-lg btn-block btn-success  border-0" type="submit" disabled={props.checkoutDisabled}>
          Checkout
          <i className="fa fa-arrow-circle-right  hvr-icon "></i>
        </button>
      </form>

    </div>
  )

}
