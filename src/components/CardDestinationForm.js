// form for user to specify postcard destination address and other related info
import React, { useState } from 'react'
import SearchInput from './SearchInput'
import { geocodeByAddress } from 'react-places-autocomplete'


export default function CardDestinationForm(props) {
  const initialState = { senderName: '', recipientName: '', address1: '', address2: '', zip: '' }
  const [values, setValues] = useState(initialState)

  // state hook for updating user's form inputs
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  // callback updating the address field and state variable
  const handleAddressInputChange = addressStr => {
    setValues({ ...values, address1: addressStr, zip: '' })
  }

  // callback updating address field and zip code state variable
  const handleAddressInputSelect = addressStr => {
    setValues({ ...values, address1: addressStr })
    findZip(addressStr)
  }

  //
  const handleSubmit = event => {
    event.preventDefault()
    console.log(values)
    // setValues(initialState) // clear out form after submission

    // const Lob = require('lob')('test_7628c7795f9a9a42c5ae4bbbbfdf7ab616e')
    // on user submission, if( findZip() )
    // { create+send postcard w below info }
    // else throw an error message


    // let addressArr = values.address1.split(',').map(a => a.trim())
    // console.log(values.recipientName) // name
    // console.log(addressArr[0]) // address_line1
    // if (values.address2.length !== 0) { console.log(values.address2) } // address_line2?
    // console.log(addressArr[1]) // address_city
    // console.log(addressArr[2]) // address_state

    // console.log(values.addressArr[0]) // address_zip -- need this from google autocomplete
  }

  // state hook to update zip code
  const findZip = addressStr => {
    geocodeByAddress(addressStr)
      .then(results => (results[0]))
      .then(result => {
        let zipCode = result.formatted_address.split(',').slice(-2, -1)[0].split(" ").pop()
        setValues({ ...values, zip: zipCode })
      })
      .catch(error => console.error('Error', error))
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">2. Specify a destination</p>

      <form onSubmit={handleSubmit} className="destination  d-flex flex-column justify-content-center align-items-center py-2">

        <input
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

        <SearchInput
          address={values.address1}
          handleAddressInputChange={handleAddressInputChange}
          handleAddressInputSelect={handleAddressInputSelect}
        />
        <br></br>

        <input
          name="address2" type="text" placeholder="Recipient apartment / floor (optional)"
          value={values.address2}
          onChange={handleChange}
          autoComplete={'' + Math.random()}
        />
        <br></br>

        <br></br>
        <input type="submit" value="Check destination validity" />
      </form>
    </div>
  )

}
