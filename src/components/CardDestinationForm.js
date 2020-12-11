import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'

export default function CardDestinationForm(props) {
  // const { register, handleSubmit, errors, clearErrors } = useForm()
  const initialState = { senderName: '', recipientName: '', address: '' }
  const [values, setValues] = useState(initialState)

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

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">2. Specify a destination</p>

      <form onSubmit={handleSubmit}>
        <input
          name="senderName" type="text" placeholder="Your name" required
          value={values.senderName}
          onChange={handleChange}
        />
        <br></br>

        <input
          name="recipientName" type="text" placeholder="Recipient name" required
          value={values.recipientName}
          onChange={handleChange}
        />
        <br></br>

        <input
          name="address" type="text" placeholder="Recipient address" required
          value={values.address}
          onChange={handleChange}
        />

        <br></br><br></br>
        <input type="submit" />
      </form>

    </div>
  )

}
