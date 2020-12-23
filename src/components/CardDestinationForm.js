// form for user to specify postcard destination address and other related info
import React from 'react'
import SearchInput from './SearchInput'

export default function CardDestinationForm(props) {
  return (
    <div className="box-shadow-card  py-2 px-3">
      <p className="box-shadow-card-title">2. Specify a destination</p>

      <form onSubmit={props.handleSubmit} className="destination  d-flex flex-column justify-content-center align-items-center py-2">
        <input
          name="senderName" type="text" placeholder="Your name *"
          value={props.senderName}
          onChange={props.handleChange}
          autoComplete={'' + Math.random()}
          required
        />

        <input
          name="recipientName" type="text" placeholder="Recipient name *"
          value={props.recipientName}
          onChange={props.handleChange}
          autoComplete={'' + Math.random()}
          required
        />

        <SearchInput
          address={props.address1}
          handleAddressInputChange={props.handleAddressInputChange}
          handleAddressInputSelect={props.handleAddressInputSelect}
        />

        <input
          name="address2" type="text" placeholder="Recipient apartment / unit number"
          value={props.address2}
          onChange={props.handleChange}
          autoComplete={'' + Math.random()}
        />

        <input type="submit" value="Check destination validity" />
      </form>
    </div>
  )

}
