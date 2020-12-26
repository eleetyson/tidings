import React, { useState, useEffect } from 'react'
import LottieAnimation from '../visuals/Lottie'
import mail from '../visuals/mail.json'

const Lob = require('lob')(process.env.REACT_APP_LOB_TEST_SECRET_KEY) // Lob object

// localStorage.setItem('senderName', 'e' )
// localStorage.setItem('remotePicture', 'e' )
// localStorage.setItem('remoteAddress', 'e' )

// localStorage.setItem('senderName', 'Ethan' )
// localStorage.setItem('remotePicture', 'https://res.cloudinary.com/df7waillu/image/upload/v1608913781/tidings/qsk7f3l7a6zxauwikl6f.jpg' )
// localStorage.setItem('remoteAddress', 'adr_e943322724a3a0a1' )

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
      front: 'tmpl_fed93452925c5bf',
      back: 'tmpl_f92a8a1d43eef0e',
      merge_variables: {
        name: localStorage.senderName,
        img: localStorage.remotePicture
      }
    }, (err, response) => {
        !!response ? setStatus(true) : setStatus(false)
      }
    )

  }

  // conditionally rendering message based on postcard creation status
  const renderStatus = () => {
    if (status === null) {
      return null
    } else if (status === false) {
      return <h4 className="mx-auto  mailed-failed">An unexpected error occurred. For help, feel free to email me at eleetyson@gmail.com.</h4>
    } else {
      return <h4 className="mx-auto  mailed">Your postcard is on its way! It's set to arrive in 5 - 7 business days :)</h4>
    }
  }

  return (
    <>
      {renderStatus()}
      <br></br>

      <button type="button" className="btn btn-primary" onClick={event => window.location.href='/'}>
        « Back to postcard creation page
      </button>

      { !!status && <LottieAnimation lotti={mail} height={400} width={600} /> }
    </>
  )

}
