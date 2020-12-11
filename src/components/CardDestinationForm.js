import React from 'react'
import { useForm } from 'react-hook-form'

export default function CardDestinationForm(props) {
  const { register, handleSubmit, errors, clearErrors } = useForm()
  const onSubmit = (data, event) => {
    console.log(data)
    event.target.reset()
  }

  return (
    <div className="box-shadow-card py-2 px-3">
      <p className="box-shadow-card-title">2. Specify a destination</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="senderName" placeholder="Your name"
          ref={ register({ required: true }) }
          onClick={() => clearErrors("senderName")}
        /> {errors.senderName && "your name is required"}
        <br></br>

        <input
          name="recipientName" placeholder="Recipient name"
          ref={ register({ required: true }) }
          onClick={() => clearErrors("recipientName")}
        /> {errors.recipientName && "a recipient name is required"}
        <br></br>


        <br></br><br></br>
        <input type="submit" />
      </form>

    </div>
  )

}
