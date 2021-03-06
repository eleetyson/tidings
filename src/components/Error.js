// landing page redirect after unsuccessful payment
import React, { useEffect } from 'react'
import Bug from '../visuals/bug.svg'

export default function Error() {

  // clearing out user's local storage after payment
  useEffect(() => {
    localStorage.clear()
    document.title = 'Error'
  }, [])

  return (
    <>
      <div className="alert alert-danger alert-dismissible fade show  mt-2" role="alert">
        An unexpected error occurred. For help, feel free to email me at eleetyson@gmail.com.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <br></br>

      <button type="button" className="btn btn-primary" onClick={event => window.location.href='/'}>
        « Back
      </button>
      <br></br>

      <img src={Bug} alt='Error illustration' className="error-illustration  mx-auto w-100" />
    </>
  )

}
