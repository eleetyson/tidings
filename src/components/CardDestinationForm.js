// form for user to specify postcard destination address and other related info
import React, { useState } from 'react'
import SearchInput from './SearchInput'

export default function CardDestinationForm(props) {
  const initialState = { senderName: '', recipientName: '', address: '' }
  const [values, setValues] = useState(initialState)

  // state hook for updating user's form inputs
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(values)
    setValues(initialState)
  }

  const handleCallback = addressStr => {
    setValues({
      ...values,
      address: addressStr
    })
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">2. Specify a destination</p>

      <form onSubmit={handleSubmit} autoComplete="off" className="destination  d-flex flex-column justify-content-center align-items-center py-2">
        <input
          name="senderName" type="text" placeholder="Your name"
          value={values.senderName}
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          name="recipientName" type="text" placeholder="Recipient name"
          value={values.recipientName}
          onChange={handleChange}
          required
        />
        <br></br>

        <SearchInput handleCallback={handleCallback} />

        <br></br><br></br>
        <input type="submit" value="Check destination validity" />
      </form>
    </div>
  )

}
