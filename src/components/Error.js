import React, { useEffect } from 'react'

export default function Error() {
  // clearing out user's local storage after payment
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <>
      <div className="alert alert-danger alert-dismissible fade show  mt-4" role="alert">
        An unexpected error occurred. For help, please email eleetyson@gmail.com.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <br></br>

      <button type="button" className="btn btn-primary" onClick={event => window.location.href='/'}>
        « Back to postcard creation page
      </button>
    </>
  )

}
