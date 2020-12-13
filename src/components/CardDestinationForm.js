// form for user to specify postcard destination address and other related info
import React, { useState } from 'react'
import SearchInput from './SearchInput'

export default function CardDestinationForm(props) {
  const initialState = { senderName: '', recipientName: '', address1: '', address2: '' }
  const [values, setValues] = useState(initialState)

  // state hook for updating user's form inputs
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  // callback updating the address field
  const handleCallback = addressStr => {
    setValues({ ...values, address1: addressStr })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(values)
    setValues(initialState)

    // const Lob = require('lob')('test_7628c7795f9a9a42c5ae4bbbbfdf7ab616e')

  }

  const handleFocus = event => {
    event.target.removeAttribute('readonly')
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">2. Specify a destination</p>

      <form onSubmit={handleSubmit} className="destination  d-flex flex-column justify-content-center align-items-center py-2">

        <input
          readOnly onFocus={handleFocus}
          name="senderName" type="text" placeholder="Your name"
          value={values.senderName}
          onChange={handleChange}
          autoComplete={'' + Math.random()}
          required
        />
        <br></br>

        <input
          name="recipientName" type="text" placeholder="Recipient name"
          value={values.recipientName}
          onChange={handleChange}
          autoComplete={'' + Math.random()}
          required
        />
        <br></br>

        <SearchInput address={values.address1} handleCallback={handleCallback} />
        <br></br>

        <input
          name="address2" type="text" placeholder="Recipient apartment / floor (optional)"
          value={values.address2}
          onChange={handleChange}
          autoComplete={'' + Math.random()}
        />
        <br></br>

        <br></br><br></br>
        <input type="submit" value="Check destination validity" />
      </form>
    </div>
  )

}
