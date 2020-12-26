// about page explaining this application
import React, { useEffect } from 'react'

export default function AboutContainer() {
  // clearing out user's local storage on initial page load
  useEffect(() => {
    localStorage.clear()
    document.title = 'About'
  }, [])

  return (
    <>
      <a className="align-self-start" href="/">« Back to postcard creation page</a>

      <div className="container  d-flex flex-column justify-content-center align-items-center  col-8 offset-2">
        <h2 className="font-weight-bold py-3 ">Tidings</h2>

        <div className="box-shadow-card">
          <h5 className="font-weight-bold">What is this?</h5>
          <p>Tidings lets you send a postcard with an image to anyone in the US.</p>
            <ol className="about-list">
              <li>Upload an image 📤</li>
              <li>Enter a destination address 📍</li>
              <li>Pay to send your postcard on its way 💌</li>
            </ol>

          <h5 className="font-weight-bold">How does it work?</h5>
          <p>Most of this relies on third-party APIs: <a href="https://cloudinary.com/" target="_blank" rel="noreferrer">Cloudinary</a> for storing images, <a href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a> for processing payments, and <a href="https://www.lob.com" target="_blank" rel="noreferrer">Lob</a> for actually creating & sending the postcards. Because these services are not free, it costs $1.00 to mail a card.</p>

          <h5 className="font-weight-bold">I still have more questions...</h5>
          <p>Feel free to check out the <a href="https://github.com/eleetyson/tidings" target="_blank" rel="noreferrer">codebase</a> for examples or <a href="mailto:eleetyson@gmail.com" target="_blank" rel="noreferrer">email me</a> with anything 👋</p>
        </div>
      </div>
    </>
  )

}
