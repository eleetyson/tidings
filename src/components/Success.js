// landing page redirect after successful payment that triggers postcard creation / scheduling
import React, { useState, useEffect } from 'react'
import LottieAnimation from '../visuals/Lottie'
import mail from '../visuals/mail.json'

const Lob = require('lob')(process.env.REACT_APP_LOB_LIVE_SECRET_KEY) // Lob object

export default function Success() {
  const [status, setStatus] = useState(null) // state variable tracking Lob postcard creation

  //
  useEffect(() => {
    createPostcard()
    document.title = 'Success'
    localStorage.clear()
  }, [])

  // creating and sending the postcard with Lob
  const createPostcard = () => {
    Lob.postcards.create({
      to: localStorage.remoteAddress,
      front: 'tmpl_7ba36541a3059b5', // test template front: tmpl_fed93452925c5bf
      back: 'tmpl_2472bffa85c7aa0', // test template back: tmpl_f92a8a1d43eef0e
      merge_variables: {
        name: localStorage.senderName,
        img: localStorage.remotePicture
      }
    }, (err, response) => {
        !!response ? setStatus(true) : setStatus(false)
      }
    )

  }

  // conditionally rendering alert based on postcard creation status
  const renderStatus = () => {
    if (status === null) {
      return null
    } else if (status === false) {
      return (
        <div className="alert alert-danger alert-dismissible fade show  mt-2" role="alert">
          An unexpected error occurred. For help, feel free to email me at eleetyson@gmail.com.
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    } else {
      return (
        <div className="alert alert-success alert-dismissible fade show  mt-2" role="alert">
          Your postcard is on its way! It's set to arrive in 5 - 7 business days :)
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    }

  }

  return (
    <>
      {renderStatus()}
      <br></br>

      <button type="button" className="btn btn-primary" onClick={event => window.location.href='/'}>
        « Back
      </button>

      { !!status && <LottieAnimation lotti={mail} height={400} width={400} /> }
    </>
  )

}
