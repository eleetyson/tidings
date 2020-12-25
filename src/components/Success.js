import React, { useEffect } from 'react'

const Lob = require('lob')(process.env.REACT_APP_LOB_TEST_SECRET_KEY) // Lob object

export default function Success() {
  // clearing out user's local storage after payment
  useEffect(() => {
    localStorage.clear()
    document.title = 'Success'
  }, [])

  const createPostcard = () => {
    Lob.postcards.create({
      to: localStorage.remoteAddress,
      front: 'tmpl_fed93452925c5bf',
      back: 'tmpl_f92a8a1d43eef0e',
      merge_variables: {
        name: localStorage.senderName,
        img: localStorage.remotePicture
      }
    }, (err, postcard) => {
        if (err) {
          return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              An unexpected error occurred. For help, please email eleetyson@gmail.com.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )
        } else {
          return (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              Your postcard is on its way! It's set to arrive in 5 - 7 business days :)
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )
        }
      })

  } // end createPostcard()

  return (
    <>
      {createPostcard()}
      <br></br>

      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={event => window.location.href='/'}>
        « Back to postcard creation page
      </button>
    </>
  )

}
